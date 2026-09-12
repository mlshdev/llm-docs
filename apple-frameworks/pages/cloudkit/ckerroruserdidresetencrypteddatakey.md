> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckerroruserdidresetencrypteddatakey](https://developer.apple.com/documentation/cloudkit/ckerroruserdidresetencrypteddatakey)

# CKErrorUserDidResetEncryptedDataKey (Swift)

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The key that determines whether CloudKit deletes a record zone because of a user action.

## Declaration

```swift
let CKErrorUserDidResetEncryptedDataKey: String
```

## Mentioned In

- [Encrypting User Data](encrypting-user-data.md)

<a id="discussion"></a>

## Discussion

An [NSNumber](../foundation/nsnumber.md) that represents a Boolean value you use to determine whether a user action causes CloudKit to delete a record zone. CloudKit adds this key to the error’s `userInfo` dictionary when the error code is [CKError.Code.zoneNotFound](ckerror/code/zonenotfound.md).

## See Also

### Errors

- [CKErrorDomain](ckerrordomain.md): The error domain for CloudKit errors.
- [CKError](ckerror.md): A type that describes a CloudKit error.
- [CKError.Code](ckerror/code.md): The error codes that CloudKit returns.
- [CKErrorRetryAfterKey](ckerrorretryafterkey.md): The key to retrieve the number of seconds to wait before you retry a request.
- [CKPartialErrorsByItemIDKey](ckpartialerrorsbyitemidkey.md): The key to retrieve partial errors.
- [Record Changed Error Keys](record-changed-error-keys.md): Constants that represent conflicting records in a save operation.

# CKErrorUserDidResetEncryptedDataKey (Objective-C)

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The key that determines whether CloudKit deletes a record zone because of a user action.

## Declaration

```objectivec
extern NSString * const CKErrorUserDidResetEncryptedDataKey;
```

## Mentioned In

- [Encrypting User Data](encrypting-user-data.md)

<a id="discussion"></a>

## Discussion

An [NSNumber](../foundation/nsnumber.md) that represents a Boolean value you use to determine whether a user action causes CloudKit to delete a record zone. CloudKit adds this key to the error’s `userInfo` dictionary when the error code is [CKErrorZoneNotFound](ckerror/code/zonenotfound.md).

## See Also

### Errors

- [CKErrorDomain](ckerrordomain.md): The error domain for CloudKit errors.
- [CKErrorCode](ckerror/code.md): The error codes that CloudKit returns.
- [CKErrorRetryAfterKey](ckerrorretryafterkey.md): The key to retrieve the number of seconds to wait before you retry a request.
- [CKPartialErrorsByItemIDKey](ckpartialerrorsbyitemidkey.md): The key to retrieve partial errors.
- [Record Changed Error Keys](record-changed-error-keys.md): Constants that represent conflicting records in a save operation.
