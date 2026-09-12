> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksharerequestaccessoperation/pershareaccessrequestresultblock](https://developer.apple.com/documentation/cloudkit/cksharerequestaccessoperation/pershareaccessrequestresultblock)

# perShareAccessRequestResultBlock

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The closure to execute when CloudKit processes a share access request.

## Declaration

```swift
var perShareAccessRequestResultBlock: ((URL, Result<Void, any Error>) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- The URL of the processed share.
- A [Result](https://developer.apple.com/documentation/swift/result) that contains either

  - A successful `Result`
  - An error that provides information about a failure processing the share access request.

The closure executes once for each URL in the [shareURLs](shareurls.md) property. Each time the closure executes, it executes serially with respect to the other closure of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.
