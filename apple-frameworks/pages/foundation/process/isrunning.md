> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/isrunning](https://developer.apple.com/documentation/foundation/process/isrunning)

# isRunning (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A status that indicates whether the receiver is still running.

## Declaration

```swift
var isRunning: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver is still running, otherwise [false](https://developer.apple.com/documentation/swift/false). [false](https://developer.apple.com/documentation/swift/false) means either the receiver could not run or it has terminated.

## See Also

### Related Documentation

- [waitUntilExit()](waituntilexit%28%29.md): Blocks the process until the receiver is finished.
- [launch()](launch%28%29.md): Deprecated. Launches the task represented by the receiver.
- [terminate()](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.

### Querying the process state

- [terminationStatus](terminationstatus.md): The exit status the receiver’s executable returns.
- [terminationReason](terminationreason-swift.property.md): The reason the system terminated the task.

# running (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A status that indicates whether the receiver is still running.

## Declaration

```objectivec
@property (readonly, getter=isRunning) BOOL running;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver is still running, otherwise [false](https://developer.apple.com/documentation/swift/false). [false](https://developer.apple.com/documentation/swift/false) means either the receiver could not run or it has terminated.

## See Also

### Related Documentation

- [waitUntilExit](waituntilexit%28%29.md): Blocks the process until the receiver is finished.
- [launch](launch%28%29.md): Deprecated. Launches the task represented by the receiver.
- [terminate](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.

### Querying the process state

- [terminationStatus](terminationstatus.md): The exit status the receiver’s executable returns.
- [terminationReason](terminationreason-swift.property.md): The reason the system terminated the task.
