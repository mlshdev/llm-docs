> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckpartialerrorsbyitemidkey](https://developer.apple.com/documentation/cloudkit/ckpartialerrorsbyitemidkey)

# CKPartialErrorsByItemIDKey (Swift)

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The key to retrieve partial errors.

## Declaration

```swift
let CKPartialErrorsByItemIDKey: String
```

<a id="discussion"></a>

## Discussion

The value of this key is a dictionary that maps an item ID to an error. The type of each ID depends on where the error occurs. For example, if you receive a partial error when modifying a record, the ID is an instance of [CKRecord.ID](ckrecord/id.md) that corresponds to the record that CloudKit can’t modify.

## See Also

### Errors

- [CKErrorDomain](ckerrordomain.md): The error domain for CloudKit errors.
- [CKError](ckerror.md): A type that describes a CloudKit error.
- [CKError.Code](ckerror/code.md): The error codes that CloudKit returns.
- [CKErrorRetryAfterKey](ckerrorretryafterkey.md): The key to retrieve the number of seconds to wait before you retry a request.
- [CKErrorUserDidResetEncryptedDataKey](ckerroruserdidresetencrypteddatakey.md): The key that determines whether CloudKit deletes a record zone because of a user action.
- [Record Changed Error Keys](record-changed-error-keys.md): Constants that represent conflicting records in a save operation.

# CKPartialErrorsByItemIDKey (Objective-C)

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The key to retrieve partial errors.

## Declaration

```objectivec
extern NSString * const CKPartialErrorsByItemIDKey;
```

<a id="discussion"></a>

## Discussion

The value of this key is a dictionary that maps an item ID to an error. The type of each ID depends on where the error occurs. For example, if you receive a partial error when modifying a record, the ID is an instance of [CKRecordID](ckrecord/id.md) that corresponds to the record that CloudKit can’t modify.

## See Also

### Errors

- [CKErrorDomain](ckerrordomain.md): The error domain for CloudKit errors.
- [CKErrorCode](ckerror/code.md): The error codes that CloudKit returns.
- [CKErrorRetryAfterKey](ckerrorretryafterkey.md): The key to retrieve the number of seconds to wait before you retry a request.
- [CKErrorUserDidResetEncryptedDataKey](ckerroruserdidresetencrypteddatakey.md): The key that determines whether CloudKit deletes a record zone because of a user action.
- [Record Changed Error Keys](record-changed-error-keys.md): Constants that represent conflicting records in a save operation.
