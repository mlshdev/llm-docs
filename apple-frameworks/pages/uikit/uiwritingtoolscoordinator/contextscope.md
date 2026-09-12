> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/contextscope](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/contextscope)

# UIWritingToolsCoordinator.ContextScope (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

Options that indicate how much of your content Writing Tools requested.

## Declaration

```swift
enum ContextScope
```

<a id="overview"></a>

## Overview

At the start of any Writing Tools interaction, you provide the text for the system to evaluate from your [UIWritingToolsCoordinator.Delegate](delegate-swift.protocol.md) object. The request for your content comes with a scope constant that indicates how much of your view’s text to provide.

## Topics

### Getting the scope

- [UIWritingToolsCoordinator.ContextScope.userSelection](contextscope/userselection.md): An option to provide only the view’s currently selected text.
- [UIWritingToolsCoordinator.ContextScope.fullDocument](contextscope/fulldocument.md): An option to provide all of your view’s text.
- [UIWritingToolsCoordinator.ContextScope.visibleArea](contextscope/visiblearea.md): An option to provide only the text in the currently visible portion of your view.

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

- [UIWritingToolsCoordinator.TextReplacementReason](textreplacementreason.md): Options that indicate whether Writing Tools is animating changes to your view’s text.
- [UIWritingToolsCoordinator.TextAnimation](textanimation.md): The types of animations that Writing Tools performs during an interactive update of your view.

# UIWritingToolsCoordinatorContextScope (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

Options that indicate how much of your content Writing Tools requested.

## Declaration

```objectivec
enum UIWritingToolsCoordinatorContextScope : NSInteger;
```

<a id="overview"></a>

## Overview

At the start of any Writing Tools interaction, you provide the text for the system to evaluate from your [UIWritingToolsCoordinatorDelegate](delegate-swift.protocol.md) object. The request for your content comes with a scope constant that indicates how much of your view’s text to provide.

## Topics

### Getting the scope

- [UIWritingToolsCoordinatorContextScopeUserSelection](contextscope/userselection.md): An option to provide only the view’s currently selected text.
- [UIWritingToolsCoordinatorContextScopeFullDocument](contextscope/fulldocument.md): An option to provide all of your view’s text.
- [UIWritingToolsCoordinatorContextScopeVisibleArea](contextscope/visiblearea.md): An option to provide only the text in the currently visible portion of your view.

## See Also

### Getting the supporting types

- [UIWritingToolsCoordinatorTextReplacementReason](textreplacementreason.md): Options that indicate whether Writing Tools is animating changes to your view’s text.
- [UIWritingToolsCoordinatorTextAnimation](textanimation.md): The types of animations that Writing Tools performs during an interactive update of your view.
