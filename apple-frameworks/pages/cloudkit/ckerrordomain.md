> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckerrordomain](https://developer.apple.com/documentation/cloudkit/ckerrordomain)

# CKErrorDomain (Swift)

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The error domain for CloudKit errors.

## Declaration

```swift
let CKErrorDomain: String
```

## See Also

### Errors

- [CKError](ckerror.md): A type that describes a CloudKit error.
- [CKError.Code](ckerror/code.md): The error codes that CloudKit returns.
- [CKErrorRetryAfterKey](ckerrorretryafterkey.md): The key to retrieve the number of seconds to wait before you retry a request.
- [CKErrorUserDidResetEncryptedDataKey](ckerroruserdidresetencrypteddatakey.md): The key that determines whether CloudKit deletes a record zone because of a user action.
- [CKPartialErrorsByItemIDKey](ckpartialerrorsbyitemidkey.md): The key to retrieve partial errors.
- [Record Changed Error Keys](record-changed-error-keys.md): Constants that represent conflicting records in a save operation.

# CKErrorDomain (Objective-C)

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The error domain for CloudKit errors.

## Declaration

```objectivec
extern NSString * const CKErrorDomain;
```

## See Also

### Errors

- [CKErrorCode](ckerror/code.md): The error codes that CloudKit returns.
- [CKErrorRetryAfterKey](ckerrorretryafterkey.md): The key to retrieve the number of seconds to wait before you retry a request.
- [CKErrorUserDidResetEncryptedDataKey](ckerroruserdidresetencrypteddatakey.md): The key that determines whether CloudKit deletes a record zone because of a user action.
- [CKPartialErrorsByItemIDKey](ckpartialerrorsbyitemidkey.md): The key to retrieve partial errors.
- [Record Changed Error Keys](record-changed-error-keys.md): Constants that represent conflicting records in a save operation.
