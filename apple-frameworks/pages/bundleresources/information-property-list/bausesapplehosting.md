> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/bausesapplehosting](https://developer.apple.com/documentation/bundleresources/information-property-list/bausesapplehosting)

# BAUsesAppleHosting

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 16.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A Boolean value that indicates whether you use Apple’s service to host your asset packs.

## Details

`BAUsesAppleHosting`

<a id="Discussion"></a>

## Discussion

Use this key if you set the [BAHasManagedAssetPacks](bahasmanagedassetpacks.md) key to  `YES`. Then, if you set this key to `YES`, use the StoreKit `StoreDownloaderExtension` protocol in your extension; otherwise, use the Background Assets `ManagedDownloaderExtension` protocol.

## See Also

### Background downloads

- [BAHasManagedAssetPacks](bahasmanagedassetpacks.md): A Boolean value that indicates whether you let the system automatically manage your asset packs.
- [BAAppGroupID](baappgroupid.md): The app group identifier that you share between your app and the extension that uses asset packs.
- [BAInitialDownloadRestrictions](bainitialdownloadrestrictions.md): The restrictions that apply to the set of assets that download immediately after app installation.
- [BAMaxInstallSize](bamaxinstallsize.md): The combined, maximum size, in bytes, of the non-essential assets that download immediately after app installation.
- [BAManifestURL](bamanifesturl.md): The location URL of the app’s manifest file that contains the names and sizes of assets.
- [BAEssentialMaxInstallSize](baessentialmaxinstallsize.md): The combined, maximum size of the essential assets that the system downloads before it launches your app in bytes.
