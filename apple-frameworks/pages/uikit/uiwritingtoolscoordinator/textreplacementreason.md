> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/textreplacementreason](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/textreplacementreason)

# UIWritingToolsCoordinator.TextReplacementReason (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

Options that indicate whether Writing Tools is animating changes to your view’s text.

## Declaration

```swift
enum TextReplacementReason
```

<a id="overview"></a>

## Overview

During an operation, Writing Tools delivers replacement text to the delegate of the active [UIWritingToolsCoordinator](../uiwritingtoolscoordinator.md) object. Depending on the configured experience for your view, it delivers these changes as either interactive or noninteractive replacements. For interactive replacements, Writing Tools animates the change automatically and provides you with the information you need to perform any related animations.

## Topics

### Getting the reasons

- [UIWritingToolsCoordinator.TextReplacementReason.interactive](textreplacementreason/interactive.md): An option to animate the replacement of text in your view.
- [UIWritingToolsCoordinator.TextReplacementReason.noninteractive](textreplacementreason/noninteractive.md): An option to replace the text in your view without animating the change.

### Enumeration Cases

- [UIWritingToolsCoordinator.TextReplacementReason.accepted](textreplacementreason/accepted.md): An option to replace the text in your view when a grammar suggestion is accepted.
- [UIWritingToolsCoordinator.TextReplacementReason.rejected](textreplacementreason/rejected.md): An option to replace the text in your view when a grammar suggestion is rejected.
- [UIWritingToolsCoordinator.TextReplacementReason.temporary](textreplacementreason/temporary.md): An option to replace the text in your view when a grammar suggestion is temporarily shown to preview the proposed change in the text.

### Initializers

- [init(rawValue:)](textreplacementreason/init%28rawvalue_%29.md)

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
- [UIWritingToolsCoordinator.TextAnimation](textanimation.md): The types of animations that Writing Tools performs during an interactive update of your view.

# UIWritingToolsCoordinatorTextReplacementReason (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

Options that indicate whether Writing Tools is animating changes to your view’s text.

## Declaration

```objectivec
enum UIWritingToolsCoordinatorTextReplacementReason : NSInteger;
```

<a id="overview"></a>

## Overview

During an operation, Writing Tools delivers replacement text to the delegate of the active [UIWritingToolsCoordinator](../uiwritingtoolscoordinator.md) object. Depending on the configured experience for your view, it delivers these changes as either interactive or noninteractive replacements. For interactive replacements, Writing Tools animates the change automatically and provides you with the information you need to perform any related animations.

## Topics

### Getting the reasons

- [UIWritingToolsCoordinatorTextReplacementReasonInteractive](textreplacementreason/interactive.md): An option to animate the replacement of text in your view.
- [UIWritingToolsCoordinatorTextReplacementReasonNoninteractive](textreplacementreason/noninteractive.md): An option to replace the text in your view without animating the change.

### Enumeration Cases

- [UIWritingToolsCoordinatorTextReplacementReasonAccepted](textreplacementreason/accepted.md): An option to replace the text in your view when a grammar suggestion is accepted.
- [UIWritingToolsCoordinatorTextReplacementReasonRejected](textreplacementreason/rejected.md): An option to replace the text in your view when a grammar suggestion is rejected.
- [UIWritingToolsCoordinatorTextReplacementReasonTemporary](textreplacementreason/temporary.md): An option to replace the text in your view when a grammar suggestion is temporarily shown to preview the proposed change in the text.

## See Also

### Getting the supporting types

- [UIWritingToolsCoordinatorContextScope](contextscope.md): Options that indicate how much of your content Writing Tools requested.
- [UIWritingToolsCoordinatorTextAnimation](textanimation.md): The types of animations that Writing Tools performs during an interactive update of your view.
