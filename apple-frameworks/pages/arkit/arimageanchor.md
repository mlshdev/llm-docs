> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arimageanchor](https://developer.apple.com/documentation/arkit/arimageanchor)

# ARImageAnchor (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+

An anchor for a known image that ARKit detects in the physical environment.

## Declaration

```swift
class ARImageAnchor
```

<a id="overview"></a>

## Overview

When you run a world-tracking AR session and specify [ARReferenceImage](arreferenceimage.md) objects for the session configuration’s [detectionImages](arworldtrackingconfiguration/detectionimages.md) property, ARKit searches for those images in the real-world environment. When the session recognizes an image, it automatically adds an [ARImageAnchor](arimageanchor.md) for each detected image to its list of anchors.

To find the extent of a recognized image in the scene, use the inherited [transform](aranchor/transform.md) property together with the [physicalSize](arreferenceimage/physicalsize.md) of the anchor’s [referenceImage](arimageanchor/referenceimage.md).

## Topics

### Identifying Detected Images

- [referenceImage](arimageanchor/referenceimage.md): The detected image referenced by the image anchor.

### Estimating Scale

- [estimatedScaleFactor](arimageanchor/estimatedscalefactor.md): A factor between the initial size and the estimated physical size.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

### Conforms To

- [ARAnchorCopying](aranchorcopying.md)
- [ARTrackable](artrackable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Image Detection

- [Tracking and altering images](tracking-and-altering-images.md): Create images from rectangular shapes found in the user’s environment, and augment their appearance.
- [Detecting Images in an AR Experience](detecting-images-in-an-ar-experience.md): React to known 2D images in the user’s environment, and use their positions to place AR content.
- [ARReferenceImage](arreferenceimage.md): A 2D image that you want ARKit to detect in the physical environment.

# ARImageAnchor (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+

An anchor for a known image that ARKit detects in the physical environment.

## Declaration

```objectivec
@interface ARImageAnchor : ARAnchor
```

<a id="overview"></a>

## Overview

When you run a world-tracking AR session and specify [ARReferenceImage](arreferenceimage.md) objects for the session configuration’s [detectionImages](arworldtrackingconfiguration/detectionimages.md) property, ARKit searches for those images in the real-world environment. When the session recognizes an image, it automatically adds an [ARImageAnchor](arimageanchor.md) for each detected image to its list of anchors.

To find the extent of a recognized image in the scene, use the inherited [transform](aranchor/transform.md) property together with the [physicalSize](arreferenceimage/physicalsize.md) of the anchor’s [referenceImage](arimageanchor/referenceimage.md).

## Topics

### Identifying Detected Images

- [referenceImage](arimageanchor/referenceimage.md): The detected image referenced by the image anchor.

### Estimating Scale

- [estimatedScaleFactor](arimageanchor/estimatedscalefactor.md): A factor between the initial size and the estimated physical size.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

### Conforms To

- [ARTrackable](artrackable.md)

## See Also

### Image Detection

- [Tracking and altering images](tracking-and-altering-images.md): Create images from rectangular shapes found in the user’s environment, and augment their appearance.
- [ARReferenceImage](arreferenceimage.md): A 2D image that you want ARKit to detect in the physical environment.
