> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctframepathfillrule](https://developer.apple.com/documentation/coretext/ctframepathfillrule)

# CTFramePathFillRule (Swift)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

These constants specify the fill rule used by a frame

## Declaration

```swift
enum CTFramePathFillRule
```

<a id="overview"></a>

## Overview

When a path intersects with itself, the client should specify which rule to use for deciding the area of the path.

## Topics

### Enumeration Cases

- [CTFramePathFillRule.evenOdd](ctframepathfillrule/evenodd.md): Paints the area using the even-odd fill rule.
- [CTFramePathFillRule.windingNumber](ctframepathfillrule/windingnumber.md): Paints the area using the nonzero winding number rule.

### Initializers

- [init(rawValue:)](ctframepathfillrule/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CTFramePathFillRule (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

These constants specify the fill rule used by a frame

## Declaration

```objectivec
enum CTFramePathFillRule : uint32_t;
```

<a id="overview"></a>

## Overview

When a path intersects with itself, the client should specify which rule to use for deciding the area of the path.

## Topics

### Enumeration Cases

- [kCTFramePathFillEvenOdd](ctframepathfillrule/evenodd.md): Paints the area using the even-odd fill rule.
- [kCTFramePathFillWindingNumber](ctframepathfillrule/windingnumber.md): Paints the area using the nonzero winding number rule.
