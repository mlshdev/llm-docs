> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/textreplacementreason](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/textreplacementreason)

# NSWritingToolsCoordinator.TextReplacementReason (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 15.2+

Options that indicate whether Writing Tools is animating changes to your view’s text.

## Declaration

```swift
enum TextReplacementReason
```

<a id="overview"></a>

## Overview

During an operation, Writing Tools delivers replacement text to the delegate of the active [NSWritingToolsCoordinator](../nswritingtoolscoordinator.md) object. Depending on the configured experience for your view, it delivers these changes as either interactive or noninteractive replacements. For interactive replacements, Writing Tools animates the change automatically and provides you with the information you need to perform any related animations.

## Topics

### Getting the reasons

- [NSWritingToolsCoordinator.TextReplacementReason.interactive](textreplacementreason/interactive.md): An option to animate the replacement of text in your view.
- [NSWritingToolsCoordinator.TextReplacementReason.noninteractive](textreplacementreason/noninteractive.md): An option to replace the text in your view without animating the change.

### Enumeration Cases

- [NSWritingToolsCoordinator.TextReplacementReason.accepted](textreplacementreason/accepted.md): An option to replace the text in your view when a grammar suggestion is accepted.
- [NSWritingToolsCoordinator.TextReplacementReason.rejected](textreplacementreason/rejected.md): An option to replace the text in your view when a grammar suggestion is rejected.
- [NSWritingToolsCoordinator.TextReplacementReason.temporary](textreplacementreason/temporary.md): An option to replace the text in your view when a grammar suggestion is temporarily shown to preview the proposed change in the text.

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

- [NSWritingToolsCoordinator.ContextScope](contextscope.md): Options that indicate how much of your content Writing Tools requested.
- [NSWritingToolsCoordinator.TextAnimation](textanimation.md): The types of animations that Writing Tools performs during an interactive update of your view.

# NSWritingToolsCoordinatorTextReplacementReason (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 15.2+

Options that indicate whether Writing Tools is animating changes to your view’s text.

## Declaration

```objectivec
enum NSWritingToolsCoordinatorTextReplacementReason : NSInteger;
```

<a id="overview"></a>

## Overview

During an operation, Writing Tools delivers replacement text to the delegate of the active [NSWritingToolsCoordinator](../nswritingtoolscoordinator.md) object. Depending on the configured experience for your view, it delivers these changes as either interactive or noninteractive replacements. For interactive replacements, Writing Tools animates the change automatically and provides you with the information you need to perform any related animations.

## Topics

### Getting the reasons

- [NSWritingToolsCoordinatorTextReplacementReasonInteractive](textreplacementreason/interactive.md): An option to animate the replacement of text in your view.
- [NSWritingToolsCoordinatorTextReplacementReasonNoninteractive](textreplacementreason/noninteractive.md): An option to replace the text in your view without animating the change.

### Enumeration Cases

- [NSWritingToolsCoordinatorTextReplacementReasonAccepted](textreplacementreason/accepted.md): An option to replace the text in your view when a grammar suggestion is accepted.
- [NSWritingToolsCoordinatorTextReplacementReasonRejected](textreplacementreason/rejected.md): An option to replace the text in your view when a grammar suggestion is rejected.
- [NSWritingToolsCoordinatorTextReplacementReasonTemporary](textreplacementreason/temporary.md): An option to replace the text in your view when a grammar suggestion is temporarily shown to preview the proposed change in the text.

## See Also

### Getting the supporting types

- [NSWritingToolsCoordinatorContextScope](contextscope.md): Options that indicate how much of your content Writing Tools requested.
- [NSWritingToolsCoordinatorTextAnimation](textanimation.md): The types of animations that Writing Tools performs during an interactive update of your view.
