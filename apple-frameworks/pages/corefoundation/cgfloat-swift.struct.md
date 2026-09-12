> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cgfloat-swift.struct](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct)

# CGFloat

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS · watchOS 1.0+

The basic type for floating-point scalar values in Core Graphics and related frameworks.

## Declaration

```swift
@frozen struct CGFloat
```

<a id="overview"></a>

## Overview

The size and precision of this type depend on the CPU architecture. When you build for a 64-bit CPU, the [CGFloat](https://developer.apple.com/library/archive/releasenotes/Foundation/RN-FoundationOlderNotes/index.html#//apple_ref/doc/uid/TP40008080-TRANSLATED_CHAPTER_965-TRANSLATED_DEST_121) type is a 64-bit, IEEE double-precision floating point type, equivalent to the [Double](https://developer.apple.com/documentation/swift/double) type. When you build for a 32-bit CPU, the [CGFloat](https://developer.apple.com/library/archive/releasenotes/Foundation/RN-FoundationOlderNotes/index.html#//apple_ref/doc/uid/TP40008080-TRANSLATED_CHAPTER_965-TRANSLATED_DEST_121) type is a 32-bit, IEEE single-precision floating point type, equivalent to the [Float](https://developer.apple.com/documentation/swift/float) type.

## Topics

### Initializers

- [init()](cgfloat-swift.struct/init%28%29.md): Create an instance initialized to zero.
- [init(\_:)](cgfloat-swift.struct/init%28__%29-7dkuk.md): Create an instance initialized to `value`.
- [init(\_:)](cgfloat-swift.struct/init%28__%29-99gmf.md): Deprecated. Creates a new value, rounded to the closest possible representation.
- [init(bitPattern:)](cgfloat-swift.struct/init%28bitpattern_%29.md)
- [init(exactly:)](cgfloat-swift.struct/init%28exactly_%29.md)
- [init(nan:signaling:)](cgfloat-swift.struct/init%28nan_signaling_%29.md)
- [init(truncating:)](cgfloat-swift.struct/init%28truncating_%29.md)

### Instance Properties

- [bitPattern](cgfloat-swift.struct/bitpattern.md)
- [native](cgfloat-swift.struct/native.md): The native value.

### Type Aliases

- [CGFloat.NativeType](cgfloat-swift.struct/nativetype.md): The native type used to store the `CGFloat`.

### Default Implementations

- [CustomReflectable Implementations](cgfloat-swift.struct/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](cgfloat-swift.struct/customstringconvertible-implementations.md)
- [ExpressibleByFloatLiteral Implementations](cgfloat-swift.struct/expressiblebyfloatliteral-implementations.md)
- [ExpressibleByIntegerLiteral Implementations](cgfloat-swift.struct/expressiblebyintegerliteral-implementations.md)
- [Hashable Implementations](cgfloat-swift.struct/hashable-implementations.md)
- [Strideable Implementations](cgfloat-swift.struct/strideable-implementations.md)

## Relationships

### Conforms To

- [AdditiveArithmetic](https://developer.apple.com/documentation/swift/additivearithmetic)
- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [BinaryFloatingPoint](https://developer.apple.com/documentation/swift/binaryfloatingpoint)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CVAttachmentValueRepresentable](../corevideo/cvattachmentvaluerepresentable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [FloatingPoint](https://developer.apple.com/documentation/swift/floatingpoint)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Numeric](https://developer.apple.com/documentation/swift/numeric)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SignedNumeric](https://developer.apple.com/documentation/swift/signednumeric)
- [Strideable](https://developer.apple.com/documentation/swift/strideable)
- [VectorArithmetic](https://developer.apple.com/documentation/swiftui/vectorarithmetic)

## See Also

### Structures

- [CGAffineTransform](cgaffinetransform.md)
- [CGAffineTransformComponents](cgaffinetransformcomponents.md)
- [CGPoint](cgpoint.md)
- [CGRect](cgrect.md)
- [CGSize](cgsize.md): A structure that contains width and height values.
- [CGVector](cgvector.md): A structure that contains a two-dimensional vector.
