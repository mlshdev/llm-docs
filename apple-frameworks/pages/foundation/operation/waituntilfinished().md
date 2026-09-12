> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operation/waituntilfinished()](https://developer.apple.com/documentation/foundation/operation/waituntilfinished())

# waitUntilFinished() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Blocks execution of the current thread until the operation object finishes its task.

## Declaration

```swift
func waitUntilFinished()
```

<a id="Discussion"></a>

## Discussion

An operation object must never call this method on itself and should avoid calling it on any operations submitted to the same operation queue as itself. Doing so can cause the operation to deadlock. Instead, other parts of your app may call this method as needed to prevent other tasks from completing until the target operation object finishes. It is generally safe to call this method on an operation that is in a different operation queue, although it is still possible to create deadlocks if each operation waits on the other.

A typical use for this method would be to call it from the code that created the operation in the first place. After submitting the operation to a queue, you would call this method to wait until that operation finished executing.

# waitUntilFinished (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Blocks execution of the current thread until the operation object finishes its task.

## Declaration

```objectivec
- (void) waitUntilFinished;
```

<a id="Discussion"></a>

## Discussion

An operation object must never call this method on itself and should avoid calling it on any operations submitted to the same operation queue as itself. Doing so can cause the operation to deadlock. Instead, other parts of your app may call this method as needed to prevent other tasks from completing until the target operation object finishes. It is generally safe to call this method on an operation that is in a different operation queue, although it is still possible to create deadlocks if each operation waits on the other.

A typical use for this method would be to call it from the code that created the operation in the first place. After submitting the operation to a queue, you would call this method to wait until that operation finished executing.
