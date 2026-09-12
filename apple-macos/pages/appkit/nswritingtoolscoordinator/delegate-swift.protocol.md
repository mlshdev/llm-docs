> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/delegate-swift.protocol](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/delegate-swift.protocol)

# NSWritingToolsCoordinator.Delegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 15.2+

An interface that you use to manage interactions between Writing Tools and your custom text view.

## Declaration

```swift
protocol Delegate : NSObjectProtocol
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="overview"></a>

## Overview

Adopt the `NSWritingToolsCoordinator.Delegate` protocol in the type you use to manage your custom text view. When you add a [NSWritingToolsCoordinator](../nswritingtoolscoordinator.md) object to your view, the coordinator uses this protocol to communicate with that view. The protocol lets Writing Tools fetch your view’s text, report suggested changes back to your view, and deliver visual feedback when Writing Tools features are active. Make sure the type that adopts this protocol has access to your view’s text storage and can perform relevant tasks on behalf of the view.

Writing Tools expects you to call the provided handler blocks at the end of your delegate methods. It’s crucial that you execute these blocks in a timely manner to allow Writing Tools to perform subsequent tasks. For example, Writing Tools waits for you to execute the handlers for animation-related methods before moving on to the next stage of the animations.

## Topics

### Starting a Writing Tools operation

- [writingToolsCoordinator(\_:requestsContextsFor:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestscontextsfor_completion_%29.md): Asks your delegate to provide the text to evaluate during the Writing Tools operation.

### Incorporating Writing Tools suggestions

- [writingToolsCoordinator(\_:replace:in:proposedText:reason:animationParameters:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__replace_in_proposedtext_reason_animationparameters_completion_%29.md): Tells the delegate that there are text changes to incorporate into the view.
- [writingToolsCoordinator(\_:select:in:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__select_in_completion_%29.md): Asks the delegate to update your view’s current text selection.

### Responding to lifecycle changes

- [writingToolsCoordinator(\_:willChangeTo:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__willchangeto_completion_%29.md): Notifies your delegate of relevant state changes when Writing Tools is running in your view.

### Animating inline text changes

- [writingToolsCoordinator(\_:requestsPreviewFor:of:in:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestspreviewfor_of_in_completion_%29.md): Asks the delegate for a preview image and layout information for the specified text.
- [writingToolsCoordinator(\_:requestsPreviewFor:in:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestspreviewfor_in_completion_%29.md): Asks the delegate for a preview image and layout information for the specified text.
- [writingToolsCoordinator(\_:prepareFor:for:in:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__preparefor_for_in_completion_%29.md): Prepare for animations for the content that Writing Tools is evaluating.
- [writingToolsCoordinator(\_:finish:for:in:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__finish_for_in_completion_%29.md): Asks the delegate to clean up any state related to the specified Writing Tools animation.

### Displaying proofreading marks

- [writingToolsCoordinator(\_:requestsRangeInContextWithIdentifierFor:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestsrangeincontextwithidentifierfor_completion_%29.md): Deprecated. Asks the delegate to provide the location of the character at the specified point in your view’s coordinate system.
- [writingToolsCoordinator(\_:requestsBoundingBezierPathsFor:in:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestsboundingbezierpathsfor_in_completion_%29.md): Asks the delegate to provide the bounding paths for the specified text in your view.
- [writingToolsCoordinator(\_:requestsUnderlinePathsFor:in:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestsunderlinepathsfor_in_completion_%29.md): Asks the delegate to provide an underline shape for the specified text during a proofreading session.

### Providing animation container views dynamically

- [writingToolsCoordinator(\_:requestsSingleContainerSubrangesOf:in:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestssinglecontainersubrangesof_in_completion_%29.md): Asks the delegate to divide the specified range of text into the separate containers that render that text.
- [writingToolsCoordinator(\_:requestsDecorationContainerViewFor:in:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestsdecorationcontainerviewfor_in_completion_%29.md): Asks the delegate to provide a decoration view for the specified range of text.

### Instance Methods

- [writingToolsCoordinator(\_:requestsGrammarResultsFor:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestsgrammarresultsfor_completion_%29.md): Asks the delegate for information about grammar issues in the specified context.
- [writingToolsCoordinator(\_:requestsPreviewFor:of:in:textDecoration:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestspreviewfor_of_in_textdecoration_completion_%29.md): Asks the delegate for preview images for the specified text.
- [writingToolsCoordinator(\_:setGrammarCheckingEnabled:)](delegate-swift.protocol/writingtoolscoordinator%28__setgrammarcheckingenabled_%29.md): Notifies the delegate when the user chooses to disable grammar checking.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Writing Tools for custom views

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md): Adopt a simplified version of the Writing Tools experience in a custom view using the pasteboard and macOS services.
- [Adding Writing Tools support to a custom AppKit view](../adding-writing-tools-support-to-a-custom-nsview.md): Integrate Writing Tools support, including support for inline replacement animations, to your custom text views on macOS.
- [NSWritingToolsCoordinator](../nswritingtoolscoordinator.md): An object that manages interactions between Writing Tools and your custom text view.
- [NSWritingToolsCoordinator.Context](context.md): A data object that you use to share your custom view’s text with Writing Tools.
- [NSWritingToolsCoordinator.AnimationParameters](animationparameters.md): An object you use to configure additional tasks or animations to run alongside the Writing Tools animations.
- [Enhancing your custom text engine with Writing Tools](../enhancing-your-custom-text-engine-with-writing-tools.md): Add Writing Tools support to your custom text engine to enhance the text editing experience.

# NSWritingToolsCoordinatorDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 15.2+

An interface that you use to manage interactions between Writing Tools and your custom text view.

## Declaration

```objectivec
@protocol NSWritingToolsCoordinatorDelegate <NSObject>
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="overview"></a>

