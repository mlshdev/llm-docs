> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/fetchsharemetadata(with:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/fetchsharemetadata(with:completionhandler:))

# fetchShareMetadata(with:completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Fetches the share metadata for the specified share URL.

## Declaration

```swift
func fetchShareMetadata(with url: URL, completionHandler: @escaping @Sendable (CKShare.Metadata?, (any Error)?) -> Void)
```

## Parameters

- `url`: The share URL that CloudKit uses to locate the metadata.
- `completionHandler`: The handler to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameters:

- The share metadata, or `nil` if CloudKit can’t find the metadata.
- An error if a problem occurs, or `nil` if CloudKit successfully retrieves the metadata.

## See Also

### Accessing Container Metadata

- [accept(\_:completionHandler:)](accept%28__completionhandler_%29-949ea.md): Accepts the specified share metadata.
- [CKAccountChanged](../../foundation/nsnotification/name-swift.struct/ckaccountchanged.md): A notification that a container posts when the status of an iCloud account changes.

# fetchShareMetadataWithURL:completionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Fetches the share metadata for the specified share URL.

## Declaration

```objectivec
- (void) fetchShareMetadataWithURL:(NSURL *) url completionHandler:(void (^)(CKShareMetadata *metadata, NSError *error)) completionHandler;
```

## Parameters

- `url`: The share URL that CloudKit uses to locate the metadata.
- `completionHandler`: The handler to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameters:

- The share metadata, or `nil` if CloudKit can’t find the metadata.
- An error if a problem occurs, or `nil` if CloudKit successfully retrieves the metadata.

## See Also

### Accessing Container Metadata

- [acceptShareMetadata:completionHandler:](accept%28__completionhandler_%29-949ea.md): Accepts the specified share metadata.
- [CKAccountChangedNotification](../ckaccountchangednotification.md): A notification that a container posts when the status of an iCloud account changes.
