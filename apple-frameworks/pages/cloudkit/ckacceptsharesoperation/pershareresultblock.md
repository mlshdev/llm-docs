> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckacceptsharesoperation/pershareresultblock](https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation/pershareresultblock)

# perShareResultBlock

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The block to execute as CloudKit processes individual shares.

## Declaration

```swift
var perShareResultBlock: ((CKShare.Metadata, Result<CKShare, any Error>) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The share metadata to process.
- A [Result](https://developer.apple.com/documentation/swift/result) that contains either:

  - The accepted share
  - An error that contains information about a problem encountered processing the share metadata.

The operation executes this closure once for each element in the [shareMetadatas](sharemetadatas.md) property. Each time the closure executes, it executes serially with respect to the other closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.
