> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesapppresentationcontext/media](https://developer.apple.com/documentation/messages/msmessagesapppresentationcontext/media)

# MSMessagesAppPresentationContext.media (Swift)

**Framework:** Messages  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A constant that indicates the iMessage app appears inside the Stickers app throughout iOS including in Messages, FaceTime, the emoji keyboard, and Markup.

## Declaration

```swift
case media
```

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](../adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

<a id="Discussion"></a>

## Discussion

The media context supports only a subset of the Messages framework API. Specifically, the following limits apply:

- The iMessage app can only insert sticker and image attachments. You can’t insert [MSMessage](../msmessage.md) objects, text, or non-image assets.
- You can’t use any of the [MSConversation](../msconversation.md) class’s `send` messages ([sendAttachment(\_:withAlternateFilename:completionHandler:)](../msconversation/sendattachment%28__withalternatefilename_completionhandler_%29.md), [send(\_:completionHandler:)](../msconversation/send%28__completionhandler_%29-9krz.md), [send(\_:completionHandler:)](../msconversation/send%28__completionhandler_%29-4kje0.md), or [sendText(\_:completionHandler:)](../msconversation/sendtext%28__completionhandler_%29.md)).
- You can’t display a camera inside an [MSMessagesAppPresentationContext.media](media.md) context.

## See Also

### Presentation Contexts

- [MSMessagesAppPresentationContext.messages](messages.md): A constant that indicates the iMessage app appears in Messages in the list of iMessage apps that appears when you press the plus button.

# MSMessagesAppPresentationContextMedia (Objective-C)

**Framework:** Messages  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A constant that indicates the iMessage app appears inside the Stickers app throughout iOS including in Messages, FaceTime, the emoji keyboard, and Markup.

## Declaration

```objectivec
MSMessagesAppPresentationContextMedia
```

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](../adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

<a id="Discussion"></a>

## Discussion

The media context supports only a subset of the Messages framework API. Specifically, the following limits apply:

- The iMessage app can only insert sticker and image attachments. You can’t insert [MSMessage](../msmessage.md) objects, text, or non-image assets.
- You can’t use any of the [MSConversation](../msconversation.md) class’s `send` messages ([sendAttachment:withAlternateFilename:completionHandler:](../msconversation/sendattachment%28__withalternatefilename_completionhandler_%29.md), [sendMessage:completionHandler:](../msconversation/send%28__completionhandler_%29-9krz.md), [sendSticker:completionHandler:](../msconversation/send%28__completionhandler_%29-4kje0.md), or [sendText:completionHandler:](../msconversation/sendtext%28__completionhandler_%29.md)).
- You can’t display a camera inside an [MSMessagesAppPresentationContextMedia](media.md) context.

## See Also

### Presentation Contexts

- [MSMessagesAppPresentationContextMessages](messages.md): A constant that indicates the iMessage app appears in Messages in the list of iMessage apps that appears when you press the plus button.
