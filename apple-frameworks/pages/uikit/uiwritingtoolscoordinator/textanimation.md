> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/textanimation](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/textanimation)

# UIWritingToolsCoordinator.TextAnimation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The types of animations that Writing Tools performs during an interactive update of your view.

## Declaration

```swift
enum TextAnimation
```

<a id="overview"></a>

## Overview

Use the `UIWritingToolsCoordinator/TextAnimation` constants to determine the type of animation that is occurring. During an interactive change to your view, Writing Tools creates animations to provide feedback about what’s happening. During the setup for each animation, Writing Tools reports the type of animation to the coordinator’s delegate, so that you can perform additional actions related to that animation. For example, during an insertion animation, you might animate changes to other views in your interface.

## Topics

### Getting the animation types

- [UIWritingToolsCoordinator.TextAnimation.anticipate](textanimation/anticipate.md): The animation that Writing Tools performs when waiting to receive results from the large language model.
- [UIWritingToolsCoordinator.TextAnimation.insert](textanimation/insert.md): The animation that Writing Tools performs when inserting text into your view.
- [UIWritingToolsCoordinator.TextAnimation.remove](textanimation/remove.md): The animation that Writing Tools performs when removing text from your view.

### Enumeration Cases

- [UIWritingToolsCoordinator.TextAnimation.indicateGrammar](textanimation/indicategrammar.md): The animation effect that Writing Tools performs on grammar issues when they are first indicated.

### Initializers

- [init(rawValue:)](textanimation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the supporting types

- [UIWritingToolsCoordinator.ContextScope](contextscope.md): Options that indicate how much of your content Writing Tools requested.
- [UIWritingToolsCoordinator.TextReplacementReason](textreplacementreason.md): Options that indicate whether Writing Tools is animating changes to your view’s text.

# UIWritingToolsCoordinatorTextAnimation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The types of animations that Writing Tools performs during an interactive update of your view.

## Declaration

```objectivec
enum UIWritingToolsCoordinatorTextAnimation : NSInteger;
```

<a id="overview"></a>

## Overview

Use the `UIWritingToolsCoordinator/TextAnimation` constants to determine the type of animation that is occurring. During an interactive change to your view, Writing Tools creates animations to provide feedback about what’s happening. During the setup for each animation, Writing Tools reports the type of animation to the coordinator’s delegate, so that you can perform additional actions related to that animation. For example, during an insertion animation, you might animate changes to other views in your interface.

## Topics

### Getting the animation types

- [UIWritingToolsCoordinatorTextAnimationAnticipate](textanimation/anticipate.md): The animation that Writing Tools performs when waiting to receive results from the large language model.
- [UIWritingToolsCoordinatorTextAnimationInsert](textanimation/insert.md): The animation that Writing Tools performs when inserting text into your view.
- [UIWritingToolsCoordinatorTextAnimationRemove](textanimation/remove.md): The animation that Writing Tools performs when removing text from your view.

### Enumeration Cases

- [UIWritingToolsCoordinatorTextAnimationIndicateGrammar](textanimation/indicategrammar.md): The animation effect that Writing Tools performs on grammar issues when they are first indicated.

## See Also

### Getting the supporting types

- [UIWritingToolsCoordinatorContextScope](contextscope.md): Options that indicate how much of your content Writing Tools requested.
- [UIWritingToolsCoordinatorTextReplacementReason](textreplacementreason.md): Options that indicate whether Writing Tools is animating changes to your view’s text.
