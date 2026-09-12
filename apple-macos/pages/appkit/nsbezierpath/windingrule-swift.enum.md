> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/windingrule-swift.enum](https://developer.apple.com/documentation/appkit/nsbezierpath/windingrule-swift.enum)

# NSBezierPath.WindingRule (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the winding rule a Bézier path uses.

## Declaration

```swift
enum WindingRule
```

<a id="overview"></a>

## Overview

For more information, see [NSBezierPath](../nsbezierpath.md).

## Topics

### Constants

- [NSBezierPath.WindingRule.nonZero](windingrule-swift.enum/nonzero.md): Specifies the non-zero winding rule.
- [NSBezierPath.WindingRule.evenOdd](windingrule-swift.enum/evenodd.md): Specifies the even-odd winding rule.

### Initializers

- [init(rawValue:)](windingrule-swift.enum/init%28rawvalue_%29.md)

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
- [NSBezierPath.LineJoinStyle](linejoinstyle-swift.enum.md): Constants that specify the shape of the joins between connected segments of a stroked path.
- [NSBezierPath.LineCapStyle](linecapstyle-swift.enum.md): Constants that specify the shape of endpoints for an open path when it is stroked.

# NSWindingRule (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the winding rule a Bézier path uses.

## Declaration

```objectivec
enum NSWindingRule : NSUInteger;
```

<a id="overview"></a>

## Overview

For more information, see [NSBezierPath](../nsbezierpath.md).

## Topics

### Constants

- [NSWindingRuleNonZero](windingrule-swift.enum/nonzero.md): Specifies the non-zero winding rule.
- [NSWindingRuleEvenOdd](windingrule-swift.enum/evenodd.md): Specifies the even-odd winding rule.

### Deprecated Constants

- [NSNonZeroWindingRule](../nsnonzerowindingrule.md): Deprecated. Specifies the non-zero winding rule.
- [NSEvenOddWindingRule](../nsevenoddwindingrule.md): Deprecated. Specifies the even-odd winding rule.

## See Also

### Constants

- [NSBezierPathElement](elementtype.md): Constants that specify basic path element commands.
- [NSLineJoinStyle](linejoinstyle-swift.enum.md): Constants that specify the shape of the joins between connected segments of a stroked path.
- [NSLineCapStyle](linecapstyle-swift.enum.md): Constants that specify the shape of endpoints for an open path when it is stroked.
