> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/waituntilexit()](https://developer.apple.com/documentation/foundation/process/waituntilexit())

# waitUntilExit() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Blocks the process until the receiver is finished.

## Declaration

```swift
func waitUntilExit()
```

<a id="Discussion"></a>

## Discussion

This method first checks to see if the receiver is still running using [isRunning](isrunning.md). Then it polls the current run loop using `NSDefaultRunLoopMode` until the task completes.

**Swift**

```swift
let task: NSTask = // Create and initialize a task
    task.launch()
task.waitUntilExit()
let status = task.terminationStatus
 
if status == 0 {
    print("Task succeeded.")
} else {
    print("Task failed.")
}
```

**Objective-C**

```objc
NSTask *task = // Create and initialize a task
[task launch];
[task waitUntilExit];
int status = [task terminationStatus];
 
if (status == 0) {
    NSLog(@"Task succeeded.");
} else {
    NSLog(@"Task failed.");
}
```

[waitUntilExit()](waituntilexit%28%29.md) does not guarantee that the [terminationHandler](terminationhandler.md) block has been fully executed before [waitUntilExit()](waituntilexit%28%29.md) returns.

## See Also

### Related Documentation

- [launch()](launch%28%29.md): Deprecated. Launches the task represented by the receiver.

### Running and stopping

- [run()](run%28%29.md): Runs the process with the current environment.
- [interrupt()](interrupt%28%29.md): Sends an interrupt signal to the receiver and all of its subtasks.
- [resume()](resume%28%29.md): Resumes execution of a suspended task.
- [suspend()](suspend%28%29.md): Suspends execution of the receiver task.
- [terminate()](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.

# waitUntilExit (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Blocks the process until the receiver is finished.

## Declaration

```objectivec
- (void) waitUntilExit;
```

<a id="Discussion"></a>

## Discussion

This method first checks to see if the receiver is still running using [running](isrunning.md). Then it polls the current run loop using `NSDefaultRunLoopMode` until the task completes.

**Swift**

```swift
let task: NSTask = // Create and initialize a task
    task.launch()
task.waitUntilExit()
let status = task.terminationStatus
 
if status == 0 {
    print("Task succeeded.")
} else {
    print("Task failed.")
}
```

**Objective-C**

```objc
NSTask *task = // Create and initialize a task
[task launch];
[task waitUntilExit];
int status = [task terminationStatus];
 
if (status == 0) {
    NSLog(@"Task succeeded.");
} else {
    NSLog(@"Task failed.");
}
```

[waitUntilExit](waituntilexit%28%29.md) does not guarantee that the [terminationHandler](terminationhandler.md) block has been fully executed before [waitUntilExit](waituntilexit%28%29.md) returns.

## See Also

### Related Documentation

- [launch](launch%28%29.md): Deprecated. Launches the task represented by the receiver.

### Running and stopping

- [launchAndReturnError:](run%28%29.md): Runs the process with the current environment.
- [interrupt](interrupt%28%29.md): Sends an interrupt signal to the receiver and all of its subtasks.
- [resume](resume%28%29.md): Resumes execution of a suspended task.
- [suspend](suspend%28%29.md): Suspends execution of the receiver task.
- [terminate](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.
