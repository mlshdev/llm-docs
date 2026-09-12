> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.icloud-extended-share-access](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.icloud-extended-share-access)

# com.apple.developer.icloud-extended-share-access

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An array of strings that represent the types of information an app can request about a CloudKit share.

## Details

`com.apple.developer.icloud-extended-share-access`

## Possible Values

- `InProcessShareOwnerParticipantInfo`: Add this value to receive information about the [owner](../../cloudkit/ckshare/owner.md) of a share. If you don’t add the entitlement, or don’t have this value in the array, the fields in the [CKUserIdentity](../../cloudkit/ckuseridentity.md) for the owner’s contact info are all `nil`.
- `InProcessOneTimeLinks`: Add this value to generate single-use links for collaborative sharing using [oneTimeURL(for:)](../../cloudkit/ckshare/onetimeurl%28for_%29.md).
- `InProcessShareAccessRequests`: Add this value to handle access requests for collaborative sharing.

<a id="Discussion"></a>

## Discussion

To add this entitlement, your app needs to use [CloudKit](../../cloudkit.md) to implement a collaborative multi-user sharing feature with a custom sharing UI that displays information about sharing participants.

> **Important**

> You and your app may only use end user information transiently to display it to the share participants. You and your app may not store end user information.

Include the strings in the array that support your app’s features. Don’t include other values in the array. For more information about adding an entitlement to your app, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).
