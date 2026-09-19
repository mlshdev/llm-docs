> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmetadatafocustrackedobject

# AVMetadataFocusTrackedObject (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A metadata object that is maintained in focus by the camera’s auto focus system continuously tracking it.

## Declaration

```swift
class AVMetadataFocusTrackedObject
```

<a id="overview"></a>

## Overview

[AVMetadataFocusTrackedObject](avmetadatafocustrackedobject.md) represents a single tracked object in a picture. It is an immutable object describing the focus-tracked object.

On supported platforms, [AVCaptureMetadataOutput](avcapturemetadataoutput.md) outputs arrays of focus-tracked objects. See AVCaptureOutput.h.

## Relationships

### Inherits From

- [AVMetadataObject](avmetadataobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# AVMetadataFocusTrackedObject (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A metadata object that is maintained in focus by the camera’s auto focus system continuously tracking it.

## Declaration

```objectivec
@interface AVMetadataFocusTrackedObject : AVMetadataObject
```

<a id="overview"></a>

## Overview

[AVMetadataFocusTrackedObject](avmetadatafocustrackedobject.md) represents a single tracked object in a picture. It is an immutable object describing the focus-tracked object.

On supported platforms, [AVCaptureMetadataOutput](avcapturemetadataoutput.md) outputs arrays of focus-tracked objects. See AVCaptureOutput.h.

## Relationships

### Inherits From

- [AVMetadataObject](avmetadataobject.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
