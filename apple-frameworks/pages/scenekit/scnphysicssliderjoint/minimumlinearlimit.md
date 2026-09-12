> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicssliderjoint/minimumlinearlimit](https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/minimumlinearlimit)

# minimumLinearLimit (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The minimum distance between the anchor points of the two bodies, relative to their initial positions.

## Declaration

```swift
var minimumLinearLimit: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `-INFINITY`. With this value, the joint can slide forever in the direction opposite the slider axis.

Set both this property and the [maximumLinearLimit](maximumlinearlimit.md) property to the same value to pin the bodies together at their anchor points. (Set both properties to `0.0` to pin the bodies together at their initial positions.) Bodies pinned together by a sliding joint may still rotate, depending on the values of the [minimumAngularLimit](minimumangularlimit.md) and [maximumAngularLimit](maximumangularlimit.md) properties.

## See Also

### Limiting the Motion of a Slider Joint

- [maximumLinearLimit](maximumlinearlimit.md): The maximum distance between the anchor points of the two bodies, relative to their initial positions.
- [minimumAngularLimit](minimumangularlimit.md): The minimum rotation angle between the two bodies, measured in radians relative to their initial orientations.
- [maximumAngularLimit](maximumangularlimit.md): The maximum rotation angle between the two bodies, measured in radians relative to their initial orientations.

# minimumLinearLimit (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The minimum distance between the anchor points of the two bodies, relative to their initial positions.

## Declaration

```objectivec
@property (nonatomic) CGFloat minimumLinearLimit;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `-INFINITY`. With this value, the joint can slide forever in the direction opposite the slider axis.

Set both this property and the [maximumLinearLimit](maximumlinearlimit.md) property to the same value to pin the bodies together at their anchor points. (Set both properties to `0.0` to pin the bodies together at their initial positions.) Bodies pinned together by a sliding joint may still rotate, depending on the values of the [minimumAngularLimit](minimumangularlimit.md) and [maximumAngularLimit](maximumangularlimit.md) properties.

## See Also

### Limiting the Motion of a Slider Joint

- [maximumLinearLimit](maximumlinearlimit.md): The maximum distance between the anchor points of the two bodies, relative to their initial positions.
- [minimumAngularLimit](minimumangularlimit.md): The minimum rotation angle between the two bodies, measured in radians relative to their initial orientations.
- [maximumAngularLimit](maximumangularlimit.md): The maximum rotation angle between the two bodies, measured in radians relative to their initial orientations.
