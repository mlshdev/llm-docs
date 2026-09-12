> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesappviewcontroller](https://developer.apple.com/documentation/messages/msmessagesappviewcontroller)

# MSMessagesAppViewController (Swift)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The principal view controller for iMessage apps.

## Declaration

```swift
class MSMessagesAppViewController
```

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

<a id="overview"></a>

## Overview

Use this class to manage your extension. For more information on app extensions, see [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214).

## Topics

### Managing the Extension’s State

- [activeConversation](msmessagesappviewcontroller/activeconversation.md): The conversation currently displayed in the transcript.
- [dismiss()](msmessagesappviewcontroller/dismiss%28%29.md): Dismisses the extension and marks it for termination.
- [willBecomeActive(with:)](msmessagesappviewcontroller/willbecomeactive%28with_%29.md): Invoked just before the Messages extension becomes active.
- [didBecomeActive(with:)](msmessagesappviewcontroller/didbecomeactive%28with_%29.md): Invoked after the Messages extension becomes active.
- [willResignActive(with:)](msmessagesappviewcontroller/willresignactive%28with_%29.md): Invoked just before the message resigns its active status.
- [didResignActive(with:)](msmessagesappviewcontroller/didresignactive%28with_%29.md): Invoked after the message resigns its active status.

### Tracking Messages

- [willSelect(\_:conversation:)](msmessagesappviewcontroller/willselect%28__conversation_%29.md): Invoked in response to the user selecting a message object in the transcript, before the system updates the conversation’s [selectedMessage](msconversation/selectedmessage.md) property.
- [didSelect(\_:conversation:)](msmessagesappviewcontroller/didselect%28__conversation_%29.md): Invoked in response to the user selecting a message object in the transcript, after the system updates the conversation’s [selectedMessage](msconversation/selectedmessage.md) property.
- [didReceive(\_:conversation:)](msmessagesappviewcontroller/didreceive%28__conversation_%29.md): Invoked when the iMessage app receives a new message object.
- [didStartSending(\_:conversation:)](msmessagesappviewcontroller/didstartsending%28__conversation_%29.md): Invoked when the user sends a message object.
- [didCancelSending(\_:conversation:)](msmessagesappviewcontroller/didcancelsending%28__conversation_%29.md): Invoked when the user deletes a message object from the Messages app’s input field.

### Working with Presentation Styles and Contexts

- [presentationStyle](msmessagesappviewcontroller/presentationstyle.md): The extension’s current presentation style.
- [requestPresentationStyle(\_:)](msmessagesappviewcontroller/requestpresentationstyle%28__%29.md): Asks the extension’s user interface to transition to the provided style.
- [willTransition(to:)](msmessagesappviewcontroller/willtransition%28to_%29.md): Tells the view controller that the extension is about to transition to a new presentation style.
- [didTransition(to:)](msmessagesappviewcontroller/didtransition%28to_%29.md): Tells the view controller that the extension has transitioned to a new presentation style.
- [MSMessagesAppPresentationStyle](msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.
- [presentationContext](msmessagesappviewcontroller/presentationcontext.md): The context describing where your iMessage app is presented.
- [MSMessagesAppPresentationContext](msmessagesapppresentationcontext.md): Presentation contexts describing where your iMessage app appears.

## Relationships

### Inherits From

- [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MSMessagesAppTranscriptPresentation](msmessagesapptranscriptpresentation.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationproviding)
- [UIAppearanceContainer](https://developer.apple.com/documentation/uikit/uiappearancecontainer)
- [UIContentContainer](https://developer.apple.com/documentation/uikit/uicontentcontainer)
- [UIFocusEnvironment](https://developer.apple.com/documentation/uikit/uifocusenvironment)
- [UIPasteConfigurationSupporting](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)
- [UIStateRestoring](https://developer.apple.com/documentation/uikit/uistaterestoring)
- [UITraitChangeObservable](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94)
- [UITraitEnvironment](https://developer.apple.com/documentation/uikit/uitraitenvironment)
- [UIUserActivityRestoring](https://developer.apple.com/documentation/uikit/uiuseractivityrestoring)

## See Also

### Custom iMessage app interface

- [IceCreamBuilder: Building an iMessage Extension](icecreambuilder-building-an-imessage-extension.md): Allow users to collaborate on the design of ice cream sundae stickers.
- [Creating a Sticker App with a Custom Layout](creating-a-sticker-app-with-a-custom-layout.md): Expand on the Messages sticker app template to create an app with a customized user interface.
- [MSMessagesAppTranscriptPresentation](msmessagesapptranscriptpresentation.md): A protocol that provides support for displaying live messages in the transcript of the Messages app.
- [MSMessagesAppPresentationStyle](msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.

# MSMessagesAppViewController (Objective-C)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The principal view controller for iMessage apps.

## Declaration

```objectivec
@interface MSMessagesAppViewController : UIViewController
```

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

<a id="overview"></a>

## Overview

Use this class to manage your extension. For more information on app extensions, see [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214).

## Topics

### Managing the Extension’s State

- [activeConversation](msmessagesappviewcontroller/activeconversation.md): The conversation currently displayed in the transcript.
- [dismiss](msmessagesappviewcontroller/dismiss%28%29.md): Dismisses the extension and marks it for termination.
- [willBecomeActiveWithConversation:](msmessagesappviewcontroller/willbecomeactive%28with_%29.md): Invoked just before the Messages extension becomes active.
- [didBecomeActiveWithConversation:](msmessagesappviewcontroller/didbecomeactive%28with_%29.md): Invoked after the Messages extension becomes active.
- [willResignActiveWithConversation:](msmessagesappviewcontroller/willresignactive%28with_%29.md): Invoked just before the message resigns its active status.
- [didResignActiveWithConversation:](msmessagesappviewcontroller/didresignactive%28with_%29.md): Invoked after the message resigns its active status.

### Tracking Messages

- [willSelectMessage:conversation:](msmessagesappviewcontroller/willselect%28__conversation_%29.md): Invoked in response to the user selecting a message object in the transcript, before the system updates the conversation’s [selectedMessage](msconversation/selectedmessage.md) property.
- [didSelectMessage:conversation:](msmessagesappviewcontroller/didselect%28__conversation_%29.md): Invoked in response to the user selecting a message object in the transcript, after the system updates the conversation’s [selectedMessage](msconversation/selectedmessage.md) property.
- [didReceiveMessage:conversation:](msmessagesappviewcontroller/didreceive%28__conversation_%29.md): Invoked when the iMessage app receives a new message object.
- [didStartSendingMessage:conversation:](msmessagesappviewcontroller/didstartsending%28__conversation_%29.md): Invoked when the user sends a message object.
- [didCancelSendingMessage:conversation:](msmessagesappviewcontroller/didcancelsending%28__conversation_%29.md): Invoked when the user deletes a message object from the Messages app’s input field.

### Working with Presentation Styles and Contexts

- [presentationStyle](msmessagesappviewcontroller/presentationstyle.md): The extension’s current presentation style.
- [requestPresentationStyle:](msmessagesappviewcontroller/requestpresentationstyle%28__%29.md): Asks the extension’s user interface to transition to the provided style.
- [willTransitionToPresentationStyle:](msmessagesappviewcontroller/willtransition%28to_%29.md): Tells the view controller that the extension is about to transition to a new presentation style.
- [didTransitionToPresentationStyle:](msmessagesappviewcontroller/didtransition%28to_%29.md): Tells the view controller that the extension has transitioned to a new presentation style.
- [MSMessagesAppPresentationStyle](msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.
- [presentationContext](msmessagesappviewcontroller/presentationcontext.md): The context describing where your iMessage app is presented.
- [MSMessagesAppPresentationContext](msmessagesapppresentationcontext.md): Presentation contexts describing where your iMessage app appears.

## Relationships

### Inherits From

- [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller)

### Conforms To

- [MSMessagesAppTranscriptPresentation](msmessagesapptranscriptpresentation.md)

## See Also

### Custom iMessage app interface

- [IceCreamBuilder: Building an iMessage Extension](icecreambuilder-building-an-imessage-extension.md): Allow users to collaborate on the design of ice cream sundae stickers.
- [Creating a Sticker App with a Custom Layout](creating-a-sticker-app-with-a-custom-layout.md): Expand on the Messages sticker app template to create an app with a customized user interface.
- [MSMessagesAppTranscriptPresentation](msmessagesapptranscriptpresentation.md): A protocol that provides support for displaying live messages in the transcript of the Messages app.
- [MSMessagesAppPresentationStyle](msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.
