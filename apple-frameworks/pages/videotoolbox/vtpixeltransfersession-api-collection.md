> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtpixeltransfersession-api-collection](https://developer.apple.com/documentation/videotoolbox/vtpixeltransfersession-api-collection)

# VTPixelTransferSession (Swift)

**Framework:** Video Toolbox  
**Kind:** API Collection

An object converts video data from source pixel buffers to destination pixel buffers.

<a id="overview"></a>

## Overview

A pixel transfer session supports the copying and/or conversion of images from source pixel buffers to destination pixel buffers. The basic workflow used when working with a pixel transfer session is as follows:

1. Create a pixel transfer session by calling [VTPixelTransferSessionCreate(allocator:pixelTransferSessionOut:)](vtpixeltransfersessioncreate%28allocator_pixeltransfersessionout_%29.md).
2. Optionally, configure the session with your desired [Pixel Transfer Properties](pixel-transfer-properties.md) by calling [VTSessionSetProperty(\_:key:value:)](vtsessionsetproperty%28__key_value_%29.md) or [VTSessionSetProperties(\_:propertyDictionary:)](vtsessionsetproperties%28__propertydictionary_%29.md).
3. Transfer images by calling [VTPixelTransferSessionTransferImage(\_:from:to:)](vtpixeltransfersessiontransferimage%28__from_to_%29.md).
4. When you finish with the pixel transfer session, call [VTPixelTransferSessionInvalidate(\_:)](vtpixeltransfersessioninvalidate%28__%29.md) to tear it down, and [CFRelease](../corefoundation/cfrelease.md) to free its memory.

## Topics

### Creating Sessions

- [VTPixelTransferSessionCreate(allocator:pixelTransferSessionOut:)](vtpixeltransfersessioncreate%28allocator_pixeltransfersessionout_%29.md): Creates a session for transferring images between Core Video image buffers that hold pixels in main memory.

### Configuring Sessions

- [Pixel Transfer Properties](pixel-transfer-properties.md): Properties used to configure a VideoToolbox pixel transfer session.

### Converting Image Data

- [VTPixelTransferSessionTransferImage(\_:from:to:)](vtpixeltransfersessiontransferimage%28__from_to_%29.md): Copies and/or converts an image from one pixel buffer to another.

### Inspecting Sessions

- [VTPixelTransferSessionGetTypeID()](vtpixeltransfersessiongettypeid%28%29.md): Retrieves the Core Foundation type identifier for the pixel transfer session.

### Ending Sessions

- [VTPixelTransferSessionInvalidate(\_:)](vtpixeltransfersessioninvalidate%28__%29.md): Tears down a pixel transfer session.

### Data Types

- [VTPixelTransferSession](vtpixeltransfersession.md): A reference to a VideoToolbox pixel transfer session.

## See Also

### Transformation

- [VTPixelRotationSession](vtpixelrotationsession-api-collection.md): An object that rotates source pixel buffers to destination pixel buffers.

# VTPixelTransferSession (Objective-C)

**Framework:** Video Toolbox  
**Kind:** API Collection

An object converts video data from source pixel buffers to destination pixel buffers.

<a id="overview"></a>

## Overview

A pixel transfer session supports the copying and/or conversion of images from source pixel buffers to destination pixel buffers. The basic workflow used when working with a pixel transfer session is as follows:

1. Create a pixel transfer session by calling [VTPixelTransferSessionCreate](vtpixeltransfersessioncreate%28allocator_pixeltransfersessionout_%29.md).
2. Optionally, configure the session with your desired [Pixel Transfer Properties](pixel-transfer-properties.md) by calling [VTSessionSetProperty](vtsessionsetproperty%28__key_value_%29.md) or [VTSessionSetProperties](vtsessionsetproperties%28__propertydictionary_%29.md).
3. Transfer images by calling [VTPixelTransferSessionTransferImage](vtpixeltransfersessiontransferimage%28__from_to_%29.md).
4. When you finish with the pixel transfer session, call [VTPixelTransferSessionInvalidate](vtpixeltransfersessioninvalidate%28__%29.md) to tear it down, and [CFRelease](../corefoundation/cfrelease.md) to free its memory.

## Topics

### Creating Sessions

- [VTPixelTransferSessionCreate](vtpixeltransfersessioncreate%28allocator_pixeltransfersessionout_%29.md): Creates a session for transferring images between Core Video image buffers that hold pixels in main memory.

### Configuring Sessions

- [Pixel Transfer Properties](pixel-transfer-properties.md): Properties used to configure a VideoToolbox pixel transfer session.

### Converting Image Data

- [VTPixelTransferSessionTransferImage](vtpixeltransfersessiontransferimage%28__from_to_%29.md): Copies and/or converts an image from one pixel buffer to another.

### Inspecting Sessions

- [VTPixelTransferSessionGetTypeID](vtpixeltransfersessiongettypeid%28%29.md): Retrieves the Core Foundation type identifier for the pixel transfer session.

### Ending Sessions

- [VTPixelTransferSessionInvalidate](vtpixeltransfersessioninvalidate%28__%29.md): Tears down a pixel transfer session.

### Data Types

- [VTPixelTransferSessionRef](vtpixeltransfersession.md): A reference to a VideoToolbox pixel transfer session.

## See Also

### Transformation

- [VTPixelRotationSession](vtpixelrotationsession-api-collection.md): An object that rotates source pixel buffers to destination pixel buffers.
