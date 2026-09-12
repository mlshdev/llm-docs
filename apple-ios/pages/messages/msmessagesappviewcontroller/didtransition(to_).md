> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesappviewcontroller/didtransition(to:)](https://developer.apple.com/documentation/messages/msmessagesappviewcontroller/didtransition(to:))

# didTransition(to:) (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Tells the view controller that the extension has transitioned to a new presentation style.

## Declaration

```swift
func didTransition(to presentationStyle: MSMessagesAppPresentationStyle)
```

## Parameters

- `presentationStyle`: The new presentation style. For a list of possible styles, see [MSMessagesAppPresentationStyle](../msmessagesapppresentationstyle.md).

<a id="Discussion"></a>

## Discussion

Override this method to respond after the extension’s user interface has transitioned to a new presentation style. The user can switch between styles by tapping the collapse and expand buttons in the Messages app. You can also programmatically trigger a transition by calling [requestPresentationStyle(\_:)](requestpresentationstyle%28__%29.md).

The system doesn’t call this method on a view controller that is presenting a live view in the transcript or input field—in other words, when the view controller’s [presentationStyle](presentationstyle.md) property is set to the [MSMessagesAppPresentationStyle.transcript](../msmessagesapppresentationstyle/transcript.md) value.

## See Also

### Working with Presentation Styles and Contexts

- [presentationStyle](presentationstyle.md): The extension’s current presentation style.
- [requestPresentationStyle(\_:)](requestpresentationstyle%28__%29.md): Asks the extension’s user interface to transition to the provided style.
- [willTransition(to:)](willtransition%28to_%29.md): Tells the view controller that the extension is about to transition to a new presentation style.
- [MSMessagesAppPresentationStyle](../msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.
- [presentationContext](presentationcontext.md): The context describing where your iMessage app is presented.
- [MSMessagesAppPresentationContext](../msmessagesapppresentationcontext.md): Presentation contexts describing where your iMessage app appears.

# didTransitionToPresentationStyle: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Tells the view controller that the extension has transitioned to a new presentation style.

## Declaration

```objectivec
- (void) didTransitionToPresentationStyle:(MSMessagesAppPresentationStyle) presentationStyle;
```

## Parameters

- `presentationStyle`: The new presentation style. For a list of possible styles, see [MSMessagesAppPresentationStyle](../msmessagesapppresentationstyle.md).

<a id="Discussion"></a>

## Discussion

Override this method to respond after the extension’s user interface has transitioned to a new presentation style. The user can switch between styles by tapping the collapse and expand buttons in the Messages app. You can also programmatically trigger a transition by calling [requestPresentationStyle:](requestpresentationstyle%28__%29.md).

The system doesn’t call this method on a view controller that is presenting a live view in the transcript or input field—in other words, when the view controller’s [presentationStyle](presentationstyle.md) property is set to the [MSMessagesAppPresentationStyleTranscript](../msmessagesapppresentationstyle/transcript.md) value.

## See Also

### Working with Presentation Styles and Contexts

- [presentationStyle](presentationstyle.md): The extension’s current presentation style.
- [requestPresentationStyle:](requestpresentationstyle%28__%29.md): Asks the extension’s user interface to transition to the provided style.
- [willTransitionToPresentationStyle:](willtransition%28to_%29.md): Tells the view controller that the extension is about to transition to a new presentation style.
- [MSMessagesAppPresentationStyle](../msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.
- [presentationContext](presentationcontext.md): The context describing where your iMessage app is presented.
- [MSMessagesAppPresentationContext](../msmessagesapppresentationcontext.md): Presentation contexts describing where your iMessage app appears.
