> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevice/wait(forattributevalues:timeout:queue:completion:)](https://developer.apple.com/documentation/matter/mtrdevice/wait(forattributevalues:timeout:queue:completion:))

# wait(forAttributeValues:timeout:queue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.3+ · iPadOS 18.3+ · Mac Catalyst 18.3+ · macOS 15.3+ · tvOS 18.3+ · visionOS 2.3+ · watchOS 11.3+

Sets up the provided completion to be called when any of the following happens:

## Declaration

```swift
func wait(forAttributeValues values: [MTRAttributePath : [String : Any]], timeout: TimeInterval, queue: dispatch_queue_t, completion: @escaping ((any Error)?) -> Void) -> MTRAttributeValueWaiter
```

<a id="discussion"></a>

## Discussion

1. A set of attributes reaches certain values: completion called with nil.
2. The provided timeout expires: completion called with MTRErrorCodeTimeout error.
3. The wait is canceled: completion called with MTRErrorCodeCancelled error.

If the MTRAttributeValueWaiter is destroyed before the completion is called, that is treated the same as canceling the waiter.

The attributes and values to wait for are represented as a dictionary which has the attribute paths as keys and the expected data-values as values.

# waitForAttributeValues:timeout:queue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.3+ · iPadOS 18.3+ · Mac Catalyst 18.3+ · macOS 15.3+ · tvOS 18.3+ · visionOS 2.3+ · watchOS 11.3+

Sets up the provided completion to be called when any of the following happens:

## Declaration

```objectivec
- (MTRAttributeValueWaiter *) waitForAttributeValues:(NSDictionary<MTRAttributePath *,NSDictionary<NSString *,id> *> *) values timeout:(NSTimeInterval) timeout queue:(dispatch_queue_t) queue completion:(void (^)(NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

1. A set of attributes reaches certain values: completion called with nil.
2. The provided timeout expires: completion called with MTRErrorCodeTimeout error.
3. The wait is canceled: completion called with MTRErrorCodeCancelled error.

If the MTRAttributeValueWaiter is destroyed before the completion is called, that is treated the same as canceling the waiter.

The attributes and values to wait for are represented as a dictionary which has the attribute paths as keys and the expected data-values as values.
