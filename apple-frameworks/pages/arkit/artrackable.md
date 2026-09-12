> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/artrackable](https://developer.apple.com/documentation/arkit/artrackable)

# ARTrackable (Swift)

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An interface for objects that track the location of real-world objects or locations.

## Declaration

```swift
protocol ARTrackable : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol is adopted by ARKit classes, such as the [ARFaceAnchor](arfaceanchor.md) class, that represent moving objects in a scene.

ARKit automatically manages representations of such objects in an active AR session, ensuring that changes in the real-world object’s position and orientation (the [transform](aranchor/transform.md) property for anchors) are reflected in corresponding ARKit objects. The [isTracked](artrackable/istracked.md) property indicates whether the current transform is valid with respect to movement of the real-world object.

Trackable anchor classes affect other ARKit behaviors:

- The [getCurrentWorldMap(completionHandler:)](arsession/getcurrentworldmap%28completionhandler_%29.md) method automatically includes only non-trackable anchors in the [ARWorldMap](arworldmap.md) it creates. (After you create a world map, you can add other anchors to it if you choose.)
- [ARSCNView](arscnview.md) and [ARSKView](arskview.md) automatically hide the nodes for anchors whose [isTracked](artrackable/istracked.md) property is [false](https://developer.apple.com/documentation/swift/false).
- World-tracking sessions use non-trackable anchors to optimize tracking quality in the area around each anchor. Trackable anchors do not affect world tracking.

## Topics

### Monitoring Tracking State

- [isTracked](artrackable/istracked.md): A Boolean value that indicates whether the object’s transform is valid.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [ARAppClipCodeAnchor](arappclipcodeanchor.md)
- [ARBodyAnchor](arbodyanchor.md)
- [ARFaceAnchor](arfaceanchor.md)
- [ARGeoAnchor](argeoanchor.md)
- [ARImageAnchor](arimageanchor.md)
- [ARObjectAnchor](arobjectanchor.md)

## See Also

### Common Types

- [ARAnchor](aranchor.md): An object that specifies the position and orientation of an item in the physical environment.
- [ARAnchorCopying](aranchorcopying.md): Support for custom anchor subclasses.

# ARTrackable (Objective-C)

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An interface for objects that track the location of real-world objects or locations.

## Declaration

```objectivec
@protocol ARTrackable <NSObject>
```

<a id="overview"></a>

## Overview

This protocol is adopted by ARKit classes, such as the [ARFaceAnchor](arfaceanchor.md) class, that represent moving objects in a scene.

ARKit automatically manages representations of such objects in an active AR session, ensuring that changes in the real-world object’s position and orientation (the [transform](aranchor/transform.md) property for anchors) are reflected in corresponding ARKit objects. The [isTracked](artrackable/istracked.md) property indicates whether the current transform is valid with respect to movement of the real-world object.

Trackable anchor classes affect other ARKit behaviors:

- The [getCurrentWorldMapWithCompletionHandler:](arsession/getcurrentworldmap%28completionhandler_%29.md) method automatically includes only non-trackable anchors in the [ARWorldMap](arworldmap.md) it creates. (After you create a world map, you can add other anchors to it if you choose.)
- [ARSCNView](arscnview.md) and [ARSKView](arskview.md) automatically hide the nodes for anchors whose [isTracked](artrackable/istracked.md) property is [false](https://developer.apple.com/documentation/swift/false).
- World-tracking sessions use non-trackable anchors to optimize tracking quality in the area around each anchor. Trackable anchors do not affect world tracking.

## Topics

### Monitoring Tracking State

- [isTracked](artrackable/istracked.md): A Boolean value that indicates whether the object’s transform is valid.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [ARAppClipCodeAnchor](arappclipcodeanchor.md)
- [ARBodyAnchor](arbodyanchor.md)
- [ARFaceAnchor](arfaceanchor.md)
- [ARGeoAnchor](argeoanchor.md)
- [ARImageAnchor](arimageanchor.md)
- [ARObjectAnchor](arobjectanchor.md)

## See Also

### Common Types

- [ARAnchor](aranchor.md): An object that specifies the position and orientation of an item in the physical environment.
- [ARAnchorCopying](aranchorcopying.md): Support for custom anchor subclasses.
