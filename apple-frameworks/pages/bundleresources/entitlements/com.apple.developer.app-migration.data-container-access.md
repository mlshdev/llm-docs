> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.app-migration.data-container-access](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.app-migration.data-container-access)

# com.apple.developer.app-migration.data-container-access

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.1+ · iPadOS 26.1+

An entitlement required for app extensions to perform a one-time transfer of on-device data to or from another platform.

## Details

`com.apple.developer.app-migration.data-container-access`

<a id="Discussion"></a>

## Discussion

Use this entitlement with the app extension that implements the [AppMigrationExtension](https://developer.apple.com/documentation/appmigrationkit/appmigrationextension) protocol from the [AppMigrationKit](https://developer.apple.com/documentation/appmigrationkit) framework.

The value of this entitlement is an array of strings. Populate this value with a one-item array containing the bundle identifier of the extension’s containing app. No other values are valid.
