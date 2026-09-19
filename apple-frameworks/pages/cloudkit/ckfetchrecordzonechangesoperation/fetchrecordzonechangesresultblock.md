> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/fetchrecordzonechangesresultblock

# fetchRecordZoneChangesResultBlock

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The closure to execute when the operation finishes.

## Declaration

```swift
var fetchRecordZoneChangesResultBlock: ((Result<Void, any Error>) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure has no return value and takes the following parameter:

- A [Result](https://developer.apple.com/documentation/swift/result) that contains either:

  - A successful `Result`, or
  - An error that contains information about a problem encountered retrieving the record zone changes.

This closure executes only once, and represents your final opportunity to process the results. The closure executes serially with respect to the other closures of the operation.

Set this property before you execute the operation or submit it to a queue.
