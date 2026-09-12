> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cgrect](https://developer.apple.com/documentation/corefoundation/cgrect)

# CGRect (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
struct CGRect
```

## Topics

### Initializers

- [init()](cgrect/init%28%29.md)
- [init(dictionaryRepresentation:)](cgrect/init%28dictionaryrepresentation_%29.md)
- [init(origin:size:)](cgrect/init%28origin_size_%29.md)
- [init(x:y:width:height:)](cgrect/init%28x_y_width_height_%29-27bxn.md)
- [init(x:y:width:height:)](cgrect/init%28x_y_width_height_%29-3kjh6.md)
- [init(x:y:width:height:)](cgrect/init%28x_y_width_height_%29-3xq19.md)

### Instance Properties

- [customPlaygroundQuickLook](cgrect/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for this instance.
- [dictionaryRepresentation](cgrect/dictionaryrepresentation.md)
- [formattedDescription](cgrect/formatteddescription.md)
- [height](cgrect/height.md)
- [integral](cgrect/integral.md)
- [isEmpty](cgrect/isempty.md)
- [isInfinite](cgrect/isinfinite.md)
- [isNull](cgrect/isnull.md)
- [maxX](cgrect/maxx.md)
- [maxY](cgrect/maxy.md)
- [midX](cgrect/midx.md)
- [midY](cgrect/midy.md)
- [minX](cgrect/minx.md)
- [minY](cgrect/miny.md)
- [origin](cgrect/origin.md)
- [size](cgrect/size.md)
- [standardized](cgrect/standardized.md)
- [width](cgrect/width.md)

### Instance Methods

- [applying(\_:)](cgrect/applying%28__%29.md)
- [clip()](cgrect/clip%28%29.md): Modifies the current graphics context clipping path by intersecting it with this rect. This permanently modifies the graphics state, so the current state should be saved beforehand and restored afterwards.
- [contains(\_:)](cgrect/contains%28__%29-6n2uh.md)
- [contains(\_:)](cgrect/contains%28__%29-8fdse.md)
- [divided(atDistance:from:)](cgrect/divided%28atdistance_from_%29.md)
- [equalTo(\_:)](cgrect/equalto%28__%29.md)
- [fill(using:)](cgrect/fill%28using_%29.md): Fills this rect in the current NSGraphicsContext in the context’s fill color. The compositing operation of the fill defaults to the context’s compositing operation, not necessarily using `.copy` like `NSRectFill()`.
- [frame(withWidth:using:)](cgrect/frame%28withwidth_using_%29.md): Draws a frame around the inside of this rect in the current NSGraphicsContext in the context’s fill color The compositing operation of the fill defaults to the context’s compositing operation, not necessarily using `.copy` like `NSFrameRect()`.
- [inset(by:)](cgrect/inset%28by_%29.md)
- [insetBy(dx:dy:)](cgrect/insetby%28dx_dy_%29.md)
- [intersection(\_:)](cgrect/intersection%28__%29.md)
- [intersects(\_:)](cgrect/intersects%28__%29.md)
- [offsetBy(dx:dy:)](cgrect/offsetby%28dx_dy_%29.md)
- [union(\_:)](cgrect/union%28__%29.md)

### Type Properties

- [infinite](cgrect/infinite.md)
- [null](cgrect/null.md)
- [zero](cgrect/zero.md)

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
- [CGSize](cgsize.md): A structure that contains width and height values.
- [CGVector](cgvector.md): A structure that contains a two-dimensional vector.

# CGRect (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
struct CGRect;
```

## Topics

### Instance Properties

- [origin](cgrect/origin.md)
- [size](cgrect/size.md)

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
- [CGSize](cgsize.md): A structure that contains width and height values.
- [CGVector](cgvector.md): A structure that contains a two-dimensional vector.
- [IUnknownVTbl](iunknownvtbl.md)
