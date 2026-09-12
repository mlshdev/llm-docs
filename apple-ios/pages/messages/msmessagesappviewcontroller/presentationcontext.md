> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesappviewcontroller/presentationcontext](https://developer.apple.com/documentation/messages/msmessagesappviewcontroller/presentationcontext)

# presentationContext (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The context describing where your iMessage app is presented.

## Declaration

```swift
var presentationContext: MSMessagesAppPresentationContext { get }
```

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](../adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

<a id="Discussion"></a>

## Discussion

By default, the system only displays iMessage apps in the [MSMessagesAppPresentationContext.messages](../msmessagesapppresentationcontext/messages.md) context (the iMessage app only appears inside the Messages app). iMessage apps in the media context have additional limitations and design considerations.

You can control the supported contexts by adding the `MSSupportedPresentationContexts` key to the iMessage app extension’s `Info.plist` file. For example, [presentationContext](presentationcontext.md) enables the iMessage app in effects in Messages and FaceTime.

```plist
<key>MSSupportedPresentationContexts</key>
<array>
  <string>MSMessagesAppPresentationContextMessages</string>
  <string>MSMessagesAppPresentationContextMedia</string>
</array>
```

## See Also

### Working with Presentation Styles and Contexts

- [presentationStyle](presentationstyle.md): The extension’s current presentation style.
- [requestPresentationStyle(\_:)](requestpresentationstyle%28__%29.md): Asks the extension’s user interface to transition to the provided style.
- [willTransition(to:)](willtransition%28to_%29.md): Tells the view controller that the extension is about to transition to a new presentation style.
- [didTransition(to:)](didtransition%28to_%29.md): Tells the view controller that the extension has transitioned to a new presentation style.
- [MSMessagesAppPresentationStyle](../msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.
- [MSMessagesAppPresentationContext](../msmessagesapppresentationcontext.md): Presentation contexts describing where your iMessage app appears.

# presentationContext (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The context describing where your iMessage app is presented.

## Declaration

```objectivec
@property (nonatomic, readonly) MSMessagesAppPresentationContext presentationContext;
```

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](../adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

<a id="Discussion"></a>

## Discussion

By default, the system only displays iMessage apps in the [MSMessagesAppPresentationContextMessages](../msmessagesapppresentationcontext/messages.md) context (the iMessage app only appears inside the Messages app). iMessage apps in the media context have additional limitations and design considerations.

You can control the supported contexts by adding the `MSSupportedPresentationContexts` key to the iMessage app extension’s `Info.plist` file. For example, [presentationContext](presentationcontext.md) enables the iMessage app in effects in Messages and FaceTime.

```plist
<key>MSSupportedPresentationContexts</key>
<array>
  <string>MSMessagesAppPresentationContextMessages</string>
  <string>MSMessagesAppPresentationContextMedia</string>
</array>
```

## See Also

### Working with Presentation Styles and Contexts

- [presentationStyle](presentationstyle.md): The extension’s current presentation style.
- [requestPresentationStyle:](requestpresentationstyle%28__%29.md): Asks the extension’s user interface to transition to the provided style.
- [willTransitionToPresentationStyle:](willtransition%28to_%29.md): Tells the view controller that the extension is about to transition to a new presentation style.
- [didTransitionToPresentationStyle:](didtransition%28to_%29.md): Tells the view controller that the extension has transitioned to a new presentation style.
- [MSMessagesAppPresentationStyle](../msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.
- [MSMessagesAppPresentationContext](../msmessagesapppresentationcontext.md): Presentation contexts describing where your iMessage app appears.
