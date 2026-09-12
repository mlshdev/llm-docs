> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtpixelrotationsession-api-collection](https://developer.apple.com/documentation/videotoolbox/vtpixelrotationsession-api-collection)

# VTPixelRotationSession (Swift)

**Framework:** Video Toolbox  
**Kind:** API Collection

An object that rotates source pixel buffers to destination pixel buffers.

<a id="overview"></a>

## Overview

To create a rotation session, call [VTPixelRotationSessionCreate(\_:\_:)](vtpixelrotationsessioncreate%28____%29.md). Optionally configure the session by calling [VTSessionSetProperty(\_:key:value:)](vtsessionsetproperty%28__key_value_%29.md).

To transfer pixels call [VTPixelRotationSessionRotateImage(\_:\_:\_:)](vtpixelrotationsessionrotateimage%28______%29.md).

When you’re done with the session, call [CFRelease](../corefoundation/cfrelease.md) to tear it down and release your object reference.

## Topics

### Managing a Session

- [VTPixelRotationSessionCreate(\_:\_:)](vtpixelrotationsessioncreate%28____%29.md): Creates a session to rotate images between pixel buffers.
- [VTPixelRotationSessionInvalidate(\_:)](vtpixelrotationsessioninvalidate%28__%29.md): Tears down a pixel rotation session.

### Configuring a Session

- [Pixel Rotation Properties](pixel-rotation-properties.md): Properties used to configure a VideoToolbox pixel rotation session.

### Rotating an Image

- [VTPixelRotationSessionRotateImage(\_:\_:\_:)](vtpixelrotationsessionrotateimage%28______%29.md): Rotates a source pixel buffer and writes the output to the destination pixel buffer.

### Inspecting the Type Identifier

- [VTPixelRotationSessionGetTypeID()](vtpixelrotationsessiongettypeid%28%29.md): Returns the Core Foundation type identifier for the rotation session.

### Data Types

- [VTPixelRotationSession](vtpixelrotationsession.md): A reference to a pixel rotation session.

## See Also

### Transformation

- [VTPixelTransferSession](vtpixeltransfersession-api-collection.md): An object converts video data from source pixel buffers to destination pixel buffers.

# VTPixelRotationSession (Objective-C)

**Framework:** Video Toolbox  
**Kind:** API Collection

An object that rotates source pixel buffers to destination pixel buffers.

<a id="overview"></a>

## Overview

To create a rotation session, call [VTPixelRotationSessionCreate](vtpixelrotationsessioncreate%28____%29.md). Optionally configure the session by calling [VTSessionSetProperty](vtsessionsetproperty%28__key_value_%29.md).

To transfer pixels call [VTPixelRotationSessionRotateImage](vtpixelrotationsessionrotateimage%28______%29.md).

When you’re done with the session, call [CFRelease](../corefoundation/cfrelease.md) to tear it down and release your object reference.

## Topics

### Managing a Session

- [VTPixelRotationSessionCreate](vtpixelrotationsessioncreate%28____%29.md): Creates a session to rotate images between pixel buffers.
- [VTPixelRotationSessionInvalidate](vtpixelrotationsessioninvalidate%28__%29.md): Tears down a pixel rotation session.

### Configuring a Session

- [Pixel Rotation Properties](pixel-rotation-properties.md): Properties used to configure a VideoToolbox pixel rotation session.

### Rotating an Image

- [VTPixelRotationSessionRotateImage](vtpixelrotationsessionrotateimage%28______%29.md): Rotates a source pixel buffer and writes the output to the destination pixel buffer.

### Inspecting the Type Identifier

- [VTPixelRotationSessionGetTypeID](vtpixelrotationsessiongettypeid%28%29.md): Returns the Core Foundation type identifier for the rotation session.

### Data Types

- [VTPixelRotationSessionRef](vtpixelrotationsession.md): A reference to a pixel rotation session.

## See Also

### Transformation

- [VTPixelTransferSession](vtpixeltransfersession-api-collection.md): An object converts video data from source pixel buffers to destination pixel buffers.
