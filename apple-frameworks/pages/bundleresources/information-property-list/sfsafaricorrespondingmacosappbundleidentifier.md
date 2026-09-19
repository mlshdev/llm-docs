> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/sfsafaricorrespondingmacosappbundleidentifier

# SFSafariCorrespondingMacOSAppBundleIdentifier

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

A string bundle ID that identifies the corresponding macOS app that contains a content blocker or Safari web extension.

## Details

`SFSafariCorrespondingMacOSAppBundleIdentifier`

<a id="Discussion"></a>

## Discussion

To enable extension syncing for your iOS app that contains a content blocker or Safari web extension, specify the bundle ID of the corresponding macOS app that contains the same content blocker or Safari web extension.

Only add this to your `Info.plist` if the bundle ID for your iOS app is different from the bundle ID for your macOS app.

For more information, see [Syncing Safari web extensions across devices and platforms](../../safariservices/syncing-safari-web-extensions-across-devices-and-platforms.md).

## See Also

### Safari services

- [SFSafariCorrespondingIOSAppBundleIdentifier](sfsafaricorrespondingiosappbundleidentifier.md): A string bundle ID that identifies the corresponding iOS app that contains a content blocker or Safari web extension.
- [SFSafariCorrespondingIOSExtensionBundleIdentifier](sfsafaricorrespondingiosextensionbundleidentifier.md): A string bundle ID that identifies the corresponding content blocker extension or Safari web extension on iOS.
- [SFSafariCorrespondingMacOSExtensionBundleIdentifier](sfsafaricorrespondingmacosextensionbundleidentifier.md): A string bundle ID that identifies the corresponding content blocker extension or Safari web extension on macOS.
