> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/state-swift.enum](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/state-swift.enum)

# UIWritingToolsCoordinator.State (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The states that indicate the current activity, if any, Writing Tools is performing in your view.

## Declaration

```swift
enum State
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="overview"></a>

## Overview

Making changes to your view requires several different levels of interaction. Initially, Writing Tools displays its UI and collects information about what the person wants to do. When the person selects an operation, Writing Tools sends the relevant details to a large language model (LLM) and processes the results. It then works with the custom view to integrate any changes into the view’s text storage. During each of these activities, the coordinator reflects what’s happening in its [state](state-swift.property.md) property. You can use the current state as a guide to making decisions in other parts of your view.

## Topics

### Getting the animation types

- [UIWritingToolsCoordinator.State.inactive](state-swift.enum/inactive.md): A state that indicates Writing Tools isn’t currently performing any work on your view’s content.
- [UIWritingToolsCoordinator.State.noninteractive](state-swift.enum/noninteractive.md): A state that indicates Writing Tools is handling interactions in the system UI, instead of in your view.
- [UIWritingToolsCoordinator.State.interactiveResting](state-swift.enum/interactiveresting.md): A state that indicates Writing Tools is in the resting state for an inline editing experience.
- [UIWritingToolsCoordinator.State.interactiveStreaming](state-swift.enum/interactivestreaming.md): A state that indicates Writing Tools is processing a request and incorporating changes interactively into your view.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the current state

- [stopWritingTools()](stopwritingtools%28%29.md): Stops the current Writing Tools operation and dismisses the system UI.
- [state](state-swift.property.md): The current level of Writing Tools activity in your view.

# UIWritingToolsCoordinatorState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The states that indicate the current activity, if any, Writing Tools is performing in your view.

## Declaration

```objectivec
enum UIWritingToolsCoordinatorState : NSInteger;
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="overview"></a>

## Overview

Making changes to your view requires several different levels of interaction. Initially, Writing Tools displays its UI and collects information about what the person wants to do. When the person selects an operation, Writing Tools sends the relevant details to a large language model (LLM) and processes the results. It then works with the custom view to integrate any changes into the view’s text storage. During each of these activities, the coordinator reflects what’s happening in its [state](state-swift.property.md) property. You can use the current state as a guide to making decisions in other parts of your view.

## Topics

### Getting the animation types

- [UIWritingToolsCoordinatorStateInactive](state-swift.enum/inactive.md): A state that indicates Writing Tools isn’t currently performing any work on your view’s content.
- [UIWritingToolsCoordinatorStateNoninteractive](state-swift.enum/noninteractive.md): A state that indicates Writing Tools is handling interactions in the system UI, instead of in your view.
- [UIWritingToolsCoordinatorStateInteractiveResting](state-swift.enum/interactiveresting.md): A state that indicates Writing Tools is in the resting state for an inline editing experience.
- [UIWritingToolsCoordinatorStateInteractiveStreaming](state-swift.enum/interactivestreaming.md): A state that indicates Writing Tools is processing a request and incorporating changes interactively into your view.

## See Also

### Managing the current state

- [stopWritingTools](stopwritingtools%28%29.md): Stops the current Writing Tools operation and dismisses the system UI.
- [state](state-swift.property.md): The current level of Writing Tools activity in your view.
