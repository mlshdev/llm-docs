> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnplane/cornersegmentcount](https://developer.apple.com/documentation/scenekit/scnplane/cornersegmentcount)

# cornerSegmentCount (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of line segments used to create each rounded corner of the plane. Animatable.

## Declaration

```swift
var cornerSegmentCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

A larger number of segments adds more vertex data to the geometry, creating a smoother curve for each rounded corner at a cost to rendering performance.

The default corner segment count is `10`. Setting this property’s value to a number less than `1` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [heightSegmentCount](heightsegmentcount.md): The number of subdivisions in the plane’s surface along its vertical axis. Animatable.
- [widthSegmentCount](widthsegmentcount.md): The number of subdivisions in the plane’s surface along its horizontal axis. Animatable.

### Adding Rounded Corners

- [cornerRadius](cornerradius.md): The radius of curvature for the plane’s corners. Animatable.

# cornerSegmentCount (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The number of line segments used to create each rounded corner of the plane. Animatable.

## Declaration

```objectivec
@property (nonatomic) NSInteger cornerSegmentCount;
```

<a id="Discussion"></a>

## Discussion

A larger number of segments adds more vertex data to the geometry, creating a smoother curve for each rounded corner at a cost to rendering performance.

The default corner segment count is `10`. Setting this property’s value to a number less than `1` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [heightSegmentCount](heightsegmentcount.md): The number of subdivisions in the plane’s surface along its vertical axis. Animatable.
- [widthSegmentCount](widthsegmentcount.md): The number of subdivisions in the plane’s surface along its horizontal axis. Animatable.

### Adding Rounded Corners

- [cornerRadius](cornerradius.md): The radius of curvature for the plane’s corners. Animatable.
