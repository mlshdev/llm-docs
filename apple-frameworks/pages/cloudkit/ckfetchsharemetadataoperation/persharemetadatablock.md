> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsharemetadataoperation/persharemetadatablock](https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation/persharemetadatablock)

# perShareMetadataBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.12+ (deprecated in 12.0) · tvOS 10.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The closure to execute as the operation fetches individual shares.

> Use perShareMetadataResultBlock instead

## Declaration

```swift
var perShareMetadataBlock: ((URL, CKShare.Metadata?, (any Error)?) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The share’s URL.
- The share metadata, or `nil` if CloudKit can’t fetch the metadata.
- If CloudKit can’t fetch the share metadata, this parameter provides information about the failure; otherwise, it’s `nil`.

The operation executes this closure once for each URL in the [shareURLs](shareurls.md) property. Each time the closure executes, it executes serially with respect to the other closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.

## See Also

### Processing the Operation’s Results

- [fetchShareMetadataCompletionBlock](fetchsharemetadatacompletionblock.md): Deprecated. The closure to execute when the operation finishes.

# perShareMetadataBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The closure to execute as the operation fetches individual shares.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^perShareMetadataBlock)(NSURL *shareURL, CKShareMetadata *shareMetadata, NSError *error);
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The share’s URL.
- The share metadata, or `nil` if CloudKit can’t fetch the metadata.
- If CloudKit can’t fetch the share metadata, this parameter provides information about the failure; otherwise, it’s `nil`.

The operation executes this closure once for each URL in the [shareURLs](shareurls.md) property. Each time the closure executes, it executes serially with respect to the other closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.

## See Also

### Processing the Operation’s Results

- [fetchShareMetadataCompletionBlock](fetchsharemetadatacompletionblock.md): Deprecated. The closure to execute when the operation finishes.
