> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meextension](https://developer.apple.com/documentation/mailkit/meextension)

# MEExtension (Swift)

**Framework:** MailKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

A type that provides objects for manipulating email messages, such as performing actions on messages or blocking content when users view messages.

## Declaration

```swift
@MainActor protocol MEExtension : NSObjectProtocol
```

<a id="overview"></a>

## Overview

To implement an app extension, you provide an object that conforms to the [MEExtension](meextension.md) protocol. The [MEExtensionCapabilities](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/meextensioncapabilities) key of your extension’s `Info.plist` defines the capabilities that you support, as follows:

```plist
<key>NSExtensionAttributes</key>
<dict>
    <key>MEExtensionCapabilities</key>
    <array>
        <string>MEContentBlocker</string>
        <string>MEMessageActionHandler</string>
        <string>MEComposeSessionHandler</string>
        <string>MEMessageSecurityHandler</string>
    </array>
</dict>
```

For each capability that your extension defines, you provide an object that implements the capability. MailKit uses the following methods to request the object for a given capability. The capability also specifies a protocol that the handler implements.

| Capability Key | Method | Protocol |
| --- | --- | --- |
| `MEContentBlocker` | [handler(for:)](meextension/handler%28for_%29.md) | [MEContentBlocker](mecontentblocker.md) |
| `MEMessageActionHandler` | [handlerForMessageActions()](meextension/handlerformessageactions%28%29.md) | [MEMessageActionHandler](memessageactionhandler.md) |
| `MEComposeSessionHandler` | [handlerForContentBlocker()](meextension/handlerforcontentblocker%28%29.md) | [MEComposeSessionHandler](mecomposesessionhandler.md) |
| `MEMessageSecurityHandler` | [handlerForMessageSecurity()](meextension/handlerformessagesecurity%28%29.md) | [MEMessageSecurityHandler](memessagesecurityhandler.md) |

## Topics

### Blocking Content

- [handlerForContentBlocker()](meextension/handlerforcontentblocker%28%29.md): Returns an object that provides rules that the message viewer uses to block content.

### Performing Actions on Messages

- [handlerForMessageActions()](meextension/handlerformessageactions%28%29.md): Returns an object that performs actions on mail messages as the system downloads them.

### Enhancing the Compose Window

- [handler(for:)](meextension/handler%28for_%29.md): Returns an object that participates in the composition of a mail message.

### Encrypting and Signing Messages

- [handlerForMessageSecurity()](meextension/handlerformessagesecurity%28%29.md): Returns an object that applies security measures such as encryption and digital signatures to messages.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Essentials

- [Build Mail App Extensions](build-mail-app-extensions.md): Create app extensions that block content, perform message and composing actions, and help message security.

# MEExtension (Objective-C)

**Framework:** MailKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

A type that provides objects for manipulating email messages, such as performing actions on messages or blocking content when users view messages.

## Declaration

```objectivec
@protocol MEExtension <NSObject>
```

<a id="overview"></a>

## Overview

To implement an app extension, you provide an object that conforms to the [MEExtension](meextension.md) protocol. The [MEExtensionCapabilities](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/meextensioncapabilities) key of your extension’s `Info.plist` defines the capabilities that you support, as follows:

```plist
<key>NSExtensionAttributes</key>
<dict>
    <key>MEExtensionCapabilities</key>
    <array>
        <string>MEContentBlocker</string>
        <string>MEMessageActionHandler</string>
        <string>MEComposeSessionHandler</string>
        <string>MEMessageSecurityHandler</string>
    </array>
</dict>
```

For each capability that your extension defines, you provide an object that implements the capability. MailKit uses the following methods to request the object for a given capability. The capability also specifies a protocol that the handler implements.

| Capability Key | Method | Protocol |
| --- | --- | --- |
| `MEContentBlocker` | [handlerForComposeSession:](meextension/handler%28for_%29.md) | [MEContentBlocker](mecontentblocker.md) |
| `MEMessageActionHandler` | [handlerForMessageActions](meextension/handlerformessageactions%28%29.md) | [MEMessageActionHandler](memessageactionhandler.md) |
| `MEComposeSessionHandler` | [handlerForContentBlocker](meextension/handlerforcontentblocker%28%29.md) | [MEComposeSessionHandler](mecomposesessionhandler.md) |
| `MEMessageSecurityHandler` | [handlerForMessageSecurity](meextension/handlerformessagesecurity%28%29.md) | [MEMessageSecurityHandler](memessagesecurityhandler.md) |

## Topics

### Blocking Content

- [handlerForContentBlocker](meextension/handlerforcontentblocker%28%29.md): Returns an object that provides rules that the message viewer uses to block content.

### Performing Actions on Messages

- [handlerForMessageActions](meextension/handlerformessageactions%28%29.md): Returns an object that performs actions on mail messages as the system downloads them.

### Enhancing the Compose Window

- [handlerForComposeSession:](meextension/handler%28for_%29.md): Returns an object that participates in the composition of a mail message.

### Encrypting and Signing Messages

- [handlerForMessageSecurity](meextension/handlerformessagesecurity%28%29.md): Returns an object that applies security measures such as encryption and digital signatures to messages.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Essentials

- [Build Mail App Extensions](build-mail-app-extensions.md): Create app extensions that block content, perform message and composing actions, and help message security.
