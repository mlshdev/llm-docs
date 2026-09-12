> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/mecontentblocker](https://developer.apple.com/documentation/mailkit/mecontentblocker)

# MEContentBlocker (Swift)

**Framework:** MailKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

An object that provides a set of rules to block content when displaying a message.

## Declaration

```swift
protocol MEContentBlocker : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A mail content blocker is similar to content blockers for Safari. Mail uses content blockers when it displays message content in a user’s mailbox. If your extension’s `Info.plist` file contains `MEContentBlocker` in the list of [MEExtensionCapabilities](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/meextensioncapabilities), MailKit invokes [handlerForContentBlocker()](meextension/handlerforcontentblocker%28%29.md) to get the object that provides content-blocking rules. The handler returns the content-blocking rules as JSON data from the [contentRulesJSON()](mecontentblocker/contentrulesjson%28%29.md) method.

For more information about content blockers, see [Creating a content blocker](https://developer.apple.com/documentation/safariservices/creating-a-content-blocker).

> **Note**

>  MailKit always applies content-blocking rules for enabled extensions. This is true even if the user clicks the “Load remote content” button on the banner that Mail displays when remote content isn’t loaded.

To indicate that your extension contains a content blocker, add `MEContentBlocker` to the `MEExtensionCapabilities` array in the extension’s `Info.plist` file:

```plist
<key>NSExtensionAttributes</key>
<dict>
    <key>MEExtensionCapabilities</key>
    <array>
        <string>MEContentBlocker</string>
    </array>
</dict>
```

## Topics

### Defining Rules to Block Content

- [contentRulesJSON()](mecontentblocker/contentrulesjson%28%29.md): The rules, as JSON data, that the system applies when it displays a message.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# MEContentBlocker (Objective-C)

**Framework:** MailKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

An object that provides a set of rules to block content when displaying a message.

## Declaration

```objectivec
@protocol MEContentBlocker <NSObject>
```

<a id="overview"></a>

## Overview

A mail content blocker is similar to content blockers for Safari. Mail uses content blockers when it displays message content in a user’s mailbox. If your extension’s `Info.plist` file contains `MEContentBlocker` in the list of [MEExtensionCapabilities](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/meextensioncapabilities), MailKit invokes [handlerForContentBlocker](meextension/handlerforcontentblocker%28%29.md) to get the object that provides content-blocking rules. The handler returns the content-blocking rules as JSON data from the [contentRulesJSON](mecontentblocker/contentrulesjson%28%29.md) method.

For more information about content blockers, see [Creating a content blocker](https://developer.apple.com/documentation/safariservices/creating-a-content-blocker).

> **Note**

>  MailKit always applies content-blocking rules for enabled extensions. This is true even if the user clicks the “Load remote content” button on the banner that Mail displays when remote content isn’t loaded.

To indicate that your extension contains a content blocker, add `MEContentBlocker` to the `MEExtensionCapabilities` array in the extension’s `Info.plist` file:

```plist
<key>NSExtensionAttributes</key>
<dict>
    <key>MEExtensionCapabilities</key>
    <array>
        <string>MEContentBlocker</string>
    </array>
</dict>
```

## Topics

### Defining Rules to Block Content

- [contentRulesJSON](mecontentblocker/contentrulesjson%28%29.md): The rules, as JSON data, that the system applies when it displays a message.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
