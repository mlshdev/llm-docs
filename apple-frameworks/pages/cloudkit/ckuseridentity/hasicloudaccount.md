> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckuseridentity/hasicloudaccount](https://developer.apple.com/documentation/cloudkit/ckuseridentity/hasicloudaccount)

# hasiCloudAccount (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the user has an iCloud account.

## Declaration

```swift
var hasiCloudAccount: Bool { get }
```

<a id="discussion"></a>

## Discussion

`true` if the user identity has an iCloud account; otherwise, `false`.

## See Also

### Accessing iCloud Information

- [lookupInfo](lookupinfo-swift.property.md): The lookup info for retrieving the user identity.
- [CKUserIdentity.LookupInfo](lookupinfo-swift.class.md): The criteria to use when searching for discoverable iCloud users.

# hasiCloudAccount (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the user has an iCloud account.

## Declaration

```objectivec
@property (assign, readonly) BOOL hasiCloudAccount;
```

<a id="discussion"></a>

## Discussion

`true` if the user identity has an iCloud account; otherwise, `false`.

## See Also

### Accessing iCloud Information

- [lookupInfo](lookupinfo-swift.property.md): The lookup info for retrieving the user identity.
- [CKUserIdentityLookupInfo](lookupinfo-swift.class.md): The criteria to use when searching for discoverable iCloud users.
