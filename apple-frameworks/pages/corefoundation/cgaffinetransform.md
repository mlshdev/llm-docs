> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cgaffinetransform](https://developer.apple.com/documentation/corefoundation/cgaffinetransform)

# CGAffineTransform (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
struct CGAffineTransform
```

## Topics

### Initializers

- [init()](cgaffinetransform/init%28%29.md)
- [init(\_:)](cgaffinetransform/init%28__%29.md)
- [init(\_:\_:\_:\_:\_:\_:)](cgaffinetransform/init%28____________%29.md)
- [init(a:b:c:d:tx:ty:)](cgaffinetransform/init%28a_b_c_d_tx_ty_%29.md)
- [init(rotationAngle:)](cgaffinetransform/init%28rotationangle_%29.md)
- [init(scaleX:y:)](cgaffinetransform/init%28scalex_y_%29.md)
- [init(translationX:y:)](cgaffinetransform/init%28translationx_y_%29.md)

### Instance Properties

- [a](cgaffinetransform/a.md)
- [b](cgaffinetransform/b.md)
- [c](cgaffinetransform/c.md)
- [d](cgaffinetransform/d.md)
- [isIdentity](cgaffinetransform/isidentity.md)
- [tx](cgaffinetransform/tx.md)
- [ty](cgaffinetransform/ty.md)

### Instance Methods

- [concatenating(\_:)](cgaffinetransform/concatenating%28__%29.md)
- [decomposed()](cgaffinetransform/decomposed%28%29.md)
- [inverted()](cgaffinetransform/inverted%28%29.md)
- [rotated(by:)](cgaffinetransform/rotated%28by_%29.md)
- [scaledBy(x:y:)](cgaffinetransform/scaledby%28x_y_%29.md)
- [translatedBy(x:y:)](cgaffinetransform/translatedby%28x_y_%29.md)

### Type Properties

- [identity](cgaffinetransform/identity.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [CGAffineTransformComponents](cgaffinetransformcomponents.md)
- [CGFloat](cgfloat-swift.struct.md): The basic type for floating-point scalar values in Core Graphics and related frameworks.
- [CGPoint](cgpoint.md)
- [CGRect](cgrect.md)
- [CGSize](cgsize.md): A structure that contains width and height values.
- [CGVector](cgvector.md): A structure that contains a two-dimensional vector.

# CGAffineTransform (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
struct CGAffineTransform;
```

## Topics

### Instance Properties

- [a](cgaffinetransform/a.md)
- [b](cgaffinetransform/b.md)
- [c](cgaffinetransform/c.md)
- [d](cgaffinetransform/d.md)
- [tx](cgaffinetransform/tx.md)
- [ty](cgaffinetransform/ty.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Structures

- [CGAffineTransformComponents](cgaffinetransformcomponents.md)
- [CGPoint](cgpoint.md)
- [CGRect](cgrect.md)
- [CGSize](cgsize.md): A structure that contains width and height values.
- [CGVector](cgvector.md): A structure that contains a two-dimensional vector.
- [IUnknownVTbl](iunknownvtbl.md)
