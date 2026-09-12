> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/mecomposesessionhandler](https://developer.apple.com/documentation/mailkit/mecomposesessionhandler)

# MEComposeSessionHandler (Swift)

**Framework:** MailKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

An object that participates in the composition of mail messages, and annotates recipient tokens.

## Declaration

```swift
@MainActor protocol MEComposeSessionHandler : NSObjectProtocol
```

<a id="overview"></a>

## Overview

When the user composes a message, MailKit requests a compose session handler object from your extension. MailKit uses this handler in the following ways:

- To inform it when the compose session begins and ends
- To add status annotations for email addresses that the user enters into the To, Cc, and Bcc fields
- To display a custom popover in the compose window
- To include custom headers in an outgoing message
- To confirm that an outgoing message is ready for delivery

Each of the items in the list above corresponds to methods that the handler implements.

To indicate that your extension contains a compose session handler, add `MEComposeSessionHandler` to the [MEExtensionCapabilities](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/meextensioncapabilities) array in the extension’s `Info.plist` file:

```swift
<key>NSExtensionAttributes</key>
<dict>
    <key>MEExtensionCapabilities</key>
    <array>
        <string>MEComposeSessionHandler</string>
    </array>
</dict>
```

## Topics

### Handling Compose Sessions

- [MEComposeSession](mecomposesession.md): An object that represents a single mail compose window.
- [mailComposeSessionDidBegin(\_:)](mecomposesessionhandler/mailcomposesessiondidbegin%28__%29.md): Informs the handler when the user opens a compose window.
- [mailComposeSessionDidEnd(\_:)](mecomposesessionhandler/mailcomposesessiondidend%28__%29.md): Informs the handler when the user closes a compose window.
- [MEComposeSessionError](mecomposesessionerror.md): An error that indicates the compose session is in an erroneous state.

### Annotating Email Address Tokens

- [annotateAddressesForSession(\_:completion:)](mecomposesessionhandler/annotateaddressesforsession%28__completion_%29.md): Indicates whether recipients in the compose window are valid or not.
- [MEAddressAnnotation](meaddressannotation.md): An object that indicates the validity of an email address.

### Extending the Compose Window Interface

- [viewController(for:)](mecomposesessionhandler/viewcontroller%28for_%29.md): Provides a custom view controller to display as part of the compose window.

### Adding Custom Headers

- [additionalHeaders(for:)](mecomposesessionhandler/additionalheaders%28for_%29.md): Provides custom headers to include in the outgoing message.

### Approving Message Delivery

- [allowMessageSendForSession(\_:completion:)](mecomposesessionhandler/allowmessagesendforsession%28__completion_%29.md): Confirms that the message is ready for delivery.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# MEComposeSessionHandler (Objective-C)

**Framework:** MailKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

An object that participates in the composition of mail messages, and annotates recipient tokens.

## Declaration

```objectivec
@protocol MEComposeSessionHandler <NSObject>
```

<a id="overview"></a>

## Overview

When the user composes a message, MailKit requests a compose session handler object from your extension. MailKit uses this handler in the following ways:

- To inform it when the compose session begins and ends
- To add status annotations for email addresses that the user enters into the To, Cc, and Bcc fields
- To display a custom popover in the compose window
- To include custom headers in an outgoing message
- To confirm that an outgoing message is ready for delivery

Each of the items in the list above corresponds to methods that the handler implements.

To indicate that your extension contains a compose session handler, add `MEComposeSessionHandler` to the [MEExtensionCapabilities](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/meextensioncapabilities) array in the extension’s `Info.plist` file:

```swift
<key>NSExtensionAttributes</key>
<dict>
    <key>MEExtensionCapabilities</key>
    <array>
        <string>MEComposeSessionHandler</string>
    </array>
</dict>
```

## Topics

### Handling Compose Sessions

- [MEComposeSession](mecomposesession.md): An object that represents a single mail compose window.
- [mailComposeSessionDidBegin:](mecomposesessionhandler/mailcomposesessiondidbegin%28__%29.md): Informs the handler when the user opens a compose window.
- [mailComposeSessionDidEnd:](mecomposesessionhandler/mailcomposesessiondidend%28__%29.md): Informs the handler when the user closes a compose window.

### Annotating Email Address Tokens

- [session:annotateAddressesWithCompletionHandler:](mecomposesessionhandler/annotateaddressesforsession%28__completion_%29.md): Indicates whether recipients in the compose window are valid or not.
- [MEAddressAnnotation](meaddressannotation.md): An object that indicates the validity of an email address.

### Extending the Compose Window Interface

- [viewControllerForSession:](mecomposesessionhandler/viewcontroller%28for_%29.md): Provides a custom view controller to display as part of the compose window.

### Adding Custom Headers

- [additionalHeadersForSession:](mecomposesessionhandler/additionalheaders%28for_%29.md): Provides custom headers to include in the outgoing message.

### Approving Message Delivery

- [session:canSendMessageWithCompletionHandler:](mecomposesessionhandler/allowmessagesendforsession%28__completion_%29.md): Confirms that the message is ready for delivery.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
