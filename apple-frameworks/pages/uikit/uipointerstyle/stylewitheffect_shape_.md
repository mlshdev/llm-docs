> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uipointerstyle/stylewitheffect:shape:

# styleWithEffect:shape:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Applies the provided content effect and pointer shape to the current region.

## Declaration

```objectivec
+ (instancetype) styleWithEffect:(UIPointerEffect *) effect shape:(UIPointerShape *) shape;
```

## Parameters

- `effect`: The [UIPointerEffect](../uipointereffect-swift.enum.md) to apply to the region.
- `shape`: The [UIPointerShape](../uipointershape-swift.enum.md) to apply to the region.

## See Also

### Creating a pointer style

- [styleWithShape:constrainedAxes:](stylewithshape_constrainedaxes_.md): Morphs the pointer into the provided shape when it moves over the current region.
- [hiddenPointerStyle](hidden%28%29.md): Hides the pointer when it moves over the current region.
- [systemPointerStyle](system%28%29.md): Morphs the pointer into a default system-style pointer.
