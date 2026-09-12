> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessageactionhandler](https://developer.apple.com/documentation/mailkit/memessageactionhandler)

# MEMessageActionHandler (Swift)

**Framework:** MailKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

An object that performs actions on messages as the system downloads them.

## Declaration

```swift
protocol MEMessageActionHandler : NSObjectProtocol
```

<a id="overview"></a>

## Overview

As MailKit downloads messages, it invokes the [decideAction(for:completionHandler:)](memessageactionhandler/decideaction%28for_completionhandler_%29.md) method on your handler. You indicate the action to take for each message, such as marking it as read or unread, flagging it, or archiving it.

To indicate that your extension contains a message action handler, add `MEMessageActionHandler` to the [MEExtensionCapabilities](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/meextensioncapabilities) array in the extension’s `Info.plist` file:

```plist
<key>NSExtensionAttributes</key>
<dict>
    <key>MEExtensionCapabilities</key>
    <array>
        <string>MEMessageActionHandler</string>
    </array>
</dict>
```

## Topics

### Performing Actions on Messages

- [decideAction(for:completionHandler:)](memessageactionhandler/decideaction%28for_completionhandler_%29.md): Determines the action that the system takes when it downloads a message.
- [MEMessageAction](memessageaction.md): An action the system performs on a message, such as setting a color or archiving it.
- [MEMessageActionDecision](memessageactiondecision.md): The action that the system performs on a message, or a request to ask the action handler again later when the message content is available.
- [MEMessageAction.MessageColor](memessageaction/messagecolor.md): A color that the system uses to display a message in the message list.

### Instance Properties

- [requiredHeaders](memessageactionhandler/requiredheaders.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# MEMessageActionHandler (Objective-C)

**Framework:** MailKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

An object that performs actions on messages as the system downloads them.

## Declaration

```objectivec
@protocol MEMessageActionHandler <NSObject>
```

<a id="overview"></a>

## Overview

As MailKit downloads messages, it invokes the [decideActionForMessage:completionHandler:](memessageactionhandler/decideaction%28for_completionhandler_%29.md) method on your handler. You indicate the action to take for each message, such as marking it as read or unread, flagging it, or archiving it.

To indicate that your extension contains a message action handler, add `MEMessageActionHandler` to the [MEExtensionCapabilities](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/meextensioncapabilities) array in the extension’s `Info.plist` file:

```plist
<key>NSExtensionAttributes</key>
<dict>
    <key>MEExtensionCapabilities</key>
    <array>
        <string>MEMessageActionHandler</string>
    </array>
</dict>
```

## Topics

### Performing Actions on Messages

- [decideActionForMessage:completionHandler:](memessageactionhandler/decideaction%28for_completionhandler_%29.md): Determines the action that the system takes when it downloads a message.
- [MEMessageAction](memessageaction.md): An action the system performs on a message, such as setting a color or archiving it.
- [MEMessageActionDecision](memessageactiondecision.md): The action that the system performs on a message, or a request to ask the action handler again later when the message content is available.
- [MEMessageActionMessageColor](memessageaction/messagecolor.md): A color that the system uses to display a message in the message list.

### Instance Properties

- [requiredHeaders](memessageactionhandler/requiredheaders.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
