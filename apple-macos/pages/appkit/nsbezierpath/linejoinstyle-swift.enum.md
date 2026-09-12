> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/linejoinstyle-swift.enum](https://developer.apple.com/documentation/appkit/nsbezierpath/linejoinstyle-swift.enum)

# NSBezierPath.LineJoinStyle (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the shape of the joins between connected segments of a stroked path.

## Declaration

```swift
enum LineJoinStyle
```

## Topics

### Constants

- [NSBezierPath.LineJoinStyle.miter](linejoinstyle-swift.enum/miter.md): Specifies a miter line shape of the joints between connected segments of a stroked path.
- [NSBezierPath.LineJoinStyle.round](linejoinstyle-swift.enum/round.md): Specifies a round line shape of the joints between connected segments of a stroked path.
- [NSBezierPath.LineJoinStyle.bevel](linejoinstyle-swift.enum/bevel.md): Specifies a bevel line shape of the joints between connected segments of a stroked path.

### Initializers

- [init(rawValue:)](linejoinstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSBezierPath.ElementType](elementtype.md): Constants that specify basic path element commands.
- [NSBezierPath.LineCapStyle](linecapstyle-swift.enum.md): Constants that specify the shape of endpoints for an open path when it is stroked.
- [NSBezierPath.WindingRule](windingrule-swift.enum.md): Constants that specify the winding rule a Bézier path uses.

# NSLineJoinStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the shape of the joins between connected segments of a stroked path.

## Declaration

```objectivec
enum NSLineJoinStyle : NSUInteger;
```

## Topics

### Constants

- [NSLineJoinStyleMiter](linejoinstyle-swift.enum/miter.md): Specifies a miter line shape of the joints between connected segments of a stroked path.
- [NSLineJoinStyleRound](linejoinstyle-swift.enum/round.md): Specifies a round line shape of the joints between connected segments of a stroked path.
- [NSLineJoinStyleBevel](linejoinstyle-swift.enum/bevel.md): Specifies a bevel line shape of the joints between connected segments of a stroked path.

### Deprecated Constants

- [NSMiterLineJoinStyle](../nsmiterlinejoinstyle.md): Deprecated. Specifies a miter line shape of the joints between connected segments of a stroked path.
- [NSRoundLineJoinStyle](../nsroundlinejoinstyle.md): Deprecated. Specifies a round line shape of the joints between connected segments of a stroked path.
- [NSBevelLineJoinStyle](../nsbevellinejoinstyle.md): Deprecated. Specifies a bevel line shape of the joints between connected segments of a stroked path.

## See Also

### Constants

- [NSBezierPathElement](elementtype.md): Constants that specify basic path element commands.
- [NSLineCapStyle](linecapstyle-swift.enum.md): Constants that specify the shape of endpoints for an open path when it is stroked.
- [NSWindingRule](windingrule-swift.enum.md): Constants that specify the winding rule a Bézier path uses.
