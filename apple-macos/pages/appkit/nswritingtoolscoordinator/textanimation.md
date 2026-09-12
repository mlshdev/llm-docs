> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/textanimation](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/textanimation)

# NSWritingToolsCoordinator.TextAnimation (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 15.2+

The types of animations that Writing Tools performs during an interactive update of your view.

## Declaration

```swift
enum TextAnimation
```

<a id="overview"></a>

## Overview

Use the `NSWritingToolsCoordinatorTextAnimation` constants to determine the type of animation that is occurring. During an interactive change to your view, Writing Tools creates animations to provide feedback about what’s happening. During the setup for each animation, Writing Tools reports the type of animation to the coordinator’s delegate, so you can perform additional actions related to that animation. For example, during an insertion animation, you might animate changes to other views in your interface.

## Topics

### Getting the animation types

- [NSWritingToolsCoordinator.TextAnimation.anticipate](textanimation/anticipate.md): The animation that Writing Tools performs when waiting to receive results from the large language model.
- [NSWritingToolsCoordinator.TextAnimation.insert](textanimation/insert.md): The animation that Writing Tools performs when inserting text into your view.
- [NSWritingToolsCoordinator.TextAnimation.remove](textanimation/remove.md): The animation that Writing Tools performs when removing text from your view.
- [NSWritingToolsCoordinator.TextAnimation.anticipateInactive](textanimation/anticipateinactive.md): The animation effect that Writing Tools performs when the view is waiting for results, but the system isn’t actively evaluating the text.
- [NSWritingToolsCoordinator.TextAnimation.translate](textanimation/translate.md): The animation effect that Writing Tools performs on text situated after the insertion point.

### Enumeration Cases

- [NSWritingToolsCoordinator.TextAnimation.indicateGrammar](textanimation/indicategrammar.md): The animation effect that Writing Tools performs on grammar issues when they are first indicated.

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

- [NSWritingToolsCoordinator.ContextScope](contextscope.md): Options that indicate how much of your content Writing Tools requested.
- [NSWritingToolsCoordinator.TextReplacementReason](textreplacementreason.md): Options that indicate whether Writing Tools is animating changes to your view’s text.

# NSWritingToolsCoordinatorTextAnimation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 15.2+

The types of animations that Writing Tools performs during an interactive update of your view.

## Declaration

```objectivec
enum NSWritingToolsCoordinatorTextAnimation : NSInteger;
```

<a id="overview"></a>

## Overview

Use the `NSWritingToolsCoordinatorTextAnimation` constants to determine the type of animation that is occurring. During an interactive change to your view, Writing Tools creates animations to provide feedback about what’s happening. During the setup for each animation, Writing Tools reports the type of animation to the coordinator’s delegate, so you can perform additional actions related to that animation. For example, during an insertion animation, you might animate changes to other views in your interface.

## Topics

### Getting the animation types

- [NSWritingToolsCoordinatorTextAnimationAnticipate](textanimation/anticipate.md): The animation that Writing Tools performs when waiting to receive results from the large language model.
- [NSWritingToolsCoordinatorTextAnimationInsert](textanimation/insert.md): The animation that Writing Tools performs when inserting text into your view.
- [NSWritingToolsCoordinatorTextAnimationRemove](textanimation/remove.md): The animation that Writing Tools performs when removing text from your view.
- [NSWritingToolsCoordinatorTextAnimationAnticipateInactive](textanimation/anticipateinactive.md): The animation effect that Writing Tools performs when the view is waiting for results, but the system isn’t actively evaluating the text.
- [NSWritingToolsCoordinatorTextAnimationTranslate](textanimation/translate.md): The animation effect that Writing Tools performs on text situated after the insertion point.

### Enumeration Cases

- [NSWritingToolsCoordinatorTextAnimationIndicateGrammar](textanimation/indicategrammar.md): The animation effect that Writing Tools performs on grammar issues when they are first indicated.

## See Also

### Getting the supporting types

- [NSWritingToolsCoordinatorContextScope](contextscope.md): Options that indicate how much of your content Writing Tools requested.
- [NSWritingToolsCoordinatorTextReplacementReason](textreplacementreason.md): Options that indicate whether Writing Tools is animating changes to your view’s text.
