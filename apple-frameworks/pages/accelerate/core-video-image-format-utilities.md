> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/core-video-image-format-utilities](https://developer.apple.com/documentation/accelerate/core-video-image-format-utilities)

# Core Video image format utilities (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Create, copy, and query Core Video image format descriptions.

## Topics

### Creating Core Video image formats

- [vImageCVImageFormat](vimagecvimageformat.md): A mutable description of image encoding in a Core Video pixel buffer.
- [vImageConstCVImageFormat](vimageconstcvimageformat.md): An immutable description of image encoding in a Core Video pixel buffer.
- [vImageCVImageFormat_CreateWithCVPixelBuffer(\_:)](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md): Creates the description of the image encoding in an existing Core Video pixel buffer.
- [vImageCVImageFormat_Create(\_:\_:\_:\_:\_:)](vimagecvimageformat_create%28__________%29.md): Creates the description of image encoding in a Core Video pixel buffer from the specified properties.

### Copying Core Video image formats

- [vImageCVImageFormat_Copy(\_:)](vimagecvimageformat_copy%28__%29.md): Returns a mutable copy of an immutable Core Video image format.

### Querying and setting the alpha hint

- [vImageCVImageFormat_GetAlphaHint(\_:)](vimagecvimageformat_getalphahint%28__%29.md): Returns the alpha hint of a Core Video image format.
- [vImageCVImageFormat_SetAlphaHint(\_:\_:)](vimagecvimageformat_setalphahint%28____%29.md): Sets the alpha hint of a Core Video image format.

### Querying and setting channel information

- [vImageCVImageFormat_GetChannelCount(\_:)](vimagecvimageformat_getchannelcount%28__%29.md): Returns the number of channels, including alpha, for the Core Video image format.
- [vImageCVImageFormat_GetChannelDescription(\_:\_:)](vimagecvimageformat_getchanneldescription%28____%29.md): Returns the channel description for a particular channel type.
- [vImageCVImageFormat_CopyChannelDescription(\_:\_:\_:)](vimagecvimageformat_copychanneldescription%28______%29.md): Copies the channel description for a particular channel type to an image format.
- [vImageCVImageFormat_GetChannelNames(\_:)](vimagecvimageformat_getchannelnames%28__%29.md): Returns the names of the channels of a Core Video image format.
- [vImageChannelDescription](vimagechanneldescription.md): A description of the range and clamp limits for a pixel format.

### Querying and setting the chrominance siting

- [vImageCVImageFormat_GetChromaSiting(\_:)](vimagecvimageformat_getchromasiting%28__%29.md): Returns the chrominance siting of a Core Video image format.
- [vImageCVImageFormat_SetChromaSiting(\_:\_:)](vimagecvimageformat_setchromasiting%28____%29.md): Sets the chrominance siting of a Core Video image format.

### Querying and setting the color space

- [vImageCVImageFormat_GetColorSpace(\_:)](vimagecvimageformat_getcolorspace%28__%29.md): Returns the color space of a Core Video image format.
- [vImageCVImageFormat_SetColorSpace(\_:\_:)](vimagecvimageformat_setcolorspace%28____%29.md): Sets the color space of a Core Video image format.

### Querying and setting the conversion matrix

- [vImageCVImageFormat_GetConversionMatrix(\_:\_:)](vimagecvimageformat_getconversionmatrix%28____%29.md): Returns a pointer to the RGB-to-YpCbCr conversion matrix of a Core Video image format.
- [vImageCVImageFormat_CopyConversionMatrix(\_:\_:\_:)](vimagecvimageformat_copyconversionmatrix%28______%29.md): Copies an RGB-to-YpCbCr conversion matrix to an image format’s internal matrix.

### Querying the image format code

- [vImageCVImageFormat_GetFormatCode(\_:)](vimagecvimageformat_getformatcode%28__%29.md): Returns the four-character code that encodes the pixel format of a Core Video image format.

### Querying and setting the user data

- [vImageCVImageFormat_GetUserData(\_:)](vimagecvimageformat_getuserdata%28__%29.md): Returns the user data of a Core Video image format.
- [vImageCVImageFormat_SetUserData(\_:\_:\_:)](vimagecvimageformat_setuserdata%28______%29.md): Sets the user data of a Core Video image format.

# Core Video image format utilities (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Create, copy, and query Core Video image format descriptions.

## Topics

### Creating Core Video image formats

- [vImageCVImageFormatRef](vimagecvimageformat.md): A mutable description of image encoding in a Core Video pixel buffer.
- [vImageConstCVImageFormatRef](vimageconstcvimageformat.md): An immutable description of image encoding in a Core Video pixel buffer.
- [vImageCVImageFormat_CreateWithCVPixelBuffer](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md): Creates the description of the image encoding in an existing Core Video pixel buffer.
- [vImageCVImageFormat_Create](vimagecvimageformat_create%28__________%29.md): Creates the description of image encoding in a Core Video pixel buffer from the specified properties.

### Copying Core Video image formats

- [vImageCVImageFormat_Copy](vimagecvimageformat_copy%28__%29.md): Returns a mutable copy of an immutable Core Video image format.

### Querying and setting the alpha hint

- [vImageCVImageFormat_GetAlphaHint](vimagecvimageformat_getalphahint%28__%29.md): Returns the alpha hint of a Core Video image format.
- [vImageCVImageFormat_SetAlphaHint](vimagecvimageformat_setalphahint%28____%29.md): Sets the alpha hint of a Core Video image format.

### Querying and setting channel information

- [vImageCVImageFormat_GetChannelCount](vimagecvimageformat_getchannelcount%28__%29.md): Returns the number of channels, including alpha, for the Core Video image format.
- [vImageCVImageFormat_GetChannelDescription](vimagecvimageformat_getchanneldescription%28____%29.md): Returns the channel description for a particular channel type.
- [vImageCVImageFormat_CopyChannelDescription](vimagecvimageformat_copychanneldescription%28______%29.md): Copies the channel description for a particular channel type to an image format.
- [vImageCVImageFormat_GetChannelNames](vimagecvimageformat_getchannelnames%28__%29.md): Returns the names of the channels of a Core Video image format.
- [vImageChannelDescription](vimagechanneldescription.md): A description of the range and clamp limits for a pixel format.

### Querying and setting the chrominance siting

- [vImageCVImageFormat_GetChromaSiting](vimagecvimageformat_getchromasiting%28__%29.md): Returns the chrominance siting of a Core Video image format.
- [vImageCVImageFormat_SetChromaSiting](vimagecvimageformat_setchromasiting%28____%29.md): Sets the chrominance siting of a Core Video image format.

### Querying and setting the color space

- [vImageCVImageFormat_GetColorSpace](vimagecvimageformat_getcolorspace%28__%29.md): Returns the color space of a Core Video image format.
- [vImageCVImageFormat_SetColorSpace](vimagecvimageformat_setcolorspace%28____%29.md): Sets the color space of a Core Video image format.

### Querying and setting the conversion matrix

- [vImageCVImageFormat_GetConversionMatrix](vimagecvimageformat_getconversionmatrix%28____%29.md): Returns a pointer to the RGB-to-YpCbCr conversion matrix of a Core Video image format.
- [vImageCVImageFormat_CopyConversionMatrix](vimagecvimageformat_copyconversionmatrix%28______%29.md): Copies an RGB-to-YpCbCr conversion matrix to an image format’s internal matrix.

### Querying the image format code

- [vImageCVImageFormat_GetFormatCode](vimagecvimageformat_getformatcode%28__%29.md): Returns the four-character code that encodes the pixel format of a Core Video image format.

### Querying and setting the user data

- [vImageCVImageFormat_GetUserData](vimagecvimageformat_getuserdata%28__%29.md): Returns the user data of a Core Video image format.
- [vImageCVImageFormat_SetUserData](vimagecvimageformat_setuserdata%28______%29.md): Sets the user data of a Core Video image format.

### Image format memory management

- [vImageCVImageFormat_Retain](vimagecvimageformat_retain.md): Retains a Core Video image format.
- [vImageCVImageFormat_Release](vimagecvimageformat_release.md): Releases a Core Video image format.
