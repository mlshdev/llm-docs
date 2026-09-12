> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimpactfeedbackgenerator/feedbackstyle](https://developer.apple.com/documentation/uikit/uiimpactfeedbackgenerator/feedbackstyle)

# UIImpactFeedbackGenerator.FeedbackStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The mass of the objects in the collision simulated by an impact feedback generator object.

## Declaration

```swift
enum FeedbackStyle
```

## Topics

### Constants

- [UIImpactFeedbackGenerator.FeedbackStyle.heavy](feedbackstyle/heavy.md): A collision between large, heavy user interface elements.
- [UIImpactFeedbackGenerator.FeedbackStyle.light](feedbackstyle/light.md): A collision between small, light user interface elements.
- [UIImpactFeedbackGenerator.FeedbackStyle.medium](feedbackstyle/medium.md): A collision between moderately sized user interface elements.
- [UIImpactFeedbackGenerator.FeedbackStyle.rigid](feedbackstyle/rigid.md): A collision between user interface elements that are rigid, exhibiting a small amount of compression or elasticity.
- [UIImpactFeedbackGenerator.FeedbackStyle.soft](feedbackstyle/soft.md): A collision between user interface elements that are soft, exhibiting a large amount of compression or elasticity.

### Initializers

- [init(rawValue:)](feedbackstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Initializing the feedback generator

- [init(style:view:)](init%28style_view_%29.md): Creates an impact feedback generator with the specified style and view.

# UIImpactFeedbackStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The mass of the objects in the collision simulated by an impact feedback generator object.

## Declaration

```objectivec
enum UIImpactFeedbackStyle : NSInteger;
```

## Topics

### Constants

- [UIImpactFeedbackStyleHeavy](feedbackstyle/heavy.md): A collision between large, heavy user interface elements.
- [UIImpactFeedbackStyleLight](feedbackstyle/light.md): A collision between small, light user interface elements.
- [UIImpactFeedbackStyleMedium](feedbackstyle/medium.md): A collision between moderately sized user interface elements.
- [UIImpactFeedbackStyleRigid](feedbackstyle/rigid.md): A collision between user interface elements that are rigid, exhibiting a small amount of compression or elasticity.
- [UIImpactFeedbackStyleSoft](feedbackstyle/soft.md): A collision between user interface elements that are soft, exhibiting a large amount of compression or elasticity.

## See Also

### Initializing the feedback generator

- [feedbackGeneratorWithStyle:forView:](init%28style_view_%29.md): Creates an impact feedback generator with the specified style and view.
