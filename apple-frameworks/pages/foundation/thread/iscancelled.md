> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/iscancelled](https://developer.apple.com/documentation/foundation/thread/iscancelled)

# isCancelled (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver is cancelled.

## Declaration

```swift
var isCancelled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver has been cancelled, otherwise [false](https://developer.apple.com/documentation/swift/false).

If your thread supports cancellation, it should check this property periodically and exit if it ever returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [cancel()](cancel%28%29.md): Changes the cancelled state of the receiver to indicate that it should exit.

### Determining the Thread’s Execution State

- [isExecuting](isexecuting.md): A Boolean value that indicates whether the receiver is executing.
- [isFinished](isfinished.md): A Boolean value that indicates whether the receiver has finished execution.

# cancelled (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver is cancelled.

## Declaration

```objectivec
@property (readonly, getter=isCancelled) BOOL cancelled;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver has been cancelled, otherwise [false](https://developer.apple.com/documentation/swift/false).

If your thread supports cancellation, it should check this property periodically and exit if it ever returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [cancel](cancel%28%29.md): Changes the cancelled state of the receiver to indicate that it should exit.

### Determining the Thread’s Execution State

- [executing](isexecuting.md): A Boolean value that indicates whether the receiver is executing.
- [finished](isfinished.md): A Boolean value that indicates whether the receiver has finished execution.
