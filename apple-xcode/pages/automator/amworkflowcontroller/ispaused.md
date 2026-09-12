> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowcontroller/ispaused](https://developer.apple.com/documentation/automator/amworkflowcontroller/ispaused)

# isPaused (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A Boolean value that indicates whether the controller’s workflow is currently paused.

## Declaration

```swift
var isPaused: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the controller’s workflow is currently paused; [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Getting Workflow Information

- [canRun](canrun.md): A Boolean value that indicates whether the controller’s workflow is able to run.
- [isRunning](isrunning.md): A Boolean value that indicates whether the controller’s workflow is currently running.

# paused (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A Boolean value that indicates whether the controller’s workflow is currently paused.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPaused) BOOL paused;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the controller’s workflow is currently paused; [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Getting Workflow Information

- [canRun](canrun.md): A Boolean value that indicates whether the controller’s workflow is able to run.
- [running](isrunning.md): A Boolean value that indicates whether the controller’s workflow is currently running.
