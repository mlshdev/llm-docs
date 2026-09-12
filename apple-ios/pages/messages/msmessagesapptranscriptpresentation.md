> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesapptranscriptpresentation](https://developer.apple.com/documentation/messages/msmessagesapptranscriptpresentation)

# MSMessagesAppTranscriptPresentation (Swift)

**Framework:** Messages  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A protocol that provides support for displaying live messages in the transcript of the Messages app.

## Declaration

```swift
protocol MSMessagesAppTranscriptPresentation
```

<a id="overview"></a>

## Overview

These methods are called when a view controller is presented using a [MSMessagesAppPresentationStyle.transcript](msmessagesapppresentationstyle/transcript.md) presentation style.

## Topics

### Providing the Content’s Size

- [contentSizeThatFits(\_:)](msmessagesapptranscriptpresentation/contentsizethatfits%28__%29.md): The size of your messages view, given the provided maximum size.

### Instance Properties

- [messageCornerRadius](msmessagesapptranscriptpresentation/messagecornerradius.md)
- [messageTintColor](msmessagesapptranscriptpresentation/messagetintcolor.md)

### Instance Methods

- [invalidateMessageTintColor()](msmessagesapptranscriptpresentation/invalidatemessagetintcolor%28%29.md)

## Relationships

### Conforming Types

- [MSMessagesAppViewController](msmessagesappviewcontroller.md)

## See Also

### Custom iMessage app interface

- [IceCreamBuilder: Building an iMessage Extension](icecreambuilder-building-an-imessage-extension.md): Allow users to collaborate on the design of ice cream sundae stickers.
- [Creating a Sticker App with a Custom Layout](creating-a-sticker-app-with-a-custom-layout.md): Expand on the Messages sticker app template to create an app with a customized user interface.
- [MSMessagesAppViewController](msmessagesappviewcontroller.md): The principal view controller for iMessage apps.
- [MSMessagesAppPresentationStyle](msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.

# MSMessagesAppTranscriptPresentation (Objective-C)

**Framework:** Messages  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A protocol that provides support for displaying live messages in the transcript of the Messages app.

## Declaration

```objectivec
@protocol MSMessagesAppTranscriptPresentation
```

<a id="overview"></a>

## Overview

These methods are called when a view controller is presented using a [MSMessagesAppPresentationStyleTranscript](msmessagesapppresentationstyle/transcript.md) presentation style.

## Topics

### Providing the Content’s Size

- [contentSizeThatFits:](msmessagesapptranscriptpresentation/contentsizethatfits%28__%29.md): The size of your messages view, given the provided maximum size.

### Instance Properties

- [messageCornerRadius](msmessagesapptranscriptpresentation/messagecornerradius.md)
- [messageTintColor](msmessagesapptranscriptpresentation/messagetintcolor.md)

### Instance Methods

- [invalidateMessageTintColor](msmessagesapptranscriptpresentation/invalidatemessagetintcolor%28%29.md)

## Relationships

### Conforming Types

- [MSMessagesAppViewController](msmessagesappviewcontroller.md)

## See Also

### Custom iMessage app interface

- [IceCreamBuilder: Building an iMessage Extension](icecreambuilder-building-an-imessage-extension.md): Allow users to collaborate on the design of ice cream sundae stickers.
- [Creating a Sticker App with a Custom Layout](creating-a-sticker-app-with-a-custom-layout.md): Expand on the Messages sticker app template to create an app with a customized user interface.
- [MSMessagesAppViewController](msmessagesappviewcontroller.md): The principal view controller for iMessage apps.
- [MSMessagesAppPresentationStyle](msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.
