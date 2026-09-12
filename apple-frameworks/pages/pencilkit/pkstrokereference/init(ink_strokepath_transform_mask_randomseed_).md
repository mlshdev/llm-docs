> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokereference/init(ink:strokepath:transform:mask:randomseed:)](https://developer.apple.com/documentation/pencilkit/pkstrokereference/init(ink:strokepath:transform:mask:randomseed:))

# init(ink:strokePath:transform:mask:randomSeed:) (Swift)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a stroke with the line properties, path, transform, mask, and random seed that you specify.

## Declaration

```swift
init(ink: PKInk, strokePath: PKStrokePath, transform: CGAffineTransform, mask: UIBezierPath?, randomSeed: UInt32)
```

```swift
init(ink: PKInk, strokePath: PKStrokePath, transform: CGAffineTransform, mask: NSBezierPath?, randomSeed: UInt32)
```

## Parameters

- `ink`: The [PKInkReference](../pkinkreference.md) used to render this stroke.
- `strokePath`: The B-spline path that describes this stroke.
- `transform`: The [CGAffineTransform](../../corefoundation/cgaffinetransform.md) to apply to this stroke. Defaults to [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md).
- `mask`: The pretransform mask used to clip the rendering of the stroke.
- `randomSeed`: The random seed for the stroke.

## See Also

### Creating a stroke object

- [init(ink:strokePath:transform:mask:)](init%28ink_strokepath_transform_mask_%29.md): Creates a stroke with the line properties, path, transform, and mask that you specify.

# initWithInk:strokePath:transform:mask:randomSeed: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a stroke with the line properties, path, transform, mask, and random seed that you specify.

## Declaration

```objectivec
- (instancetype) initWithInk:(PKInk *) ink strokePath:(PKStrokePath *) strokePath transform:(CGAffineTransform) transform mask:(UIBezierPath *) mask randomSeed:(uint32_t) randomSeed;
```

```objectivec
- (instancetype) initWithInk:(PKInk *) ink strokePath:(PKStrokePath *) strokePath transform:(CGAffineTransform) transform mask:(NSBezierPath *) mask randomSeed:(uint32_t) randomSeed;
```

## Parameters

- `ink`: The [PKInk](../pkinkreference.md) used to render this stroke.
- `strokePath`: The B-spline path that describes this stroke.
- `transform`: The [CGAffineTransform](../../corefoundation/cgaffinetransform.md) to apply to this stroke. Defaults to [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md).
- `mask`: The pretransform mask used to clip the rendering of the stroke.
- `randomSeed`: The random seed for the stroke.

## See Also

### Creating a stroke object

- [initWithInk:strokePath:transform:mask:](init%28ink_strokepath_transform_mask_%29.md): Creates a stroke with the line properties, path, transform, and mask that you specify.
