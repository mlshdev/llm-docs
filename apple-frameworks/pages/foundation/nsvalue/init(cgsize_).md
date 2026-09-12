> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(cgsize:)](https://developer.apple.com/documentation/foundation/nsvalue/init(cgsize:))

# init(CGSize:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value object containing the specified CoreGraphics size structure.

## Declaration

```swift
init(CGSize size: CGSize)
```

```swift
init(cgSize size: CGSize)
```

## Parameters

- `size`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the size information.

## See Also

### Related Documentation

- [CGSize](../../corefoundation/cgsize.md): A structure that contains width and height values.

### Working with CoreGraphics Geometry Values

- [init(CGPoint:)](init%28cgpoint_%29.md): Creates a new value object containing the specified CoreGraphics point structure.
- [init(CGVector:)](init%28cgvector_%29.md): Creates a new value object containing the specified CoreGraphics vector structure.
- [init(CGRect:)](init%28cgrect_%29.md): Creates a new value object containing the specified CoreGraphics rectangle structure.
- [init(CGAffineTransform:)](init%28cgaffinetransform_%29.md): Creates a new value object containing the specified CoreGraphics affine transform structure.
- [cgPointValue](cgpointvalue.md): Returns the CoreGraphics point structure representation of the value.
- [cgVectorValue](cgvectorvalue.md): Returns the CoreGraphics vector structure representation of the value.
- [cgSizeValue](cgsizevalue.md): Returns the CoreGraphics size structure representation of the value.
- [cgRectValue](cgrectvalue.md): Returns the CoreGraphics rectangle structure representation of the value.
- [cgAffineTransformValue](cgaffinetransformvalue.md): Returns the CoreGraphics affine transform representation of the value.

# valueWithCGSize: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value object containing the specified CoreGraphics size structure.

## Declaration

```objectivec
+ (NSValue *) valueWithCGSize:(CGSize) size;
```

## Parameters

- `size`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the size information.

## See Also

### Related Documentation

- [CGSize](../../corefoundation/cgsize.md): A structure that contains width and height values.

### Working with CoreGraphics Geometry Values

- [valueWithCGPoint:](init%28cgpoint_%29.md): Creates a new value object containing the specified CoreGraphics point structure.
- [valueWithCGVector:](init%28cgvector_%29.md): Creates a new value object containing the specified CoreGraphics vector structure.
- [valueWithCGRect:](init%28cgrect_%29.md): Creates a new value object containing the specified CoreGraphics rectangle structure.
- [valueWithCGAffineTransform:](init%28cgaffinetransform_%29.md): Creates a new value object containing the specified CoreGraphics affine transform structure.
- [CGPointValue](cgpointvalue.md): Returns the CoreGraphics point structure representation of the value.
- [CGVectorValue](cgvectorvalue.md): Returns the CoreGraphics vector structure representation of the value.
- [CGSizeValue](cgsizevalue.md): Returns the CoreGraphics size structure representation of the value.
- [CGRectValue](cgrectvalue.md): Returns the CoreGraphics rectangle structure representation of the value.
- [CGAffineTransformValue](cgaffinetransformvalue.md): Returns the CoreGraphics affine transform representation of the value.
