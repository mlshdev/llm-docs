> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckacceptsharesoperation/acceptsharesresultblock](https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation/acceptsharesresultblock)

# acceptSharesResultBlock

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The closure to execute when the operation finishes.

## Declaration

```swift
var acceptSharesResultBlock: ((Result<Void, any Error>) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameter:

- A [Result](https://developer.apple.com/documentation/swift/result) that contains either:

  - A successful `Result`, or
  - An error that contains information about a problem encountered processing the shares.

This closure executes only once. The closure executes serially with respect to the other closures of the operation.

Set this property’s value before you execute the operation or submit it to a queue.