## Overview

Adopt the `NSWritingToolsCoordinator.Delegate` protocol in the type you use to manage your custom text view. When you add a [NSWritingToolsCoordinator](../nswritingtoolscoordinator.md) object to your view, the coordinator uses this protocol to communicate with that view. The protocol lets Writing Tools fetch your view’s text, report suggested changes back to your view, and deliver visual feedback when Writing Tools features are active. Make sure the type that adopts this protocol has access to your view’s text storage and can perform relevant tasks on behalf of the view.

Writing Tools expects you to call the provided handler blocks at the end of your delegate methods. It’s crucial that you execute these blocks in a timely manner to allow Writing Tools to perform subsequent tasks. For example, Writing Tools waits for you to execute the handlers for animation-related methods before moving on to the next stage of the animations.

## Topics

### Starting a Writing Tools operation

- [writingToolsCoordinator:requestsContextsForScope:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestscontextsfor_completion_%29.md): Asks your delegate to provide the text to evaluate during the Writing Tools operation.

### Incorporating Writing Tools suggestions

- [writingToolsCoordinator:replaceRange:inContext:proposedText:reason:animationParameters:completion:](delegate-swift.protocol/writingtoolscoordinator%28__replace_in_proposedtext_reason_animationparameters_completion_%29.md): Tells the delegate that there are text changes to incorporate into the view.
- [writingToolsCoordinator:selectRanges:inContext:completion:](delegate-swift.protocol/writingtoolscoordinator%28__select_in_completion_%29.md): Asks the delegate to update your view’s current text selection.

### Responding to lifecycle changes

- [writingToolsCoordinator:willChangeToState:completion:](delegate-swift.protocol/writingtoolscoordinator%28__willchangeto_completion_%29.md): Notifies your delegate of relevant state changes when Writing Tools is running in your view.

### Animating inline text changes

- [writingToolsCoordinator:requestsPreviewForTextAnimation:ofRange:inContext:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestspreviewfor_of_in_completion_%29.md): Asks the delegate for a preview image and layout information for the specified text.
- [writingToolsCoordinator:requestsPreviewForRect:inContext:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestspreviewfor_in_completion_%29.md): Asks the delegate for a preview image and layout information for the specified text.
- [writingToolsCoordinator:prepareForTextAnimation:forRange:inContext:completion:](delegate-swift.protocol/writingtoolscoordinator%28__preparefor_for_in_completion_%29.md): Prepare for animations for the content that Writing Tools is evaluating.
- [writingToolsCoordinator:finishTextAnimation:forRange:inContext:completion:](delegate-swift.protocol/writingtoolscoordinator%28__finish_for_in_completion_%29.md): Asks the delegate to clean up any state related to the specified Writing Tools animation.

### Displaying proofreading marks

- [writingToolsCoordinator:requestsRangeInContextWithIdentifierForPoint:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestsrangeincontextwithidentifierfor_completion_%29.md): Deprecated. Asks the delegate to provide the location of the character at the specified point in your view’s coordinate system.
- [writingToolsCoordinator:requestsBoundingBezierPathsForRange:inContext:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestsboundingbezierpathsfor_in_completion_%29.md): Asks the delegate to provide the bounding paths for the specified text in your view.
- [writingToolsCoordinator:requestsUnderlinePathsForRange:inContext:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestsunderlinepathsfor_in_completion_%29.md): Asks the delegate to provide an underline shape for the specified text during a proofreading session.

### Providing animation container views dynamically

- [writingToolsCoordinator:requestsSingleContainerSubrangesOfRange:inContext:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestssinglecontainersubrangesof_in_completion_%29.md): Asks the delegate to divide the specified range of text into the separate containers that render that text.
- [writingToolsCoordinator:requestsDecorationContainerViewForRange:inContext:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestsdecorationcontainerviewfor_in_completion_%29.md): Asks the delegate to provide a decoration view for the specified range of text.

### Instance Methods

- [writingToolsCoordinator:requestsGrammarResultsForContext:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestsgrammarresultsfor_completion_%29.md): Asks the delegate for information about grammar issues in the specified context.
- [writingToolsCoordinator:requestsPreviewForTextAnimation:ofRange:inContext:textDecoration:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestspreviewfor_of_in_textdecoration_completion_%29.md): Asks the delegate for preview images for the specified text.
- [writingToolsCoordinator:setGrammarCheckingEnabled:](delegate-swift.protocol/writingtoolscoordinator%28__setgrammarcheckingenabled_%29.md): Notifies the delegate when the user chooses to disable grammar checking.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Writing Tools for custom views

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md): Adopt a simplified version of the Writing Tools experience in a custom view using the pasteboard and macOS services.
- [Adding Writing Tools support to a custom AppKit view](../adding-writing-tools-support-to-a-custom-nsview.md): Integrate Writing Tools support, including support for inline replacement animations, to your custom text views on macOS.
- [NSWritingToolsCoordinator](../nswritingtoolscoordinator.md): An object that manages interactions between Writing Tools and your custom text view.
- [NSWritingToolsCoordinatorContext](context.md): A data object that you use to share your custom view’s text with Writing Tools.
- [NSWritingToolsCoordinatorAnimationParameters](animationparameters.md): An object you use to configure additional tasks or animations to run alongside the Writing Tools animations.
- [Enhancing your custom text engine with Writing Tools](../enhancing-your-custom-text-engine-with-writing-tools.md): Add Writing Tools support to your custom text engine to enhance the text editing experience.
