> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsharemetadataoperation](https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation)

# CKFetchShareMetadataOperation (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An operation that fetches metadata for one or more shares.

## Declaration

```swift
class CKFetchShareMetadataOperation
```

<a id="overview"></a>

## Overview

Use this operation to fetch the metadata for one or more shares. A share’s metadata contains the share and details about the user’s participation. Fetch metadata when you want to manually accept participation in a share using [CKAcceptSharesOperation](ckacceptsharesoperation.md).

For a shared record hierarchy, the fetched metadata includes the record ID of the share’s root record. Set [shouldFetchRootRecord](ckfetchsharemetadataoperation/shouldfetchrootrecord.md) to [true](https://developer.apple.com/documentation/swift/true) to fetch the entire root record. You can further customize this behavior using [rootRecordDesiredKeys](ckfetchsharemetadataoperation/rootrecorddesiredkeys-3xrex.md) to specify which fields you want to include in your fetch. This functionality isn’t applicable for a shared record zone because, unlike a shared record hierarchy, it doesn’t have a nominated root record.

To run the operation, add it to any container’s operation queue. Returned metadata includes the ID of the container that stores the share. The operation executes its callbacks on a private serial queue.

The operation calls [perShareMetadataBlock](ckfetchsharemetadataoperation/persharemetadatablock.md) once for each URL you provide, and CloudKit returns the metadata, or an error if the fetch fails. CloudKit also batches per-URL errors. If the operation completes with errors, it returns a [partialFailure](ckerror/partialfailure.md) error. The error stores individual errors in its [userInfo](../foundation/nserror/userinfo.md) dictionary. Use the [CKPartialErrorsByItemIDKey](ckpartialerrorsbyitemidkey.md) key to extract them.

When all of the following conditions are true, CloudKit returns a [participantMayNeedVerification](ckerror/participantmayneedverification.md) error:

- There are pending participants that don’t have matched iCloud accounts.
- The current user has an active iCloud account and isn’t an existing participant (pending or otherwise).

On receipt of this error, call [open(\_:options:completionHandler:)](../uikit/uiapplication/open%28__options_completionhandler_%29.md) with the share’s URL to allow CloudKit to verify the user.

The following example demonstrates how to create the operation, configure it, and then execute it using the default container’s operation queue:

```swift
func fetchShareMetadata(for shareURLs: [URL],
    completion: @escaping (Result<[URL: CKShare.Metadata], any Error>) -> Void) {

    var cache = [URL: CKShare.Metadata]()

    // Create the fetch operation using the share URLs that
    // the caller provides to the method.
    let operation = CKFetchShareMetadataOperation(shareURLs: shareURLs)

    // To reduce network requests, request that CloudKit
    // includes the root record in the metadata it returns.
    operation.shouldFetchRootRecord = true

    // Cache the metadata that CloudKit returns using the
    // share URL. This implementation ignores per-metadata
    // fetch errors and handles any errors in the completion
    // closure instead.
    operation.perShareMetadataBlock = { url, metadata, _ in
        guard let metadata = metadata else { return }
        cache[url] = metadata
    }

    // If the operation fails, return the error to the caller.
    // Otherwise, return the array of participants.
    operation.fetchShareMetadataCompletionBlock = { error in
        if let error = error {
            completion(.failure(error))
        } else {
            completion(.success(cache))
        }
    }

    // Set an appropriate QoS and add the operation to the
    // container's queue to execute it.
    operation.qualityOfService = .userInitiated
    CKContainer.default().add(operation)
}
```

## Topics

### Creating an Operation

- [init()](ckfetchsharemetadataoperation/init%28%29.md): Creates an empty fetch share metadata operation.
- [init(shareURLs:)](ckfetchsharemetadataoperation/init%28shareurls_%29.md): Creates an operation for fetching the metadata for the specified shares.

### Configuring the Operation

- [shareURLs](ckfetchsharemetadataoperation/shareurls.md): The URLs of the shares to fetch.
- [shouldFetchRootRecord](ckfetchsharemetadataoperation/shouldfetchrootrecord.md): A Boolean value that indicates whether to retrieve the root record.

### Processing the Operation’s Results

- [perShareMetadataBlock](ckfetchsharemetadataoperation/persharemetadatablock.md): Deprecated. The closure to execute as the operation fetches individual shares.
- [fetchShareMetadataCompletionBlock](ckfetchsharemetadataoperation/fetchsharemetadatacompletionblock.md): Deprecated. The closure to execute when the operation finishes.

### Initializers

- [init(share:)](ckfetchsharemetadataoperation/init%28share_%29.md)

### Instance Properties

- [fetchShareMetadataResultBlock](ckfetchsharemetadataoperation/fetchsharemetadataresultblock.md): The closure to execute when the operation finishes.
- [perShareMetadataResultBlock](ckfetchsharemetadataoperation/persharemetadataresultblock.md): The closure to execute as the operation fetches individual shares.
- [rootRecordDesiredKeys](ckfetchsharemetadataoperation/rootrecorddesiredkeys-3xrex.md): The fields to return when fetching the root record.

## Relationships

### Inherits From

- [CKOperation](ckoperation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Share Requests

- [CKShare.Metadata](ckshare/metadata.md): An object that describes a shared record’s metadata.
- [CKAcceptSharesOperation](ckacceptsharesoperation.md): An operation that confirms a user’s participation in a share.

# CKFetchShareMetadataOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An operation that fetches metadata for one or more shares.

## Declaration

```objectivec
@interface CKFetchShareMetadataOperation : CKOperation
```

<a id="overview"></a>

## Overview

Use this operation to fetch the metadata for one or more shares. A share’s metadata contains the share and details about the user’s participation. Fetch metadata when you want to manually accept participation in a share using [CKAcceptSharesOperation](ckacceptsharesoperation.md).

For a shared record hierarchy, the fetched metadata includes the record ID of the share’s root record. Set [shouldFetchRootRecord](ckfetchsharemetadataoperation/shouldfetchrootrecord.md) to [true](https://developer.apple.com/documentation/swift/true) to fetch the entire root record. You can further customize this behavior using [rootRecordDesiredKeys](ckfetchsharemetadataoperation/rootrecorddesiredkeys-3xrex.md) to specify which fields you want to include in your fetch. This functionality isn’t applicable for a shared record zone because, unlike a shared record hierarchy, it doesn’t have a nominated root record.

To run the operation, add it to any container’s operation queue. Returned metadata includes the ID of the container that stores the share. The operation executes its callbacks on a private serial queue.

The operation calls [perShareMetadataBlock](ckfetchsharemetadataoperation/persharemetadatablock.md) once for each URL you provide, and CloudKit returns the metadata, or an error if the fetch fails. CloudKit also batches per-URL errors. If the operation completes with errors, it returns a [partialFailure](ckerror/partialfailure.md) error. The error stores individual errors in its [userInfo](../foundation/nserror/userinfo.md) dictionary. Use the [CKPartialErrorsByItemIDKey](ckpartialerrorsbyitemidkey.md) key to extract them.

When all of the following conditions are true, CloudKit returns a [participantMayNeedVerification](ckerror/participantmayneedverification.md) error:

- There are pending participants that don’t have matched iCloud accounts.
- The current user has an active iCloud account and isn’t an existing participant (pending or otherwise).

On receipt of this error, call [openURL:options:completionHandler:](../uikit/uiapplication/open%28__options_completionhandler_%29.md) with the share’s URL to allow CloudKit to verify the user.

The following example demonstrates how to create the operation, configure it, and then execute it using the default container’s operation queue:

```swift
func fetchShareMetadata(for shareURLs: [URL],
    completion: @escaping (Result<[URL: CKShare.Metadata], any Error>) -> Void) {

    var cache = [URL: CKShare.Metadata]()

    // Create the fetch operation using the share URLs that
    // the caller provides to the method.
    let operation = CKFetchShareMetadataOperation(shareURLs: shareURLs)

    // To reduce network requests, request that CloudKit
    // includes the root record in the metadata it returns.
    operation.shouldFetchRootRecord = true

    // Cache the metadata that CloudKit returns using the
    // share URL. This implementation ignores per-metadata
    // fetch errors and handles any errors in the completion
    // closure instead.
    operation.perShareMetadataBlock = { url, metadata, _ in
        guard let metadata = metadata else { return }
        cache[url] = metadata
    }

    // If the operation fails, return the error to the caller.
    // Otherwise, return the array of participants.
    operation.fetchShareMetadataCompletionBlock = { error in
        if let error = error {
            completion(.failure(error))
        } else {
            completion(.success(cache))
        }
    }

    // Set an appropriate QoS and add the operation to the
    // container's queue to execute it.
    operation.qualityOfService = .userInitiated
    CKContainer.default().add(operation)
}
```

## Topics

### Creating an Operation

- [init](ckfetchsharemetadataoperation/init%28%29.md): Creates an empty fetch share metadata operation.
- [initWithShareURLs:](ckfetchsharemetadataoperation/init%28shareurls_%29.md): Creates an operation for fetching the metadata for the specified shares.

### Configuring the Operation

- [rootRecordDesiredKeys](ckfetchsharemetadataoperation/rootrecorddesiredkeys-7gvr5.md): The fields to return when fetching the root record.
- [shareURLs](ckfetchsharemetadataoperation/shareurls.md): The URLs of the shares to fetch.
- [shouldFetchRootRecord](ckfetchsharemetadataoperation/shouldfetchrootrecord.md): A Boolean value that indicates whether to retrieve the root record.

### Processing the Operation’s Results

- [perShareMetadataBlock](ckfetchsharemetadataoperation/persharemetadatablock.md): Deprecated. The closure to execute as the operation fetches individual shares.
- [fetchShareMetadataCompletionBlock](ckfetchsharemetadataoperation/fetchsharemetadatacompletionblock.md): Deprecated. The closure to execute when the operation finishes.

## Relationships

### Inherits From

- [CKOperation](ckoperation.md)

## See Also

### Share Requests

- [CKShareMetadata](ckshare/metadata.md): An object that describes a shared record’s metadata.
- [CKAcceptSharesOperation](ckacceptsharesoperation.md): An operation that confirms a user’s participation in a share.
