> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesappviewcontroller/requestpresentationstyle(_:)](https://developer.apple.com/documentation/messages/msmessagesappviewcontroller/requestpresentationstyle(_:))

# requestPresentationStyle(\_:) (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Asks the extension’s user interface to transition to the provided style.

## Declaration

```swift
func requestPresentationStyle(_ presentationStyle: MSMessagesAppPresentationStyle)
```

## Parameters

- `presentationStyle`: The desired presentation style. For a list of possible styles, see [MSMessagesAppPresentationStyle](../msmessagesapppresentationstyle.md).

<a id="Discussion"></a>

## Discussion

Use this method when you need to change the extension’s presentation style. Keep in mind that the user should have ultimate control over the extension’s presentation style. If the user chooses to change the presentation style, you want to respect that choice.

> **Important**

>  You cannot pass the [MSMessagesAppPresentationStyle.transcript](../msmessagesapppresentationstyle/transcript.md) presentation style to this method.

If you call this method on a view controller with a [MSMessagesAppPresentationStyle.transcript](../msmessagesapppresentationstyle/transcript.md) presentation style (which is a controller that’s presenting an interactive view in the transcript), the system creates a new instance of the view controller and displays it using the provided presentation style.

## See Also

### Working with Presentation Styles and Contexts

- [presentationStyle](presentationstyle.md): The extension’s current presentation style.
- [willTransition(to:)](willtransition%28to_%29.md): Tells the view controller that the extension is about to transition to a new presentation style.
- [didTransition(to:)](didtransition%28to_%29.md): Tells the view controller that the extension has transitioned to a new presentation style.
- [MSMessagesAppPresentationStyle](../msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.
- [presentationContext](presentationcontext.md): The context describing where your iMessage app is presented.
- [MSMessagesAppPresentationContext](../msmessagesapppresentationcontext.md): Presentation contexts describing where your iMessage app appears.

# requestPresentationStyle: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Asks the extension’s user interface to transition to the provided style.

## Declaration

```objectivec
- (void) requestPresentationStyle:(MSMessagesAppPresentationStyle) presentationStyle;
```

## Parameters

- `presentationStyle`: The desired presentation style. For a list of possible styles, see [MSMessagesAppPresentationStyle](../msmessagesapppresentationstyle.md).

<a id="Discussion"></a>

## Discussion

Use this method when you need to change the extension’s presentation style. Keep in mind that the user should have ultimate control over the extension’s presentation style. If the user chooses to change the presentation style, you want to respect that choice.

> **Important**

>  You cannot pass the [MSMessagesAppPresentationStyleTranscript](../msmessagesapppresentationstyle/transcript.md) presentation style to this method.

If you call this method on a view controller with a [MSMessagesAppPresentationStyleTranscript](../msmessagesapppresentationstyle/transcript.md) presentation style (which is a controller that’s presenting an interactive view in the transcript), the system creates a new instance of the view controller and displays it using the provided presentation style.

## See Also

### Working with Presentation Styles and Contexts

- [presentationStyle](presentationstyle.md): The extension’s current presentation style.
- [willTransitionToPresentationStyle:](willtransition%28to_%29.md): Tells the view controller that the extension is about to transition to a new presentation style.
- [didTransitionToPresentationStyle:](didtransition%28to_%29.md): Tells the view controller that the extension has transitioned to a new presentation style.
- [MSMessagesAppPresentationStyle](../msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.
- [presentationContext](presentationcontext.md): The context describing where your iMessage app is presented.
- [MSMessagesAppPresentationContext](../msmessagesapppresentationcontext.md): Presentation contexts describing where your iMessage app appears.
