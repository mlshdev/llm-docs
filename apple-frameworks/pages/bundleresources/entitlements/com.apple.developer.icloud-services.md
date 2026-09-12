> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.icloud-services](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.icloud-services)

# iCloud Services Entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The iCloud services used by the app.

## Details

`com.apple.developer.icloud-services`

## Possible Values

- `CloudDocuments`:
- `CloudKit`:
- `CloudKit-Anonymous`:

<a id="Discussion"></a>

## Discussion

To add this entitlement to your app, enable the iCloud capability and the iCloud Documents or CloudKit service in Xcode.

The value `CloudKit-Anonymous` is only available to App Clips, but App Clips can’t use the values `CloudDocuments` or `CloudKit`. For more information on using CloudKit in your App Clip, see [Sharing data between your App Clip and your full app](https://developer.apple.com/documentation/appclip/sharing-data-between-your-app-clip-and-your-full-app).

## See Also

### iCloud

- [com.apple.developer.icloud-container-development-container-identifiers](com.apple.developer.icloud-container-development-container-identifiers.md): The container identifiers for the iCloud development environment.
- [com.apple.developer.icloud-container-environment](com.apple.developer.icloud-container-environment.md): The development or production environment to use for the iCloud containers.
- [iCloud Container Identifiers Entitlement](com.apple.developer.icloud-container-identifiers.md): The container identifiers for the iCloud production environment.
- [iCloud Key-Value Store Entitlement](com.apple.developer.ubiquity-kvstore-identifier.md): The container identifier to use for iCloud key-value storage.
