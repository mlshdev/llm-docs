> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicssliderjoint/minimumangularlimit](https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/minimumangularlimit)

# minimumAngularLimit (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The minimum rotation angle between the two bodies, measured in radians relative to their initial orientations.

## Declaration

```swift
var minimumAngularLimit: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default (and minimum) value of this property is `-M_PI`. With this value, the joint can spin clockwise (relative to the first body) with no limit.

Set both this property and the [maximumAngularLimit](maximumangularlimit.md) property to the same value to prevent the bodies from rotating around their anchor points. (Set both properties to `0.0` to fix the bodies in their initial orientations.) Bodies whose orientation is fixed by a sliding joint may still slide, depending on the values of the [minimumLinearLimit](minimumlinearlimit.md) and [maximumLinearLimit](maximumlinearlimit.md) properties.

## See Also

### Limiting the Motion of a Slider Joint

- [minimumLinearLimit](minimumlinearlimit.md): The minimum distance between the anchor points of the two bodies, relative to their initial positions.
- [maximumLinearLimit](maximumlinearlimit.md): The maximum distance between the anchor points of the two bodies, relative to their initial positions.
- [maximumAngularLimit](maximumangularlimit.md): The maximum rotation angle between the two bodies, measured in radians relative to their initial orientations.

# minimumAngularLimit (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The minimum rotation angle between the two bodies, measured in radians relative to their initial orientations.

## Declaration

```objectivec
@property (nonatomic) CGFloat minimumAngularLimit;
```

<a id="Discussion"></a>

## Discussion

The default (and minimum) value of this property is `-M_PI`. With this value, the joint can spin clockwise (relative to the first body) with no limit.

Set both this property and the [maximumAngularLimit](maximumangularlimit.md) property to the same value to prevent the bodies from rotating around their anchor points. (Set both properties to `0.0` to fix the bodies in their initial orientations.) Bodies whose orientation is fixed by a sliding joint may still slide, depending on the values of the [minimumLinearLimit](minimumlinearlimit.md) and [maximumLinearLimit](maximumlinearlimit.md) properties.

## See Also

### Limiting the Motion of a Slider Joint

- [minimumLinearLimit](minimumlinearlimit.md): The minimum distance between the anchor points of the two bodies, relative to their initial positions.
- [maximumLinearLimit](maximumlinearlimit.md): The maximum distance between the anchor points of the two bodies, relative to their initial positions.
- [maximumAngularLimit](maximumangularlimit.md): The maximum rotation angle between the two bodies, measured in radians relative to their initial orientations.
