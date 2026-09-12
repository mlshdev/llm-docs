> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/marketplaceappextension](https://developer.apple.com/documentation/marketplacekit/marketplaceappextension)

# MarketplaceAppExtension

**Framework:** MarketplaceKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An extension that facilitates authentication, installation, and launch of a marketplace with deep links.

## Declaration

```swift
protocol MarketplaceAppExtension : AppExtension, Sendable
```

## Mentioned In

- [Installing apps from an alternative marketplace](installing-apps-from-an-alternative-marketplace.md)
- [Reauthenticating a person to manage apps](reauthenticating-a-person-to-manage-apps.md)

<a id="overview"></a>

## Overview

You provide this extension to enable the operating system to facilitate some tasks for your app even if it isn’t running, such as:

- Automatically updating apps when a new version is available.
- Providing additional header text for communications with your marketplace server.
- Launching your app storefront for a specific app.
- Handling failures in requests to your marketplace server.

<a id="Define-the-extension-point-identifier"></a>

### Define the extension point identifier

To set up your marketplace extension in Xcode, use a generic extension template and set the `EXExtensionPointIdentifier` key in the `Info.plist` file to `com.apple.marketplace.extension`:

```
<dict>
  <key>EXAppExtensionAttributes</key>
  <dict>
    <key>EXExtensionPointIdentifier</key>
    <string>com.apple.marketplace.extension</string>
  </dict>
</dict>
</plist>
```

## Topics

### Instance Methods

- [additionalHeaders(for:account:)](marketplaceappextension/additionalheaders%28for_account_%29.md): Adds information to the request header for communications from the operating system to your marketplace endpoints.
- [automaticUpdates(for:)](marketplaceappextension/automaticupdates%28for_%29.md)
- [availableAppVersions(forAppleItemIDs:)](marketplaceappextension/availableappversions%28forappleitemids_%29.md)
- [requestFailed(response:)](marketplaceappextension/requestfailed%28response_%29.md): Handles when the operating system receives an unexpected response from your web server.

## Relationships

### Inherits From

- [AppExtension](https://developer.apple.com/documentation/extensionfoundation/appextension)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
