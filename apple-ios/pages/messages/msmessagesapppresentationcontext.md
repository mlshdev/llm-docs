> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesapppresentationcontext](https://developer.apple.com/documentation/messages/msmessagesapppresentationcontext)

# MSMessagesAppPresentationContext (Swift)

**Framework:** Messages  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Presentation contexts describing where your iMessage app appears.

## Declaration

```swift
enum MSMessagesAppPresentationContext
```

## Topics

### Presentation Contexts

- [MSMessagesAppPresentationContext.media](msmessagesapppresentationcontext/media.md): A constant that indicates the iMessage app appears inside the Stickers app throughout iOS including in Messages, FaceTime, the emoji keyboard, and Markup.
- [MSMessagesAppPresentationContext.messages](msmessagesapppresentationcontext/messages.md): A constant that indicates the iMessage app appears in Messages in the list of iMessage apps that appears when you press the plus button.

### Initializers

- [init(rawValue:)](msmessagesapppresentationcontext/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with Presentation Styles and Contexts

- [presentationStyle](msmessagesappviewcontroller/presentationstyle.md): The extension’s current presentation style.
- [requestPresentationStyle(\_:)](msmessagesappviewcontroller/requestpresentationstyle%28__%29.md): Asks the extension’s user interface to transition to the provided style.
- [willTransition(to:)](msmessagesappviewcontroller/willtransition%28to_%29.md): Tells the view controller that the extension is about to transition to a new presentation style.
- [didTransition(to:)](msmessagesappviewcontroller/didtransition%28to_%29.md): Tells the view controller that the extension has transitioned to a new presentation style.
- [MSMessagesAppPresentationStyle](msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.
- [presentationContext](msmessagesappviewcontroller/presentationcontext.md): The context describing where your iMessage app is presented.

# MSMessagesAppPresentationContext (Objective-C)

**Framework:** Messages  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Presentation contexts describing where your iMessage app appears.

## Declaration

```objectivec
enum MSMessagesAppPresentationContext : NSUInteger;
```

## Topics

### Presentation Contexts

- [MSMessagesAppPresentationContextMedia](msmessagesapppresentationcontext/media.md): A constant that indicates the iMessage app appears inside the Stickers app throughout iOS including in Messages, FaceTime, the emoji keyboard, and Markup.
- [MSMessagesAppPresentationContextMessages](msmessagesapppresentationcontext/messages.md): A constant that indicates the iMessage app appears in Messages in the list of iMessage apps that appears when you press the plus button.

## See Also

### Working with Presentation Styles and Contexts

- [presentationStyle](msmessagesappviewcontroller/presentationstyle.md): The extension’s current presentation style.
- [requestPresentationStyle:](msmessagesappviewcontroller/requestpresentationstyle%28__%29.md): Asks the extension’s user interface to transition to the provided style.
- [willTransitionToPresentationStyle:](msmessagesappviewcontroller/willtransition%28to_%29.md): Tells the view controller that the extension is about to transition to a new presentation style.
- [didTransitionToPresentationStyle:](msmessagesappviewcontroller/didtransition%28to_%29.md): Tells the view controller that the extension has transitioned to a new presentation style.
- [MSMessagesAppPresentationStyle](msmessagesapppresentationstyle.md): Presentation styles that describe your iMessage app’s appearance.
- [presentationContext](msmessagesappviewcontroller/presentationcontext.md): The context describing where your iMessage app is presented.
