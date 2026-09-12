> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/terminationreason-swift.property](https://developer.apple.com/documentation/foundation/process/terminationreason-swift.property)

# terminationReason (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The reason the system terminated the task.

## Declaration

```swift
var terminationReason: Process.TerminationReason { get }
```

<a id="return-value"></a>

## Return Value

The termination status. The possible values are described in [Process.TerminationReason](terminationreason-swift.enum.md).

## See Also

### Querying the process state

- [isRunning](isrunning.md): A status that indicates whether the receiver is still running.
- [terminationStatus](terminationstatus.md): The exit status the receiver’s executable returns.

# terminationReason (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The reason the system terminated the task.

## Declaration

```objectivec
@property (readonly) NSTaskTerminationReason terminationReason;
```

<a id="return-value"></a>

## Return Value

The termination status. The possible values are described in [NSTaskTerminationReason](terminationreason-swift.enum.md).

## See Also

### Querying the process state

- [running](isrunning.md): A status that indicates whether the receiver is still running.
- [terminationStatus](terminationstatus.md): The exit status the receiver’s executable returns.
