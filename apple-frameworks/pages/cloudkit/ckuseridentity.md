> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckuseridentity](https://developer.apple.com/documentation/cloudkit/ckuseridentity)

# CKUserIdentity (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The identity of a user.

## Declaration

```swift
class CKUserIdentity
```

<a id="overview"></a>

## Overview

A user identity provides identifiable data about an iCloud user, including their name, user record ID, and an email address or phone number. CloudKit retrieves this information from the user’s iCloud account. A user must give their consent to be discoverable before CloudKit can provide this data to your app. For more information, see [requestApplicationPermission(\_:completionHandler:)](ckcontainer/requestapplicationpermission%28__completionhandler_%29.md).

You don’t create instances of this class. Instead, CloudKit provides them in certain contexts. A share’s owner has a user identity, as does each of its participants. When creating participants, CloudKit tries to find iCloud accounts it can use to populate their identities. If CloudKit doesn’t find an account, it sets the identity’s [hasiCloudAccount](ckuseridentity/hasicloudaccount.md) property to [false](https://developer.apple.com/documentation/swift/false).

You can also discover the identities of your app’s users by executing one of the user discovery operations: [CKDiscoverAllUserIdentitiesOperation](ckdiscoveralluseridentitiesoperation.md) and [CKDiscoverUserIdentitiesOperation](ckdiscoveruseridentitiesoperation.md). Identities that CloudKit discovers using [CKDiscoverAllUserIdentitiesOperation](ckdiscoveralluseridentitiesoperation.md) correspond to entries in the device’s Contacts database. These identities contain the identifiers of their Contact records, which you can use to fetch those records from the Contacts database. For more information, see [contactIdentifiers](ckuseridentity/contactidentifiers.md).

## Topics

### Accessing iCloud Information

- [hasiCloudAccount](ckuseridentity/hasicloudaccount.md): A Boolean value that indicates whether the user has an iCloud account.
- [lookupInfo](ckuseridentity/lookupinfo-swift.property.md): The lookup info for retrieving the user identity.
- [CKUserIdentity.LookupInfo](ckuseridentity/lookupinfo-swift.class.md): The criteria to use when searching for discoverable iCloud users.

### Accessing User Information

- [userRecordID](ckuseridentity/userrecordid.md): The user record ID for the corresponding user record.
- [contactIdentifiers](ckuseridentity/contactidentifiers.md): Deprecated. Identifiers that match contacts in the local Contacts database.
- [nameComponents](ckuseridentity/namecomponents.md): The user’s name.

### Initializers

- [init(coder:)](ckuseridentity/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### User discovery

- [CKUserIdentity.LookupInfo](ckuseridentity/lookupinfo-swift.class.md): The criteria to use when searching for discoverable iCloud users.

# CKUserIdentity (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The identity of a user.

## Declaration

```objectivec
@interface CKUserIdentity : NSObject
```

<a id="overview"></a>

## Overview

A user identity provides identifiable data about an iCloud user, including their name, user record ID, and an email address or phone number. CloudKit retrieves this information from the user’s iCloud account. A user must give their consent to be discoverable before CloudKit can provide this data to your app. For more information, see [requestApplicationPermission:completionHandler:](ckcontainer/requestapplicationpermission%28__completionhandler_%29.md).

You don’t create instances of this class. Instead, CloudKit provides them in certain contexts. A share’s owner has a user identity, as does each of its participants. When creating participants, CloudKit tries to find iCloud accounts it can use to populate their identities. If CloudKit doesn’t find an account, it sets the identity’s [hasiCloudAccount](ckuseridentity/hasicloudaccount.md) property to [false](https://developer.apple.com/documentation/swift/false).

You can also discover the identities of your app’s users by executing one of the user discovery operations: [CKDiscoverAllUserIdentitiesOperation](ckdiscoveralluseridentitiesoperation.md) and [CKDiscoverUserIdentitiesOperation](ckdiscoveruseridentitiesoperation.md). Identities that CloudKit discovers using [CKDiscoverAllUserIdentitiesOperation](ckdiscoveralluseridentitiesoperation.md) correspond to entries in the device’s Contacts database. These identities contain the identifiers of their Contact records, which you can use to fetch those records from the Contacts database. For more information, see [contactIdentifiers](ckuseridentity/contactidentifiers.md).

## Topics

### Accessing iCloud Information

- [hasiCloudAccount](ckuseridentity/hasicloudaccount.md): A Boolean value that indicates whether the user has an iCloud account.
- [lookupInfo](ckuseridentity/lookupinfo-swift.property.md): The lookup info for retrieving the user identity.
- [CKUserIdentityLookupInfo](ckuseridentity/lookupinfo-swift.class.md): The criteria to use when searching for discoverable iCloud users.

### Accessing User Information

- [userRecordID](ckuseridentity/userrecordid.md): The user record ID for the corresponding user record.
- [contactIdentifiers](ckuseridentity/contactidentifiers.md): Deprecated. Identifiers that match contacts in the local Contacts database.
- [nameComponents](ckuseridentity/namecomponents.md): The user’s name.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### User discovery

- [CKUserIdentityLookupInfo](ckuseridentity/lookupinfo-swift.class.md): The criteria to use when searching for discoverable iCloud users.
