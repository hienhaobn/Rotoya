import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ImageService } from './../service/image.service';

@ApiTags('Image')
@Controller('image')
export class ImageController {
    constructor(
        private readonly imageService: ImageService
    ) { }

    @Get(':name')
    getImage(@Param('name') name: string, @Res() res: Response) {
        return res.sendFile(this.imageService.getImage(name));
    }
}
