> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/contextscope](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/contextscope)

# NSWritingToolsCoordinator.ContextScope (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 15.2+

Options that indicate how much of your content Writing Tools requested.

## Declaration

```swift
enum ContextScope
```

<a id="overview"></a>

## Overview

At the start of any Writing Tools interaction, you provide the text for the system to evaluate from your [NSWritingToolsCoordinator.Delegate](delegate-swift.protocol.md) object. The request for your content comes with a scope constant that indicates how much of your view’s text to provide.

## Topics

### Getting the scope

- [NSWritingToolsCoordinator.ContextScope.userSelection](contextscope/userselection.md): An option to provide only the view’s currently selected text.
- [NSWritingToolsCoordinator.ContextScope.fullDocument](contextscope/fulldocument.md): An option to provide all of your view’s text.
- [NSWritingToolsCoordinator.ContextScope.visibleArea](contextscope/visiblearea.md): An option to provide only the text in the currently visible portion of your view.

### Initializers

- [init(rawValue:)](contextscope/init%28rawvalue_%29.md)

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

- [NSWritingToolsCoordinator.TextReplacementReason](textreplacementreason.md): Options that indicate whether Writing Tools is animating changes to your view’s text.
- [NSWritingToolsCoordinator.TextAnimation](textanimation.md): The types of animations that Writing Tools performs during an interactive update of your view.

# NSWritingToolsCoordinatorContextScope (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 15.2+

Options that indicate how much of your content Writing Tools requested.

## Declaration

```objectivec
enum NSWritingToolsCoordinatorContextScope : NSInteger;
```

<a id="overview"></a>

## Overview

At the start of any Writing Tools interaction, you provide the text for the system to evaluate from your [NSWritingToolsCoordinatorDelegate](delegate-swift.protocol.md) object. The request for your content comes with a scope constant that indicates how much of your view’s text to provide.

## Topics

### Getting the scope

- [NSWritingToolsCoordinatorContextScopeUserSelection](contextscope/userselection.md): An option to provide only the view’s currently selected text.
- [NSWritingToolsCoordinatorContextScopeFullDocument](contextscope/fulldocument.md): An option to provide all of your view’s text.
- [NSWritingToolsCoordinatorContextScopeVisibleArea](contextscope/visiblearea.md): An option to provide only the text in the currently visible portion of your view.

## See Also

### Getting the supporting types

- [NSWritingToolsCoordinatorTextReplacementReason](textreplacementreason.md): Options that indicate whether Writing Tools is animating changes to your view’s text.
- [NSWritingToolsCoordinatorTextAnimation](textanimation.md): The types of animations that Writing Tools performs during an interactive update of your view.
