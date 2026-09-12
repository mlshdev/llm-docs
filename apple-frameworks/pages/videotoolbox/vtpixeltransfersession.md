> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtpixeltransfersession](https://developer.apple.com/documentation/videotoolbox/vtpixeltransfersession)

# VTPixelTransferSession (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.8+ · tvOS 16.0+ · visionOS 1.0+

A reference to a VideoToolbox pixel transfer session.

## Declaration

```swift
class VTPixelTransferSession
```

<a id="overview"></a>

## Overview

A pixel transfer session supports the copying and/or conversion of images from source `CVPixelBuffers` to destination `CVPixelBuffers`. The session is a reference-counted Core Foundation (CF) object.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

# VTPixelTransferSessionRef (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.8+ · tvOS 16.0+ · visionOS 1.0+

A reference to a VideoToolbox pixel transfer session.

## Declaration

```objectivec
typedef struct OpaqueVTPixelTransferSession * VTPixelTransferSessionRef;
```

<a id="overview"></a>

## Overview

A pixel transfer session supports the copying and/or conversion of images from source `CVPixelBuffers` to destination `CVPixelBuffers`. The session is a reference-counted Core Foundation (CF) object.
