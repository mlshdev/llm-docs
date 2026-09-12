> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/bamaxinstallsize](https://developer.apple.com/documentation/bundleresources/information-property-list/bamaxinstallsize)

# BAMaxInstallSize

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

The combined, maximum size, in bytes, of the non-essential assets that download immediately after app installation.

## Details

`BAMaxInstallSize`

<a id="Discussion"></a>

## Discussion

> **Important**

>  The App Store uses this key to show the size of your app on the product page, so provide an accurate value. If you compress the assets, use the uncompressed size of the files for this value. Don’t overstate the disk space you require.

This key is required to use Background Assets.

## See Also

### Background downloads

- [BAUsesAppleHosting](bausesapplehosting.md): A Boolean value that indicates whether you use Apple’s service to host your asset packs.
- [BAHasManagedAssetPacks](bahasmanagedassetpacks.md): A Boolean value that indicates whether you let the system automatically manage your asset packs.
- [BAAppGroupID](baappgroupid.md): The app group identifier that you share between your app and the extension that uses asset packs.
- [BAInitialDownloadRestrictions](bainitialdownloadrestrictions.md): The restrictions that apply to the set of assets that download immediately after app installation.
- [BAManifestURL](bamanifesturl.md): The location URL of the app’s manifest file that contains the names and sizes of assets.
- [BAEssentialMaxInstallSize](baessentialmaxinstallsize.md): The combined, maximum size of the essential assets that the system downloads before it launches your app in bytes.
