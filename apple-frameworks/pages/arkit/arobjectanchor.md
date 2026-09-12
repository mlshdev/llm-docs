> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arobjectanchor](https://developer.apple.com/documentation/arkit/arobjectanchor)

# ARObjectAnchor (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+

An anchor for a real-world 3D object that ARKit detects in the physical environment.

## Declaration

```swift
class ARObjectAnchor
```

<a id="overview"></a>

## Overview

When you run a world-tracking AR session and specify [ARReferenceObject](arreferenceobject.md) objects for the session configuration’s [detectionObjects](arworldtrackingconfiguration/detectionobjects.md) property, ARKit searches for those objects in the real-world environment. When the session recognizes an object, it automatically adds to its list of anchors an [ARObjectAnchor](arobjectanchor.md) for each detected object.

To place virtual 3D content that matches the position or size of the detected object, use the anchor’s inherited [transform](aranchor/transform.md) property together with the [center](arreferenceobject/center.md) and [extent](arreferenceobject/extent.md) of the anchor’s [referenceObject](arobjectanchor/referenceobject.md).

## Topics

### Identifying Detected Objects

- [referenceObject](arobjectanchor/referenceobject.md): The detected object referenced by the object anchor.

### Instance Properties

- [isTracked](arobjectanchor/istracked.md): A Boolean value indicating whether the anchor is currently being tracked.

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

### Physical Objects

- [Visualizing and interacting with a reconstructed scene](visualizing-and-interacting-with-a-reconstructed-scene.md): Estimate the shape of the physical environment using a polygonal mesh.
- [Scanning and Detecting 3D Objects](scanning-and-detecting-3d-objects.md): Record spatial features of real-world objects, then use the results to find those objects in the user’s environment and trigger AR content.
- [ARReferenceObject](arreferenceobject.md): The description of a 3D object that you want ARKit to detect in the physical environment.

# ARObjectAnchor (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+

An anchor for a real-world 3D object that ARKit detects in the physical environment.

## Declaration

```objectivec
@interface ARObjectAnchor : ARAnchor
```

<a id="overview"></a>

## Overview

When you run a world-tracking AR session and specify [ARReferenceObject](arreferenceobject.md) objects for the session configuration’s [detectionObjects](arworldtrackingconfiguration/detectionobjects.md) property, ARKit searches for those objects in the real-world environment. When the session recognizes an object, it automatically adds to its list of anchors an [ARObjectAnchor](arobjectanchor.md) for each detected object.

To place virtual 3D content that matches the position or size of the detected object, use the anchor’s inherited [transform](aranchor/transform.md) property together with the [center](arreferenceobject/center.md) and [extent](arreferenceobject/extent.md) of the anchor’s [referenceObject](arobjectanchor/referenceobject.md).

## Topics

### Identifying Detected Objects

- [referenceObject](arobjectanchor/referenceobject.md): The detected object referenced by the object anchor.

### Instance Properties

- [isTracked](arobjectanchor/istracked.md): A Boolean value indicating whether the anchor is currently being tracked.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

### Conforms To

- [ARTrackable](artrackable.md)

## See Also

### Physical Objects

- [Visualizing and interacting with a reconstructed scene](visualizing-and-interacting-with-a-reconstructed-scene.md): Estimate the shape of the physical environment using a polygonal mesh.
- [Scanning and Detecting 3D Objects](scanning-and-detecting-3d-objects.md): Record spatial features of real-world objects, then use the results to find those objects in the user’s environment and trigger AR content.
- [ARReferenceObject](arreferenceobject.md): The description of a 3D object that you want ARKit to detect in the physical environment.
