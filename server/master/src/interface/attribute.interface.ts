import { EUserStatus } from '../entity/db.type';

export interface UserAttribute {
    id?: number;
    username?: string;
    password?: string;
    type?: string;
    status?: EUserStatus;
    salt?: string;
    iterations?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserInfoAttribute {
    id?: number;
    userId?: number;
    firstName?: string;
    lastName?: string;
    phone?: number;
    address?: string;
    gender?: string;
    email?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserMetaAttribute {
    id?: number;
    userId?: number;
    avatar?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface RoleAttribute {
    id?: number;
    name?: string;
    code?: string;
}

export interface UserRoleAttribute {
    id?: number;
    userId?: number;
    roleId?: number;
    createdAt?: Date;
}

export interface SportAttribute {
    id?: number;
    name?: string;
    code?: string;
    createdAt?: Date;
}

export interface SportCenterAttribute {
    id?: number;
    userId?: number;
    name?: string;
    code?: string;
    country?: string;
    city?: string;
    district?: string;
    commune?: string;
    address?: string;
    avatar?: string;
    latitude?: number;
    longitude?: number;
    timeOpen?: number;
    timeClose?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface SportGroundAttribute {
    id?: number;
    sportCenterId?: number;
    sportId?: number;
    name?: string;
    code?: string;
    type?: string;
    avatar?: string;
    quantity?: number;
    quantityInStock?: number;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface SportEquipmentAttribute {
    id?: number;
    sportCenterId?: number;
    name?: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface SportGroundEquipmentAttribute {
    id?: number;
    sportEquipmentId?: number;
    sportGroundId?: number;
    quantity?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface SportCenterSportAttribute {
    id?: number;
    sportCenterId?: number;
    sportId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface SportGroundTimeSlotAttribute {
    id?: number;
    sportGroundId?: number;
    quantity?: number;
    startTime?: number;
    endTime?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface BookingAttribute {
    id?: number;
    userId?: number;
    sportGroundId?: number;
    sportCenterId?: number;
    timeSlotId?: number;
    detail?: string;
    equipment?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface PaymentAttribute {
    id?: number;
    bookingId?: number;
    amount?: number;
    currency?: string;
    qrCode?: string;
    createdAt?: Date;
    updatedAt?: Date;
}