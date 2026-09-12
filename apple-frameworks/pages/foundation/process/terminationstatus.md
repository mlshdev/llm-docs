> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/terminationstatus](https://developer.apple.com/documentation/foundation/process/terminationstatus)

# terminationStatus (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The exit status the receiver’s executable returns.

## Declaration

```swift
var terminationStatus: Int32 { get }
```

<a id="return-value"></a>

## Return Value

The exit status returned by the receiver’s executable.

<a id="Discussion"></a>

## Discussion

Each task defines and documents how your app should interpret the return value. For example, many commands return 0 if they complete successfully or an error code if they don’t. You’ll need to look at the documentation for that task to learn what values it returns under what circumstances.

This method raises an `NSInvalidArgumentException` if the receiver is still running. Verify that the receiver isn’t running before you use it.

**Swift**

```swift
let task: NSTask = // Create and initialize a task
if !task.isRunning {
    let status = task.terminationStatus
    if status == 0 {
        print("Task succeeded.")
    } else {
        print("Task failed.")
    }
}
```

**Objective-C**

```objc
NSTask *task = // Create and initialize a task
if (![task isRunning]) {
    int status = [task terminationStatus];
    if (status == 0) {
        NSLog(@"Task succeeded.");
    } else {
        NSLog(@"Task failed.");
    }
}
```

## See Also

### Related Documentation

- [waitUntilExit()](waituntilexit%28%29.md): Blocks the process until the receiver is finished.
- [terminate()](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.

### Querying the process state

- [isRunning](isrunning.md): A status that indicates whether the receiver is still running.
- [terminationReason](terminationreason-swift.property.md): The reason the system terminated the task.

# terminationStatus (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The exit status the receiver’s executable returns.

## Declaration

```objectivec
@property (readonly) int terminationStatus;
```

<a id="return-value"></a>

## Return Value

The exit status returned by the receiver’s executable.

<a id="Discussion"></a>

## Discussion

Each task defines and documents how your app should interpret the return value. For example, many commands return 0 if they complete successfully or an error code if they don’t. You’ll need to look at the documentation for that task to learn what values it returns under what circumstances.

This method raises an `NSInvalidArgumentException` if the receiver is still running. Verify that the receiver isn’t running before you use it.

**Swift**

```swift
let task: NSTask = // Create and initialize a task
if !task.isRunning {
    let status = task.terminationStatus
    if status == 0 {
        print("Task succeeded.")
    } else {
        print("Task failed.")
    }
}
```

**Objective-C**

```objc
NSTask *task = // Create and initialize a task
if (![task isRunning]) {
    int status = [task terminationStatus];
    if (status == 0) {
        NSLog(@"Task succeeded.");
    } else {
        NSLog(@"Task failed.");
    }
}
```

## See Also

### Related Documentation

- [waitUntilExit](waituntilexit%28%29.md): Blocks the process until the receiver is finished.
- [terminate](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.

### Querying the process state

- [running](isrunning.md): A status that indicates whether the receiver is still running.
- [terminationReason](terminationreason-swift.property.md): The reason the system terminated the task.
