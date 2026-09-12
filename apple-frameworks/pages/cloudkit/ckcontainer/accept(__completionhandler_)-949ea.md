> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/accept(_:completionhandler:)-949ea](https://developer.apple.com/documentation/cloudkit/ckcontainer/accept(_:completionhandler:)-949ea)

# accept(\_:completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Accepts the specified share metadata.

## Declaration

```swift
func accept(_ metadata: CKShare.Metadata, completionHandler: @escaping @Sendable (CKShare?, (any Error)?) -> Void)
```

## Parameters

- `metadata`: The metadata of the share to accept.
- `completionHandler`: The handler to execute when the process finishes.

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameters:

- The corresponding share, or `nil` if CloudKit can’t accept the metadata.
- An error if a problem occurs, or `nil` if CloudKit successfully accepts the metadata.

## See Also

### Accessing Container Metadata

- [fetchShareMetadata(with:completionHandler:)](fetchsharemetadata%28with_completionhandler_%29.md): Fetches the share metadata for the specified share URL.
- [CKAccountChanged](../../foundation/nsnotification/name-swift.struct/ckaccountchanged.md): A notification that a container posts when the status of an iCloud account changes.

# acceptShareMetadata:completionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Accepts the specified share metadata.

## Declaration

```objectivec
- (void) acceptShareMetadata:(CKShareMetadata *) metadata completionHandler:(void (^)(CKShare *acceptedShare, NSError *error)) completionHandler;
```

## Parameters

- `metadata`: The metadata of the share to accept.
- `completionHandler`: The handler to execute when the process finishes.

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameters:

- The corresponding share, or `nil` if CloudKit can’t accept the metadata.
- An error if a problem occurs, or `nil` if CloudKit successfully accepts the metadata.

## See Also

### Accessing Container Metadata

- [fetchShareMetadataWithURL:completionHandler:](fetchsharemetadata%28with_completionhandler_%29.md): Fetches the share metadata for the specified share URL.
- [CKAccountChangedNotification](../ckaccountchangednotification.md): A notification that a container posts when the status of an iCloud account changes.
