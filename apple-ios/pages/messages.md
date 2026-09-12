> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages](https://developer.apple.com/documentation/messages)

# Messages (Swift)

**Framework:** Messages  
**Kind:** Framework  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+

Create app extensions that allow users to send text, stickers, media files, and interactive messages.

<a id="overview"></a>

## Overview

You can use the Messages framework to create sticker packs and iMessage apps. You can create sticker packs and iMessage apps as either standalone apps or as app extensions within a containing iOS app. For more information on creating and working with app extensions, see [App extensions](https://developer.apple.com/app-extensions/).

iMessage apps and stickers help people interact and communicate in the context of a Messages conversation. For design guidance, see [Human Interface Guidelines \> iMessage apps and stickers](https://developer.apple.com/design/human-interface-guidelines/imessage-apps-and-stickers).

<a id="iMessage-apps"></a>

### iMessage apps

iMessage apps leverage the full framework to interact with the Messages app.

> **Note**

>  To avoid a crash, an iMessage app linked on or after iOS 10 must include usage description keys for the device features it needs to access in its `Info.plist` file. Specifically, it must include [NSCameraUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nscamerausagedescription) to access the device’s camera, and it must include [NSMicrophoneUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsmicrophoneusagedescription) to access the device’s microphones.

Use iMessage apps to:

- Present a custom user interface inside the Messages app; see [MSMessagesAppViewController](messages/msmessagesappviewcontroller.md).
- Create a custom or dynamic sticker browser; see [MSStickerBrowserViewController](messages/msstickerbrowserviewcontroller.md).
- Insert text, stickers, or media files into the Messages app’s input field; see [MSConversation](messages/msconversation.md).
- Create interactive messages that carry app-specific data; see [MSMessage](messages/msmessage.md).
- Update interactive messages (for example, to create games or collaborative apps); see [MSSession](messages/mssession.md).

For more information on submitting iMessage Apps to the App Store, see [Preparing Your iMessage App for Submission](https://developer.apple.com/app-store/imessage-app-submissions/).

In iOS 17, Messages allows you to interactively resize iMessage apps with a vertical pan gesture. Messages handles any conflicts between resize gestures and your custom gestures. If your app uses manual touch handling such as [touchesBegan(\_:with:)](https://developer.apple.com/documentation/uikit/uigesturerecognizer/touchesbegan%28_:with:%29), [touchesMoved(\_:with:)](https://developer.apple.com/documentation/uikit/uigesturerecognizer/touchesmoved%28_:with:%29), and [touchesEnded(\_:with:)](https://developer.apple.com/documentation/uikit/uigesturerecognizer/touchesended%28_:with:%29), you can do either of the following:

- Change your manual touch handling code to use a gesture recognizer instead.
- Use your [UIView](https://developer.apple.com/documentation/uikit/uiview) to override [gestureRecognizerShouldBegin(\_:)](https://developer.apple.com/documentation/uikit/uigesturerecognizerdelegate/gesturerecognizershouldbegin%28_:%29) and return `NO` when your iMessage app doesn’t own the gesture.

<a id="Become-the-default-messaging-app"></a>

### Become the default messaging app

In iOS and iPadOS 18.2 and later, a person may select an app other than the Messages app to send instant messages. If you wish to make your app the default messages app, see [Preparing your app to be the default messaging app](messages/preparing-your-app-to-be-the-default-messaging-app.md).

## Topics

### Default messaging app

- [Preparing your app to be the default messaging app](messages/preparing-your-app-to-be-the-default-messaging-app.md): Configure your messaging app so people can set it as the default on their device.

### Custom sticker packs

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](messages/adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md): Enable your Sticker pack or iMessage app in the media context.
- [Adding your sticker packs to Messages](messages/adding-your-sticker-packs-to-messages.md): Drag and drop your sticker pack into the Stickers asset catalog to let people access your stickers from Messages.
- [MSStickerBrowserViewController](messages/msstickerbrowserviewcontroller.md): A view controller that provides dynamic content to the standard sticker browser.
- [MSStickerBrowserView](messages/msstickerbrowserview.md): A browser view that displays a dynamically generated list of stickers.
- [MSStickerView](messages/msstickerview.md): A view for displaying a sticker.
- [MSStickerSize](messages/msstickersize.md): The size of the stickers in the browser view.

### Custom iMessage app interface

- [IceCreamBuilder: Building an iMessage Extension](messages/icecreambuilder-building-an-imessage-extension.md): Allow users to collaborate on the design of ice cream sundae stickers.
- [Creating a Sticker App with a Custom Layout](messages/creating-a-sticker-app-with-a-custom-layout.md): Expand on the Messages sticker app template to create an app with a customized user interface.
- [MSMessagesAppViewController](messages/msmessagesappviewcontroller.md): The principal view controller for iMessage apps.
- [MSMessagesAppTranscriptPresentation](messages/msmessagesapptranscriptpresentation.md): A protocol that provides support for displaying live messages in the transcript of the Messages app.
- [MSMessagesAppPresentationStyle](messages/msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.

### Message content

- [MSConversation](messages/msconversation.md): An object that represents a conversation in the Messages app.
- [MSSticker](messages/mssticker.md): A sticker that can be sent as a new message or attached to an existing balloon in the Messages app’s transcript.

### Interactive messages

- [MSMessage](messages/msmessage.md): A custom message object.
- [MSSession](messages/mssession.md): A session object used to create and update messages.
- [MSMessageLayout](messages/msmessagelayout.md): An abstract base class that defines the appearance of [MSMessage](messages/msmessage.md) objects in the conversation transcript.
- [MSMessageTemplateLayout](messages/msmessagetemplatelayout.md): A template-based layout for custom messages.
- [MSMessageLiveLayout](messages/msmessagelivelayout.md): A layout that provides a custom, interactive view inside the transcript.

### Critical messages

- [Sending SMS messages from an app](messages/critical-messaging-api.md): Send critical messages from inside your app using the Critical Messaging API.
- [MSCriticalSMSMessenger](messages/mscriticalsmsmessenger.md): The user interface for the Critical Messaging API.
- [MSRecipient](messages/msrecipient.md): A structure that describes the recipient of a critical message.
- [MSCriticalMessage](messages/mscriticalmessage.md): A message for critical communications.
- [MSCriticalMessagingAuthorizationStatus](messages/mscriticalmessagingauthorizationstatus.md): Values that describe the authorization status for the Critical Messaging API.

### Errors

- [MSStickersErrorDomain](messages/msstickerserrordomain.md): The error domain for stickers.
- [MSMessagesErrorDomain](messages/msmessageserrordomain.md): The error domain for iMessage apps.
- [MSMessageErrorCode](messages/msmessageerrorcode.md): The error codes that the Messages framework generates.
- [MSCriticalMessagingError](messages/mscriticalmessagingerror.md): Values that describe errors the Critical Messaging API returns.

### Classes

- [MSUPIRequest](messages/msupirequest.md)

# Messages (Objective-C)

**Framework:** Messages  
**Kind:** Framework  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+

Create app extensions that allow users to send text, stickers, media files, and interactive messages.

<a id="overview"></a>

## Overview

You can use the Messages framework to create sticker packs and iMessage apps. You can create sticker packs and iMessage apps as either standalone apps or as app extensions within a containing iOS app. For more information on creating and working with app extensions, see [App extensions](https://developer.apple.com/app-extensions/).

iMessage apps and stickers help people interact and communicate in the context of a Messages conversation. For design guidance, see [Human Interface Guidelines \> iMessage apps and stickers](https://developer.apple.com/design/human-interface-guidelines/imessage-apps-and-stickers).

<a id="iMessage-apps"></a>

### iMessage apps

iMessage apps leverage the full framework to interact with the Messages app.

> **Note**

>  To avoid a crash, an iMessage app linked on or after iOS 10 must include usage description keys for the device features it needs to access in its `Info.plist` file. Specifically, it must include [NSCameraUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nscamerausagedescription) to access the device’s camera, and it must include [NSMicrophoneUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsmicrophoneusagedescription) to access the device’s microphones.

Use iMessage apps to:

- Present a custom user interface inside the Messages app; see [MSMessagesAppViewController](messages/msmessagesappviewcontroller.md).
- Create a custom or dynamic sticker browser; see [MSStickerBrowserViewController](messages/msstickerbrowserviewcontroller.md).
- Insert text, stickers, or media files into the Messages app’s input field; see [MSConversation](messages/msconversation.md).
- Create interactive messages that carry app-specific data; see [MSMessage](messages/msmessage.md).
- Update interactive messages (for example, to create games or collaborative apps); see [MSSession](messages/mssession.md).

For more information on submitting iMessage Apps to the App Store, see [Preparing Your iMessage App for Submission](https://developer.apple.com/app-store/imessage-app-submissions/).

In iOS 17, Messages allows you to interactively resize iMessage apps with a vertical pan gesture. Messages handles any conflicts between resize gestures and your custom gestures. If your app uses manual touch handling such as [touchesBegan:withEvent:](https://developer.apple.com/documentation/uikit/uigesturerecognizer/touchesbegan%28_:with:%29), [touchesMoved:withEvent:](https://developer.apple.com/documentation/uikit/uigesturerecognizer/touchesmoved%28_:with:%29), and [touchesEnded:withEvent:](https://developer.apple.com/documentation/uikit/uigesturerecognizer/touchesended%28_:with:%29), you can do either of the following:

- Change your manual touch handling code to use a gesture recognizer instead.
- Use your [UIView](https://developer.apple.com/documentation/uikit/uiview) to override [gestureRecognizerShouldBegin:](https://developer.apple.com/documentation/uikit/uigesturerecognizerdelegate/gesturerecognizershouldbegin%28_:%29) and return `NO` when your iMessage app doesn’t own the gesture.

<a id="Become-the-default-messaging-app"></a>

### Become the default messaging app

In iOS and iPadOS 18.2 and later, a person may select an app other than the Messages app to send instant messages. If you wish to make your app the default messages app, see [Preparing your app to be the default messaging app](messages/preparing-your-app-to-be-the-default-messaging-app.md).

## Topics

### Default messaging app

- [Preparing your app to be the default messaging app](messages/preparing-your-app-to-be-the-default-messaging-app.md): Configure your messaging app so people can set it as the default on their device.

### Custom sticker packs

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](messages/adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md): Enable your Sticker pack or iMessage app in the media context.
- [Adding your sticker packs to Messages](messages/adding-your-sticker-packs-to-messages.md): Drag and drop your sticker pack into the Stickers asset catalog to let people access your stickers from Messages.
- [MSStickerBrowserViewController](messages/msstickerbrowserviewcontroller.md): A view controller that provides dynamic content to the standard sticker browser.
- [MSStickerBrowserView](messages/msstickerbrowserview.md): A browser view that displays a dynamically generated list of stickers.
- [MSStickerView](messages/msstickerview.md): A view for displaying a sticker.
- [MSStickerSize](messages/msstickersize.md): The size of the stickers in the browser view.

### Custom iMessage app interface

- [IceCreamBuilder: Building an iMessage Extension](messages/icecreambuilder-building-an-imessage-extension.md): Allow users to collaborate on the design of ice cream sundae stickers.
- [Creating a Sticker App with a Custom Layout](messages/creating-a-sticker-app-with-a-custom-layout.md): Expand on the Messages sticker app template to create an app with a customized user interface.
- [MSMessagesAppViewController](messages/msmessagesappviewcontroller.md): The principal view controller for iMessage apps.
- [MSMessagesAppTranscriptPresentation](messages/msmessagesapptranscriptpresentation.md): A protocol that provides support for displaying live messages in the transcript of the Messages app.
- [MSMessagesAppPresentationStyle](messages/msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.

### Message content

- [MSConversation](messages/msconversation.md): An object that represents a conversation in the Messages app.
- [MSSticker](messages/mssticker.md): A sticker that can be sent as a new message or attached to an existing balloon in the Messages app’s transcript.

### Interactive messages

- [MSMessage](messages/msmessage.md): A custom message object.
- [MSSession](messages/mssession.md): A session object used to create and update messages.
- [MSMessageLayout](messages/msmessagelayout.md): An abstract base class that defines the appearance of [MSMessage](messages/msmessage.md) objects in the conversation transcript.
- [MSMessageTemplateLayout](messages/msmessagetemplatelayout.md): A template-based layout for custom messages.
- [MSMessageLiveLayout](messages/msmessagelivelayout.md): A layout that provides a custom, interactive view inside the transcript.

### Critical messages

- [Sending SMS messages from an app](messages/critical-messaging-api.md): Send critical messages from inside your app using the Critical Messaging API.

### Errors

- [MSStickersErrorDomain](messages/msstickerserrordomain.md): The error domain for stickers.
- [MSMessagesErrorDomain](messages/msmessageserrordomain.md): The error domain for iMessage apps.
- [MSMessageErrorCode](messages/msmessageerrorcode.md): The error codes that the Messages framework generates.

### Classes

- [MSUPIRequest](messages/msupirequest.md)

### Macros

- [MESSAGES_EXTERN](messages/messages_extern.md)
