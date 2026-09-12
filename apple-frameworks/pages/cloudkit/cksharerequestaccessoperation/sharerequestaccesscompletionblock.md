> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksharerequestaccessoperation/sharerequestaccesscompletionblock](https://developer.apple.com/documentation/cloudkit/cksharerequestaccessoperation/sharerequestaccesscompletionblock)

# shareRequestAccessCompletionBlock

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The closure to execute after CloudKit processes all share access requests.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^)(NSError *) shareRequestAccessCompletionBlock;
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameter:

- An error that contains information about a problem, or `nil` if the system successfully processes the share access requests.

The closure executes only once, and represents your final opportunity to process the operation’s results. It executes after all share access request completion closures finish. The closure executes serially with respect to the other closures of the operation.

The closure reports an error of type [CKErrorPartialFailure](../ckerror/code/partialfailure.md) when it processes only some of the share access requests successfully. The [userInfo](../../foundation/nserror/userinfo.md) dictionary of the error contains a [CKPartialErrorsByItemIDKey](../ckpartialerrorsbyitemidkey.md) key that has a dictionary as its value. The keys of the dictionary are the URLs of the shares whose access requests can’t be processed by the operation. The corresponding values are errors that contain information about the failures.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.
