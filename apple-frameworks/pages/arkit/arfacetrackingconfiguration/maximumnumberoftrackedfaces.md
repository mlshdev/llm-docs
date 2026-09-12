> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfacetrackingconfiguration/maximumnumberoftrackedfaces](https://developer.apple.com/documentation/arkit/arfacetrackingconfiguration/maximumnumberoftrackedfaces)

# maximumNumberOfTrackedFaces (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The number of faces to track during the session.

## Declaration

```swift
var maximumNumberOfTrackedFaces: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is one. Set the maximum number of tracked faces to limit the number of faces that can be tracked in a given frame. Check the value of [supportedNumberOfTrackedFaces](supportednumberoftrackedfaces.md) before setting this property.

No new anchors will be provided to your delegate’s [session(\_:didAdd:)](../arsessiondelegate/session%28__didadd_%29.md) if more than the maximum number of faces are visible in the camera feed. In that case, ARKit continues to track the faces that already have associated face anchors.

## See Also

### Tracking Multiple Faces

- [supportedNumberOfTrackedFaces](supportednumberoftrackedfaces.md): The maximum number of faces that the framework can track.

# maximumNumberOfTrackedFaces (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The number of faces to track during the session.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger maximumNumberOfTrackedFaces;
```

<a id="Discussion"></a>

## Discussion

The default value is one. Set the maximum number of tracked faces to limit the number of faces that can be tracked in a given frame. Check the value of [supportedNumberOfTrackedFaces](supportednumberoftrackedfaces.md) before setting this property.

No new anchors will be provided to your delegate’s [session:didAddAnchors:](../arsessiondelegate/session%28__didadd_%29.md) if more than the maximum number of faces are visible in the camera feed. In that case, ARKit continues to track the faces that already have associated face anchors.

## See Also

### Tracking Multiple Faces

- [supportedNumberOfTrackedFaces](supportednumberoftrackedfaces.md): The maximum number of faces that the framework can track.
