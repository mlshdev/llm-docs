> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cgsize](https://developer.apple.com/documentation/corefoundation/cgsize)

# CGSize (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains width and height values.

## Declaration

```swift
struct CGSize
```

<a id="overview"></a>

## Overview

A [CGSize](cgsize.md) structure is sometimes used to represent a distance vector, rather than a physical size. As a vector, its values can be negative. To normalize a [CGRect](cgrect.md) structure so that its size is represented by positive values, call the [standardized](cgrect/standardized.md) function.

## Topics

### Geometric Properties

- [width](cgsize/width.md): A width value.
- [height](cgsize/height.md): A height value.

### Special Values

- [zero](cgsize/zero.md)
- [init()](cgsize/init%28%29.md): Creates a size with zero width and height.

### Transforming Sizes

- [applying(\_:)](cgsize/applying%28__%29.md)

### Alternate Representations

- [dictionaryRepresentation](cgsize/dictionaryrepresentation.md)
- [init(dictionaryRepresentation:)](cgsize/init%28dictionaryrepresentation_%29.md)
- [customPlaygroundQuickLook](cgsize/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for this instance.

### Comparing Sizes

- [CGSizeEqualToSize(\_:\_:)](../coregraphics/cgsizeequaltosize%28____%29.md): Deprecated. Returns whether two sizes are equal.

### Initializers

- [init(\_:)](cgsize/init%28__%29.md): Convert `CVImageSize` to [CGSize](cgsize.md)
- [init(width:height:)](cgsize/init%28width_height_%29-2du3k.md)
- [init(width:height:)](cgsize/init%28width_height_%29-63ffm.md)
- [init(width:height:)](cgsize/init%28width_height_%29-83b96.md)

### Instance Properties

- [formattedDescription](cgsize/formatteddescription.md)

### Instance Methods

- [equalTo(\_:)](cgsize/equalto%28__%29.md)

## Relationships

### Conforms To

- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CVAttachmentValueRepresentable](../corevideo/cvattachmentvaluerepresentable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [CGAffineTransform](cgaffinetransform.md)
- [CGAffineTransformComponents](cgaffinetransformcomponents.md)
- [CGFloat](cgfloat-swift.struct.md): The basic type for floating-point scalar values in Core Graphics and related frameworks.
- [CGPoint](cgpoint.md)
- [CGRect](cgrect.md)
- [CGVector](cgvector.md): A structure that contains a two-dimensional vector.

# CGSize (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains width and height values.

## Declaration

```objectivec
struct CGSize;
```

<a id="overview"></a>

## Overview

A [CGSize](cgsize.md) structure is sometimes used to represent a distance vector, rather than a physical size. As a vector, its values can be negative. To normalize a [CGRect](cgrect.md) structure so that its size is represented by positive values, call the [standardized](cgrect/standardized.md) function.

## Topics

### Geometric Properties

- [width](cgsize/width.md): A width value.
- [height](cgsize/height.md): A height value.

### Comparing Sizes

- [CGSizeEqualToSize](../coregraphics/cgsizeequaltosize%28____%29.md): Deprecated. Returns whether two sizes are equal.

## Relationships

### Conforms To

- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [CVAttachmentValueRepresentable](../corevideo/cvattachmentvaluerepresentable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Structures

- [CGAffineTransform](cgaffinetransform.md)
- [CGAffineTransformComponents](cgaffinetransformcomponents.md)
- [CGPoint](cgpoint.md)
- [CGRect](cgrect.md)
- [CGVector](cgvector.md): A structure that contains a two-dimensional vector.
- [IUnknownVTbl](iunknownvtbl.md)
