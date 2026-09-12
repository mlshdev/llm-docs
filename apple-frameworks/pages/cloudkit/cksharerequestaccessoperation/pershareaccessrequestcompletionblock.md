> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksharerequestaccessoperation/pershareaccessrequestcompletionblock](https://developer.apple.com/documentation/cloudkit/cksharerequestaccessoperation/pershareaccessrequestcompletionblock)

# perShareAccessRequestCompletionBlock

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The closure to execute when CloudKit processes a share access request.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^)(NSURL *, NSError *) perShareAccessRequestCompletionBlock;
```

<a id="discussion"></a>

## Discussion

The server does not disclose share existence to protect user privacy.

This property is a closure that returns no value and has the following parameters:

- The URL of the share that was processed.
- An error describing why the access request failed, or `nil` if successful.

The closure executes once for each URL in the [shareURLs](shareurls.md) property. Each time the closure executes, it executes serially with respect to the other closure of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.
