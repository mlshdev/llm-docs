> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerstyle/stylewithshape:constrainedaxes:](https://developer.apple.com/documentation/uikit/uipointerstyle/stylewithshape:constrainedaxes:)

# styleWithShape:constrainedAxes:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Morphs the pointer into the provided shape when it moves over the current region.

## Declaration

```objectivec
+ (instancetype) styleWithShape:(UIPointerShape *) shape constrainedAxes:(UIAxis) axes;
```

## Parameters

- `shape`: The [UIPointerShape](../uipointershape-swift.enum.md) to apply to the region.
- `axes`: An array of [UIAxis](../uiaxis.md) directions in which to constrain the pointer.

## See Also

### Creating a pointer style

- [styleWithEffect:shape:](stylewitheffect_shape_.md): Applies the provided content effect and pointer shape to the current region.
- [hiddenPointerStyle](hidden%28%29.md): Hides the pointer when it moves over the current region.
- [systemPointerStyle](system%28%29.md): Morphs the pointer into a default system-style pointer.
