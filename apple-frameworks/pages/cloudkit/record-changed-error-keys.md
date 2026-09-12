> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/record-changed-error-keys](https://developer.apple.com/documentation/cloudkit/record-changed-error-keys)

# Record Changed Error Keys (Swift)

**Framework:** CloudKit  
**Kind:** API Collection

Constants that represent conflicting records in a save operation.

<a id="overview"></a>

## Overview

If the version of a record on the server is newer than the version you try to save, the server returns a [CKError.Code.serverRecordChanged](ckerror/code/serverrecordchanged.md) error. The error’s [userInfo](../foundation/nserror/userinfo.md) dictionary contains the different versions of the conflicting records. Use these keys to retrieve the records, and to perform any resolution logic necessary to resolve the conflict.

## Topics

### Record Changed Error Keys

- [CKRecordChangedErrorAncestorRecordKey](ckrecordchangederrorancestorrecordkey.md): The key to retrieve the original version of the record.
- [CKRecordChangedErrorClientRecordKey](ckrecordchangederrorclientrecordkey.md): The key to retrieve the local version of the record.
- [CKRecordChangedErrorServerRecordKey](ckrecordchangederrorserverrecordkey.md): The key to retrieve the server’s version of the record.

## See Also

### Errors

- [CKErrorDomain](ckerrordomain.md): The error domain for CloudKit errors.
- [CKError](ckerror.md): A type that describes a CloudKit error.
- [CKError.Code](ckerror/code.md): The error codes that CloudKit returns.
- [CKErrorRetryAfterKey](ckerrorretryafterkey.md): The key to retrieve the number of seconds to wait before you retry a request.
- [CKErrorUserDidResetEncryptedDataKey](ckerroruserdidresetencrypteddatakey.md): The key that determines whether CloudKit deletes a record zone because of a user action.
- [CKPartialErrorsByItemIDKey](ckpartialerrorsbyitemidkey.md): The key to retrieve partial errors.

# Record Changed Error Keys (Objective-C)

**Framework:** CloudKit  
**Kind:** API Collection

Constants that represent conflicting records in a save operation.

<a id="overview"></a>

## Overview

If the version of a record on the server is newer than the version you try to save, the server returns a [CKErrorServerRecordChanged](ckerror/code/serverrecordchanged.md) error. The error’s [userInfo](../foundation/nserror/userinfo.md) dictionary contains the different versions of the conflicting records. Use these keys to retrieve the records, and to perform any resolution logic necessary to resolve the conflict.

## Topics

### Record Changed Error Keys

- [CKRecordChangedErrorAncestorRecordKey](ckrecordchangederrorancestorrecordkey.md): The key to retrieve the original version of the record.
- [CKRecordChangedErrorClientRecordKey](ckrecordchangederrorclientrecordkey.md): The key to retrieve the local version of the record.
- [CKRecordChangedErrorServerRecordKey](ckrecordchangederrorserverrecordkey.md): The key to retrieve the server’s version of the record.

## See Also

### Errors

- [CKErrorDomain](ckerrordomain.md): The error domain for CloudKit errors.
- [CKErrorCode](ckerror/code.md): The error codes that CloudKit returns.
- [CKErrorRetryAfterKey](ckerrorretryafterkey.md): The key to retrieve the number of seconds to wait before you retry a request.
- [CKErrorUserDidResetEncryptedDataKey](ckerroruserdidresetencrypteddatakey.md): The key that determines whether CloudKit deletes a record zone because of a user action.
- [CKPartialErrorsByItemIDKey](ckpartialerrorsbyitemidkey.md): The key to retrieve partial errors.
