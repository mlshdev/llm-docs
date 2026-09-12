> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(cgpoint:)](https://developer.apple.com/documentation/foundation/nsvalue/init(cgpoint:))

# init(CGPoint:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value object containing the specified CoreGraphics point structure.

## Declaration

```swift
init(CGPoint point: CGPoint)
```

```swift
init(cgPoint point: CGPoint)
```

## Parameters

- `point`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the point information.

## See Also

### Related Documentation

- [CGPoint](../../corefoundation/cgpoint.md)

### Working with CoreGraphics Geometry Values

- [init(CGVector:)](init%28cgvector_%29.md): Creates a new value object containing the specified CoreGraphics vector structure.
- [init(CGSize:)](init%28cgsize_%29.md): Creates a new value object containing the specified CoreGraphics size structure.
- [init(CGRect:)](init%28cgrect_%29.md): Creates a new value object containing the specified CoreGraphics rectangle structure.
- [init(CGAffineTransform:)](init%28cgaffinetransform_%29.md): Creates a new value object containing the specified CoreGraphics affine transform structure.
- [cgPointValue](cgpointvalue.md): Returns the CoreGraphics point structure representation of the value.
- [cgVectorValue](cgvectorvalue.md): Returns the CoreGraphics vector structure representation of the value.
- [cgSizeValue](cgsizevalue.md): Returns the CoreGraphics size structure representation of the value.
- [cgRectValue](cgrectvalue.md): Returns the CoreGraphics rectangle structure representation of the value.
- [cgAffineTransformValue](cgaffinetransformvalue.md): Returns the CoreGraphics affine transform representation of the value.

# valueWithCGPoint: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value object containing the specified CoreGraphics point structure.

## Declaration

```objectivec
+ (NSValue *) valueWithCGPoint:(CGPoint) point;
```

## Parameters

- `point`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the point information.

## See Also

### Related Documentation

- [CGPoint](../../corefoundation/cgpoint.md)

### Working with CoreGraphics Geometry Values

- [valueWithCGVector:](init%28cgvector_%29.md): Creates a new value object containing the specified CoreGraphics vector structure.
- [valueWithCGSize:](init%28cgsize_%29.md): Creates a new value object containing the specified CoreGraphics size structure.
- [valueWithCGRect:](init%28cgrect_%29.md): Creates a new value object containing the specified CoreGraphics rectangle structure.
- [valueWithCGAffineTransform:](init%28cgaffinetransform_%29.md): Creates a new value object containing the specified CoreGraphics affine transform structure.
- [CGPointValue](cgpointvalue.md): Returns the CoreGraphics point structure representation of the value.
- [CGVectorValue](cgvectorvalue.md): Returns the CoreGraphics vector structure representation of the value.
- [CGSizeValue](cgsizevalue.md): Returns the CoreGraphics size structure representation of the value.
- [CGRectValue](cgrectvalue.md): Returns the CoreGraphics rectangle structure representation of the value.
- [CGAffineTransformValue](cgaffinetransformvalue.md): Returns the CoreGraphics affine transform representation of the value.
