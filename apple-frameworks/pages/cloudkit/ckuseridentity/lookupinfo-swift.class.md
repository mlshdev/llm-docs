> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckuseridentity/lookupinfo-swift.class](https://developer.apple.com/documentation/cloudkit/ckuseridentity/lookupinfo-swift.class)

# CKUserIdentity.LookupInfo (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The criteria to use when searching for discoverable iCloud users.

## Declaration

```swift
class LookupInfo
```

<a id="overview"></a>

## Overview

Use this object when you want to discover the identities of your app’s users with [CKDiscoverUserIdentitiesOperation](../ckdiscoveruseridentitiesoperation.md), or to create a share’s participants with [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md).

You create individual instances by providing an email address, phone number, or user record ID. Alternatively, create an array of objects all at once by using one of the convenience methods, such as [lookupInfos(withEmails:)](lookupinfo-swift.class/lookupinfos%28withemails_%29.md).

## Topics

### Creating a Lookup Info

- [init(emailAddress:)](lookupinfo-swift.class/init%28emailaddress_%29.md): Creates a lookup info for the specified email address.
- [init(phoneNumber:)](lookupinfo-swift.class/init%28phonenumber_%29.md): Creates a lookup info for the specified phone number.
- [init(userRecordID:)](lookupinfo-swift.class/init%28userrecordid_%29.md): Creates a lookup info for the specified user record ID.

### Creating Multiple Lookup Infos

- [lookupInfos(withEmails:)](lookupinfo-swift.class/lookupinfos%28withemails_%29.md): Returns an array of lookup infos for the specified email addresses.
- [lookupInfos(withPhoneNumbers:)](lookupinfo-swift.class/lookupinfos%28withphonenumbers_%29.md): Returns an array of lookup infos for the specified phone numbers.
- [lookupInfos(with:)](lookupinfo-swift.class/lookupinfos%28with_%29.md): Returns an array of lookup infos for the specified user record IDs.

### Accessing the Criteria

- [emailAddress](lookupinfo-swift.class/emailaddress.md): The user’s email address.
- [phoneNumber](lookupinfo-swift.class/phonenumber.md): The user’s phone number.
- [userRecordID](lookupinfo-swift.class/userrecordid.md): The ID of the user record.

### Initializers

- [init(coder:)](lookupinfo-swift.class/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### User discovery

- [CKUserIdentity](../ckuseridentity.md): The identity of a user.

# CKUserIdentityLookupInfo (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The criteria to use when searching for discoverable iCloud users.

## Declaration

```objectivec
@interface CKUserIdentityLookupInfo : NSObject
```

<a id="overview"></a>

## Overview

Use this object when you want to discover the identities of your app’s users with [CKDiscoverUserIdentitiesOperation](../ckdiscoveruseridentitiesoperation.md), or to create a share’s participants with [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md).

You create individual instances by providing an email address, phone number, or user record ID. Alternatively, create an array of objects all at once by using one of the convenience methods, such as [lookupInfosWithEmails:](lookupinfo-swift.class/lookupinfos%28withemails_%29.md).

## Topics

### Creating a Lookup Info

- [initWithEmailAddress:](lookupinfo-swift.class/init%28emailaddress_%29.md): Creates a lookup info for the specified email address.
- [initWithPhoneNumber:](lookupinfo-swift.class/init%28phonenumber_%29.md): Creates a lookup info for the specified phone number.
- [initWithUserRecordID:](lookupinfo-swift.class/init%28userrecordid_%29.md): Creates a lookup info for the specified user record ID.

### Creating Multiple Lookup Infos

- [lookupInfosWithEmails:](lookupinfo-swift.class/lookupinfos%28withemails_%29.md): Returns an array of lookup infos for the specified email addresses.
- [lookupInfosWithPhoneNumbers:](lookupinfo-swift.class/lookupinfos%28withphonenumbers_%29.md): Returns an array of lookup infos for the specified phone numbers.
- [lookupInfosWithRecordIDs:](lookupinfo-swift.class/lookupinfos%28with_%29.md): Returns an array of lookup infos for the specified user record IDs.

### Accessing the Criteria

- [emailAddress](lookupinfo-swift.class/emailaddress.md): The user’s email address.
- [phoneNumber](lookupinfo-swift.class/phonenumber.md): The user’s phone number.
- [userRecordID](lookupinfo-swift.class/userrecordid.md): The ID of the user record.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### User discovery

- [CKUserIdentity](../ckuseridentity.md): The identity of a user.
