> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowcontroller/isrunning](https://developer.apple.com/documentation/automator/amworkflowcontroller/isrunning)

# isRunning (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A Boolean value that indicates whether the controller’s workflow is currently running.

## Declaration

```swift
var isRunning: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the controller’s workflow is currently running; [false](https://developer.apple.com/documentation/swift/false) otherwise. Use `isRunning:` to determine whether the receiver’s workflow is currently running.

## See Also

### Getting Workflow Information

- [canRun](canrun.md): A Boolean value that indicates whether the controller’s workflow is able to run.
- [isPaused](ispaused.md): A Boolean value that indicates whether the controller’s workflow is currently paused.

# running (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A Boolean value that indicates whether the controller’s workflow is currently running.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRunning) BOOL running;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the controller’s workflow is currently running; [false](https://developer.apple.com/documentation/swift/false) otherwise. Use `isRunning:` to determine whether the receiver’s workflow is currently running.

## See Also

### Getting Workflow Information

- [canRun](canrun.md): A Boolean value that indicates whether the controller’s workflow is able to run.
- [paused](ispaused.md): A Boolean value that indicates whether the controller’s workflow is currently paused.
