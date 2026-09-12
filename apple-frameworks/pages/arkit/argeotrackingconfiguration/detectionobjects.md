> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingconfiguration/detectionobjects](https://developer.apple.com/documentation/arkit/argeotrackingconfiguration/detectionobjects)

# detectionObjects (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A set of 3D objects that the framework attempts to detect in the user’s environment.

## Declaration

```swift
var detectionObjects: Set<ARReferenceObject> { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to choose known 3D objects for ARKit to find in the user’s environment and present as [ARObjectAnchor](../arobjectanchor.md) for use in your AR experience.

To create reference objects for detection, scan them in a world-tracking session and use [ARWorldMap](../arworldmap.md) to extract [ARReferenceObject](../arreferenceobject.md) instances. You can then save reference objects as files and package them in any ARKit app you create using an Xcode asset catalog.

## See Also

### Detecting and tracking real-world objects

- [trackingObjects](trackingobjects.md): Objects to track in the scene.

# detectionObjects (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A set of 3D objects that the framework attempts to detect in the user’s environment.

## Declaration

```objectivec
@property (nonatomic, copy) NSSet<ARReferenceObject *> * detectionObjects;
```

<a id="Discussion"></a>

## Discussion

Use this property to choose known 3D objects for ARKit to find in the user’s environment and present as [ARObjectAnchor](../arobjectanchor.md) for use in your AR experience.

To create reference objects for detection, scan them in a world-tracking session and use [ARWorldMap](../arworldmap.md) to extract [ARReferenceObject](../arreferenceobject.md) instances. You can then save reference objects as files and package them in any ARKit app you create using an Xcode asset catalog.

## See Also

### Detecting and tracking real-world objects

- [trackingObjects](trackingobjects.md): Objects to track in the scene.
