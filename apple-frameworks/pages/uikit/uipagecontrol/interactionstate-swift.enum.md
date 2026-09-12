> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrol/interactionstate-swift.enum](https://developer.apple.com/documentation/uikit/uipagecontrol/interactionstate-swift.enum)

# UIPageControl.InteractionState (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Constants that define the interaction states of the page control.

## Declaration

```swift
enum InteractionState
```

## Topics

### Constants

- [UIPageControl.InteractionState.none](interactionstate-swift.enum/none.md): The default interaction state, where no interaction has occurred.
- [UIPageControl.InteractionState.discrete](interactionstate-swift.enum/discrete.md): The interaction state for which the page changes through a single, discrete interaction.
- [UIPageControl.InteractionState.continuous](interactionstate-swift.enum/continuous.md): The interaction state for which the page changes through a continuous interaction.

### Initializers

- [init(rawValue:)](interactionstate-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing the interaction state

- [allowsContinuousInteraction](allowscontinuousinteraction.md): A Boolean value that determines whether the page control allows continuous interaction.
- [interactionState](interactionstate-swift.property.md): The interaction state when the current page changes.

# UIPageControlInteractionState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Constants that define the interaction states of the page control.

## Declaration

```objectivec
enum UIPageControlInteractionState : NSInteger;
```

## Topics

### Constants

- [UIPageControlInteractionStateNone](interactionstate-swift.enum/none.md): The default interaction state, where no interaction has occurred.
- [UIPageControlInteractionStateDiscrete](interactionstate-swift.enum/discrete.md): The interaction state for which the page changes through a single, discrete interaction.
- [UIPageControlInteractionStateContinuous](interactionstate-swift.enum/continuous.md): The interaction state for which the page changes through a continuous interaction.

## See Also

### Customizing the interaction state

- [allowsContinuousInteraction](allowscontinuousinteraction.md): A Boolean value that determines whether the page control allows continuous interaction.
- [interactionState](interactionstate-swift.property.md): The interaction state when the current page changes.
