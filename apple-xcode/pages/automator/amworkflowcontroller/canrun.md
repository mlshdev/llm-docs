> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowcontroller/canrun](https://developer.apple.com/documentation/automator/amworkflowcontroller/canrun)

# canRun (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A Boolean value that indicates whether the controller’s workflow is able to run.

## Declaration

```swift
var canRun: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the controller’s workflow is able to run; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

You might use this method to determine when to enable a “Run” button or other UI element you use to run the workflow.

## See Also

### Getting Workflow Information

- [isPaused](ispaused.md): A Boolean value that indicates whether the controller’s workflow is currently paused.
- [isRunning](isrunning.md): A Boolean value that indicates whether the controller’s workflow is currently running.

# canRun (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A Boolean value that indicates whether the controller’s workflow is able to run.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canRun;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the controller’s workflow is able to run; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

You might use this method to determine when to enable a “Run” button or other UI element you use to run the workflow.

## See Also

### Getting Workflow Information

- [paused](ispaused.md): A Boolean value that indicates whether the controller’s workflow is currently paused.
- [running](isrunning.md): A Boolean value that indicates whether the controller’s workflow is currently running.
