> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsharemetadataoperation/persharemetadataresultblock](https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation/persharemetadataresultblock)

# perShareMetadataResultBlock

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The closure to execute as the operation fetches individual shares.

## Declaration

```swift
var perShareMetadataResultBlock: ((URL, Result<CKShare.Metadata, any Error>) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The share’s URL.
- A [Result](https://developer.apple.com/documentation/swift/result) that contains either:

  - The share metadata, or
  - An error that contains information about a problem encountered fetching the share metadata.

The operation executes this closure once for each URL in the [shareURLs](shareurls.md) property. Each time the closure executes, it executes serially with respect to the other closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.
