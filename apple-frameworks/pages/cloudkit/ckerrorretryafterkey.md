> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckerrorretryafterkey](https://developer.apple.com/documentation/cloudkit/ckerrorretryafterkey)

# CKErrorRetryAfterKey (Swift)

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The key to retrieve the number of seconds to wait before you retry a request.

## Declaration

```swift
let CKErrorRetryAfterKey: String
```

<a id="discussion"></a>

## Discussion

An [NSNumber](../foundation/nsnumber.md) that contains the number of seconds until you can retry a request. CloudKit adds this key to the error’s [userInfo](../foundation/nserror/userinfo.md) dictionary when the error code is [CKError.Code.serviceUnavailable](ckerror/code/serviceunavailable.md) or [CKError.Code.requestRateLimited](ckerror/code/requestratelimited.md).

## See Also

### Errors

- [CKErrorDomain](ckerrordomain.md): The error domain for CloudKit errors.
- [CKError](ckerror.md): A type that describes a CloudKit error.
- [CKError.Code](ckerror/code.md): The error codes that CloudKit returns.
- [CKErrorUserDidResetEncryptedDataKey](ckerroruserdidresetencrypteddatakey.md): The key that determines whether CloudKit deletes a record zone because of a user action.
- [CKPartialErrorsByItemIDKey](ckpartialerrorsbyitemidkey.md): The key to retrieve partial errors.
- [Record Changed Error Keys](record-changed-error-keys.md): Constants that represent conflicting records in a save operation.

# CKErrorRetryAfterKey (Objective-C)

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The key to retrieve the number of seconds to wait before you retry a request.

## Declaration

```objectivec
extern NSString * const CKErrorRetryAfterKey;
```

<a id="discussion"></a>

## Discussion

An [NSNumber](../foundation/nsnumber.md) that contains the number of seconds until you can retry a request. CloudKit adds this key to the error’s [userInfo](../foundation/nserror/userinfo.md) dictionary when the error code is [CKErrorServiceUnavailable](ckerror/code/serviceunavailable.md) or [CKErrorRequestRateLimited](ckerror/code/requestratelimited.md).

## See Also

### Errors

- [CKErrorDomain](ckerrordomain.md): The error domain for CloudKit errors.
- [CKErrorCode](ckerror/code.md): The error codes that CloudKit returns.
- [CKErrorUserDidResetEncryptedDataKey](ckerroruserdidresetencrypteddatakey.md): The key that determines whether CloudKit deletes a record zone because of a user action.
- [CKPartialErrorsByItemIDKey](ckpartialerrorsbyitemidkey.md): The key to retrieve partial errors.
- [Record Changed Error Keys](record-changed-error-keys.md): Constants that represent conflicting records in a save operation.
