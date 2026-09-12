> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokereference/init(ink:strokepath:transform:mask:)](https://developer.apple.com/documentation/pencilkit/pkstrokereference/init(ink:strokepath:transform:mask:))

# init(ink:strokePath:transform:mask:) (Swift)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a stroke with the line properties, path, transform, and mask that you specify.

## Declaration

```swift
init(ink: PKInk, strokePath: PKStrokePath, transform: CGAffineTransform, mask: UIBezierPath?)
```

```swift
init(ink: PKInk, strokePath: PKStrokePath, transform: CGAffineTransform, mask: NSBezierPath?)
```

## Parameters

- `ink`: The [PKInkReference](../pkinkreference.md) the class uses to render this stroke.
- `strokePath`: The B-spline path that describes this stroke.
- `transform`: The [CGAffineTransform](../../corefoundation/cgaffinetransform.md) to apply to this stroke. Defaults to [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md).
- `mask`: The pretransform mask the class uses to clip the rendering of the stroke.

## See Also

### Creating a stroke object

- [init(ink:strokePath:transform:mask:randomSeed:)](init%28ink_strokepath_transform_mask_randomseed_%29.md): Creates a stroke with the line properties, path, transform, mask, and random seed that you specify.

# initWithInk:strokePath:transform:mask: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a stroke with the line properties, path, transform, and mask that you specify.

## Declaration

```objectivec
- (instancetype) initWithInk:(PKInk *) ink strokePath:(PKStrokePath *) strokePath transform:(CGAffineTransform) transform mask:(UIBezierPath *) mask;
```

```objectivec
- (instancetype) initWithInk:(PKInk *) ink strokePath:(PKStrokePath *) strokePath transform:(CGAffineTransform) transform mask:(NSBezierPath *) mask;
```

## Parameters

- `ink`: The [PKInk](../pkinkreference.md) the class uses to render this stroke.
- `strokePath`: The B-spline path that describes this stroke.
- `transform`: The [CGAffineTransform](../../corefoundation/cgaffinetransform.md) to apply to this stroke. Defaults to [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md).
- `mask`: The pretransform mask the class uses to clip the rendering of the stroke.

## See Also

### Creating a stroke object

- [initWithInk:strokePath:transform:mask:randomSeed:](init%28ink_strokepath_transform_mask_randomseed_%29.md): Creates a stroke with the line properties, path, transform, mask, and random seed that you specify.
