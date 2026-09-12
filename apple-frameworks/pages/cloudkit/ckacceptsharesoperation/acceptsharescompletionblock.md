> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckacceptsharesoperation/acceptsharescompletionblock](https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation/acceptsharescompletionblock)

# acceptSharesCompletionBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.12+ (deprecated in 12.0) · tvOS 10.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The closure to execute when the operation finishes.

> Use acceptSharesResultBlock instead

## Declaration

```swift
var acceptSharesCompletionBlock: (((any Error)?) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameter:

- An error that contains information about a problem, or `nil` if CloudKit successfully processes the shares.

The operation executes this closure only once. The closure executes on a background queue, so any tasks that require access to the main queue must dispatch accordingly.

The closure reports an error of type [CKError.Code.partialFailure](../ckerror/code/partialfailure.md) when it can’t process some of the shares. The `userInfo` dictionary of the error contains a [CKPartialErrorsByItemIDKey](../ckpartialerrorsbyitemidkey.md) key that has a dictionary as its value. The keys of the dictionary are share URLs that CloudKit can’t process, and the corresponding values are errors that contain information about the failures.

Set this property’s value before you execute the operation or submit it to a queue.

## See Also

### Processing the Share Accept Results

- [shareMetadatas](sharemetadatas.md): The share metadatas to process.
- [perShareCompletionBlock](persharecompletionblock.md): Deprecated. The block to execute as CloudKit processes individual shares.

# acceptSharesCompletionBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The closure to execute when the operation finishes.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^acceptSharesCompletionBlock)(NSError *operationError);
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameter:

- An error that contains information about a problem, or `nil` if CloudKit successfully processes the shares.

The operation executes this closure only once. The closure executes on a background queue, so any tasks that require access to the main queue must dispatch accordingly.

The closure reports an error of type [CKErrorPartialFailure](../ckerror/code/partialfailure.md) when it can’t process some of the shares. The `userInfo` dictionary of the error contains a [CKPartialErrorsByItemIDKey](../ckpartialerrorsbyitemidkey.md) key that has a dictionary as its value. The keys of the dictionary are share URLs that CloudKit can’t process, and the corresponding values are errors that contain information about the failures.

Set this property’s value before you execute the operation or submit it to a queue.

## See Also

### Processing the Share Accept Results

- [shareMetadatas](sharemetadatas.md): The share metadatas to process.
- [perShareCompletionBlock](persharecompletionblock.md): Deprecated. The block to execute as CloudKit processes individual shares.
