import { SportEquipment } from './SportEquipment.entity';
import { SportGround } from './SportGround.entity';
import { User } from './User.entity';
import { SportCenterAttribute } from '../interface/attribute.interface';
import { BaseEntity } from '../base/BaseEntity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
    PrimaryColumn,
    ManyToMany,
    JoinTable
} from "typeorm";
import { Sport } from './Sport.entity';
import { SportCenterSport } from './SportCenterSport.entity';
import { Booking } from './Booking.entity';

@Entity({ name: 'sport_center' })
export class SportCenter extends BaseEntity<SportCenterAttribute> implements SportCenterAttribute {
    @PrimaryGeneratedColumn()
    id?: number;

    @PrimaryColumn({
        type: 'int',
        width: 11,
        nullable: false
    })
    userId?: number;

    @Column({
        type: 'varchar',
        length: '45',
        nullable: false
    })
    name?: string;

    @Column({
        type: 'varchar',
        length: '45',
        nullable: true
    })
    code?: string;

    @Column({
        type: 'varchar',
        length: '45',
        nullable: false
    })
    country?: string;

    @Column({
        type: 'varchar',
        length: '45',
        nullable: false
    })
    city?: string;

    @Column({
        type: 'varchar',
        length: '45',
        nullable: false
    })
    district?: string;

    @Column({
        type: 'varchar',
        length: '45',
        nullable: true
    })
    commune?: string;

    @Column({
        type: 'varchar',
        length: '255',
        nullable: true
    })
    address?: string;

    @Column({
        type: 'varchar',
        length: '45',
        nullable: true
    })
    avatar?: string;

    @Column({
        type: 'float',
        precision: 12,
        scale: 8,
        nullable: true
    })
    latitude?: number;

    @Column({
        type: 'float',
        precision: 12,
        scale: 8,
        nullable: true
    })
    longitude?: number;

    @Column({
        type: 'float',
        precision: 4,
        scale: 2,
        nullable: false,
        default: "'0.00'"
    })
    timeOpen?: number;

    @Column({
        type: 'float',
        precision: 4,
        scale: 2,
        nullable: false,
        default: "'0.00'"
    })
    timeClose?: number;

    @Column({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date;

    @Column({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
    })
    updatedAt: Date;

    @ManyToOne(type => User, user => user.sportCenters)
    @JoinColumn({ name: 'userId' })
    user: User;

    @OneToMany(type => SportGround, sportGround => sportGround.sportCenter)
    sportGrounds: SportGround[];

    @OneToMany(type => SportEquipment, sportEquipment => sportEquipment.sportCenter)
    sportEquipments: SportEquipment[];

    @ManyToMany(type => Sport, sport => sport.sportCenters)
    @JoinTable({
        name: "sport_sportcenter",
        joinColumn: {
            name: 'sportCenterId',
            referencedColumnName: 'id'
        }
    })
    sports: Sport[];

    @OneToMany(type => SportCenterSport, sportCenterSport => sportCenterSport.sportCenter)
    sportCenterSports: SportCenterSport[];

    @OneToMany(type => Booking, booking => booking.sportCenter)
    bookings: Booking[];
}