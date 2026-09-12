> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckacceptsharesoperation/persharecompletionblock](https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation/persharecompletionblock)

# perShareCompletionBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.12+ (deprecated in 12.0) · tvOS 10.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The block to execute as CloudKit processes individual shares.

> Use perShareResultBlock instead

## Declaration

```swift
var perShareCompletionBlock: ((CKShare.Metadata, CKShare?, (any Error)?) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The share metadata to process.
- The share, or `nil` if CloudKit can’t process the share metadata.
- If CloudKit can’t process the share metadata, this parameter provides information about the failure; otherwise, it’s `nil`.

The operation executes this closure once for each element in the [shareMetadatas](sharemetadatas.md) property. Each time the closure executes, it executes serially with respect to the other closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.

## See Also

### Processing the Share Accept Results

- [shareMetadatas](sharemetadatas.md): The share metadatas to process.
- [acceptSharesCompletionBlock](acceptsharescompletionblock.md): Deprecated. The closure to execute when the operation finishes.

# perShareCompletionBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The block to execute as CloudKit processes individual shares.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^perShareCompletionBlock)(CKShareMetadata *shareMetadata, CKShare *acceptedShare, NSError *error);
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The share metadata to process.
- The share, or `nil` if CloudKit can’t process the share metadata.
- If CloudKit can’t process the share metadata, this parameter provides information about the failure; otherwise, it’s `nil`.

The operation executes this closure once for each element in the [shareMetadatas](sharemetadatas.md) property. Each time the closure executes, it executes serially with respect to the other closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.

## See Also

### Processing the Share Accept Results

- [shareMetadatas](sharemetadatas.md): The share metadatas to process.
- [acceptSharesCompletionBlock](acceptsharescompletionblock.md): Deprecated. The closure to execute when the operation finishes.
