> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/sfsafaricorrespondingiosextensionbundleidentifier

# SFSafariCorrespondingIOSExtensionBundleIdentifier

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 13.0+

A string bundle ID that identifies the corresponding content blocker extension or Safari web extension on iOS.

## Details

`SFSafariCorrespondingIOSExtensionBundleIdentifier`

<a id="Discussion"></a>

## Discussion

To enable extension syncing for your macOS content blocker extension or Safari web extension, specify the bundle ID of the corresponding iOS content blocker extension or Safari web extension.

Only add this to your `Info.plist` if the bundle ID for your macOS app is different from the bundle ID for your iOS app.

For more information, see [Syncing Safari web extensions across devices and platforms](../../safariservices/syncing-safari-web-extensions-across-devices-and-platforms.md).

## See Also

### Safari services

- [SFSafariCorrespondingIOSAppBundleIdentifier](sfsafaricorrespondingiosappbundleidentifier.md): A string bundle ID that identifies the corresponding iOS app that contains a content blocker or Safari web extension.
- [SFSafariCorrespondingMacOSAppBundleIdentifier](sfsafaricorrespondingmacosappbundleidentifier.md): A string bundle ID that identifies the corresponding macOS app that contains a content blocker or Safari web extension.
- [SFSafariCorrespondingMacOSExtensionBundleIdentifier](sfsafaricorrespondingmacosextensionbundleidentifier.md): A string bundle ID that identifies the corresponding content blocker extension or Safari web extension on macOS.
