> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscribbleinteractiondelegate](https://developer.apple.com/documentation/uikit/uiscribbleinteractiondelegate)

# UIScribbleInteractionDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Methods for customizing or suppressing Scribble behavior within text input views.

## Declaration

```swift
@MainActor protocol UIScribbleInteractionDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

By default, Scribble let users enter text by writing directly into any editable view that implement [UITextInput](uitextinput.md). In apps with customized text fields, you can use the [UIScribbleInteractionDelegate](uiscribbleinteractiondelegate.md) callbacks to optimize the UI for a better writing experience, including:

- Opting individual text fields in or out of Scribble interactions.
- Controlling how quickly a given text field responds to input, giving the view an opportunity to change its configuration, if necessary.
- Receiving notifications when the user writing begins and ends.

## Topics

### Allowing and controlling Scribble interactions

- [scribbleInteraction(\_:shouldBeginAt:)](uiscribbleinteractiondelegate/scribbleinteraction%28__shouldbeginat_%29.md): Returns a Boolean value that indicates whether the delegate should allow writing at a specific location in the view.
- [scribbleInteractionShouldDelayFocus(\_:)](uiscribbleinteractiondelegate/scribbleinteractionshoulddelayfocus%28__%29.md): Tells the delegate to delay focusing the text input view.

### Tracking Scribble input

- [scribbleInteractionWillBeginWriting(\_:)](uiscribbleinteractiondelegate/scribbleinteractionwillbeginwriting%28__%29.md): Informs the delegate when the user begins writing in the view.
- [scribbleInteractionDidFinishWriting(\_:)](uiscribbleinteractiondelegate/scribbleinteractiondidfinishwriting%28__%29.md): Informs the delegate that the user stops writing in the view, after Scribble transcribes and enters the last word.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Text fields

- [UIScribbleInteraction](uiscribbleinteraction.md): An interaction for customizing the behavior of Scribble on text input views, or for suppressing it entirely in specific cases.

# UIScribbleInteractionDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Methods for customizing or suppressing Scribble behavior within text input views.

## Declaration

```objectivec
@protocol UIScribbleInteractionDelegate <NSObject>
```

<a id="overview"></a>

## Overview

By default, Scribble let users enter text by writing directly into any editable view that implement [UITextInput](uitextinput.md). In apps with customized text fields, you can use the [UIScribbleInteractionDelegate](uiscribbleinteractiondelegate.md) callbacks to optimize the UI for a better writing experience, including:

- Opting individual text fields in or out of Scribble interactions.
- Controlling how quickly a given text field responds to input, giving the view an opportunity to change its configuration, if necessary.
- Receiving notifications when the user writing begins and ends.

## Topics

### Allowing and controlling Scribble interactions

- [scribbleInteraction:shouldBeginAtLocation:](uiscribbleinteractiondelegate/scribbleinteraction%28__shouldbeginat_%29.md): Returns a Boolean value that indicates whether the delegate should allow writing at a specific location in the view.
- [scribbleInteractionShouldDelayFocus:](uiscribbleinteractiondelegate/scribbleinteractionshoulddelayfocus%28__%29.md): Tells the delegate to delay focusing the text input view.

### Tracking Scribble input

- [scribbleInteractionWillBeginWriting:](uiscribbleinteractiondelegate/scribbleinteractionwillbeginwriting%28__%29.md): Informs the delegate when the user begins writing in the view.
- [scribbleInteractionDidFinishWriting:](uiscribbleinteractiondelegate/scribbleinteractiondidfinishwriting%28__%29.md): Informs the delegate that the user stops writing in the view, after Scribble transcribes and enters the last word.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Text fields

- [UIScribbleInteraction](uiscribbleinteraction.md): An interaction for customizing the behavior of Scribble on text input views, or for suppressing it entirely in specific cases.
