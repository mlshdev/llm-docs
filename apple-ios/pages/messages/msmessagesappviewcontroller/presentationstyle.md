> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesappviewcontroller/presentationstyle](https://developer.apple.com/documentation/messages/msmessagesappviewcontroller/presentationstyle)

# presentationStyle (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The extension’s current presentation style.

## Declaration

```swift
var presentationStyle: MSMessagesAppPresentationStyle { get }
```

<a id="Discussion"></a>

## Discussion

The presentation style defines how the extension appears in the Messages app. The property’s value is set by the following actions:

- The user selects the extension in the app drawer: The Messages app launches the extension using the [MSMessagesAppPresentationStyle.compact](../msmessagesapppresentationstyle/compact.md) style.
- The user selects a message in the transcript that represents one of the extension’s [MSMessage](../msmessage.md) objects: The Messages app launches the extension using the [MSMessagesAppPresentationStyle.expanded](../msmessagesapppresentationstyle/expanded.md) style.
- The user taps the collapse and expand buttons while the extension is running: The Messages app changes the current presentation style.
- You programmatically set the presentation style by calling the [requestPresentationStyle(\_:)](requestpresentationstyle%28__%29.md) method.

## See Also

### Working with Presentation Styles and Contexts

- [requestPresentationStyle(\_:)](requestpresentationstyle%28__%29.md): Asks the extension’s user interface to transition to the provided style.
- [willTransition(to:)](willtransition%28to_%29.md): Tells the view controller that the extension is about to transition to a new presentation style.
- [didTransition(to:)](didtransition%28to_%29.md): Tells the view controller that the extension has transitioned to a new presentation style.
- [MSMessagesAppPresentationStyle](../msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.
- [presentationContext](presentationcontext.md): The context describing where your iMessage app is presented.
- [MSMessagesAppPresentationContext](../msmessagesapppresentationcontext.md): Presentation contexts describing where your iMessage app appears.

# presentationStyle (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The extension’s current presentation style.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) MSMessagesAppPresentationStyle presentationStyle;
```

<a id="Discussion"></a>

## Discussion

The presentation style defines how the extension appears in the Messages app. The property’s value is set by the following actions:

- The user selects the extension in the app drawer: The Messages app launches the extension using the [MSMessagesAppPresentationStyleCompact](../msmessagesapppresentationstyle/compact.md) style.
- The user selects a message in the transcript that represents one of the extension’s [MSMessage](../msmessage.md) objects: The Messages app launches the extension using the [MSMessagesAppPresentationStyleExpanded](../msmessagesapppresentationstyle/expanded.md) style.
- The user taps the collapse and expand buttons while the extension is running: The Messages app changes the current presentation style.
- You programmatically set the presentation style by calling the [requestPresentationStyle:](requestpresentationstyle%28__%29.md) method.

## See Also

### Working with Presentation Styles and Contexts

- [requestPresentationStyle:](requestpresentationstyle%28__%29.md): Asks the extension’s user interface to transition to the provided style.
- [willTransitionToPresentationStyle:](willtransition%28to_%29.md): Tells the view controller that the extension is about to transition to a new presentation style.
- [didTransitionToPresentationStyle:](didtransition%28to_%29.md): Tells the view controller that the extension has transitioned to a new presentation style.
- [MSMessagesAppPresentationStyle](../msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.
- [presentationContext](presentationcontext.md): The context describing where your iMessage app is presented.
- [MSMessagesAppPresentationContext](../msmessagesapppresentationcontext.md): Presentation contexts describing where your iMessage app appears.
