> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arframe/anchors

# anchors (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The list of anchors representing positions tracked or objects detected in the scene.

## Declaration

```swift
var anchors: [ARAnchor] { get }
```

<a id="Discussion"></a>

## Discussion

You can manually add or remove anchors to track locations in the scene using the [ARSession](../arsession.md) class. Depending on session configuration, ARKit may also add anchors, such as the origin of the world coordinate system or automatically detected planes.

## See Also

### Tracking and interacting with the real world

- [raycastQuery(from:allowing:alignment:)](raycastquery%28from_allowing_alignment_%29.md): Get a ray-cast query for a screen point.
- [hitTest(\_:types:)](hittest%28__types_%29.md): Deprecated. Searches for real-world objects or AR anchors in the captured camera image.

# anchors (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The list of anchors representing positions tracked or objects detected in the scene.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<__kindof ARAnchor *> * anchors;
```

<a id="Discussion"></a>

## Discussion

You can manually add or remove anchors to track locations in the scene using the [ARSession](../arsession.md) class. Depending on session configuration, ARKit may also add anchors, such as the origin of the world coordinate system or automatically detected planes.

## See Also

### Tracking and interacting with the real world

- [raycastQueryFromPoint:allowingTarget:alignment:](raycastquery%28from_allowing_alignment_%29.md): Get a ray-cast query for a screen point.
- [hitTest:types:](hittest%28__types_%29.md): Deprecated. Searches for real-world objects or AR anchors in the captured camera image.
