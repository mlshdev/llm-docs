> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/mecomposesessionhandler/viewcontroller(for:)](https://developer.apple.com/documentation/mailkit/mecomposesessionhandler/viewcontroller(for:))

# viewController(for:) (Swift)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Provides a custom view controller to display as part of the compose window.

## Declaration

```swift
func viewController(for session: MEComposeSession) -> MEExtensionViewController
```

## Parameters

- `session`: The session that represents the properties of the message in the compose window.

<a id="return-value"></a>

## Return Value

A custom [MEExtensionViewController](../meextensionviewcontroller.md) subclass that Mail displays in the compose window.

<a id="Discussion"></a>

## Discussion

To configure an icon and tooltip for the compose session handler’s view controller, add the following entries to your extension’s `Info.plist` file:

```plist
<key>NSExtensionAttributes</key>
<dict>
    <key>MEComposeSession</key>
    <dict>
        <key>MEComposeIcon</key>
        <string>YourCustomComposeIconName</string>
        <key>MEComposeIconToolTip</key>
        <string>Tooltip for the compose session handler.</string>
    </dict>
<dict>
```

Include an icon in your extension’s bundle using the name you specify for [MEComposeIcon](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/mecomposesession/mecomposeicon).

> **Tip**

>  Include the icon in an asset catalog in your extension’s bundle, and include both light and dark variants.

# viewControllerForSession: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Provides a custom view controller to display as part of the compose window.

## Declaration

```objectivec
- (MEExtensionViewController *) viewControllerForSession:(MEComposeSession *) session;
```

## Parameters

- `session`: The session that represents the properties of the message in the compose window.

<a id="return-value"></a>

## Return Value

A custom [MEExtensionViewController](../meextensionviewcontroller.md) subclass that Mail displays in the compose window.

<a id="Discussion"></a>

## Discussion

To configure an icon and tooltip for the compose session handler’s view controller, add the following entries to your extension’s `Info.plist` file:

```plist
<key>NSExtensionAttributes</key>
<dict>
    <key>MEComposeSession</key>
    <dict>
        <key>MEComposeIcon</key>
        <string>YourCustomComposeIconName</string>
        <key>MEComposeIconToolTip</key>
        <string>Tooltip for the compose session handler.</string>
    </dict>
<dict>
```

Include an icon in your extension’s bundle using the name you specify for [MEComposeIcon](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/mecomposesession/mecomposeicon).

> **Tip**

>  Include the icon in an asset catalog in your extension’s bundle, and include both light and dark variants.
