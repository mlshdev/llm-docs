> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerwillstop(_:)](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerwillstop(_:))

# workflowControllerWillStop(\_:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Tells the delegate that the workflow controller object is about to stop.

## Declaration

```swift
optional func workflowControllerWillStop(_ controller: AMWorkflowController)
```

## Parameters

- `controller`: The workflow controller object to stop.

## See Also

### Stopping

- [workflowControllerDidStop(\_:)](workflowcontrollerdidstop%28__%29.md): Tells the delegate that the workflow controller object has stopped.

# workflowControllerWillStop: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Tells the delegate that the workflow controller object is about to stop.

## Declaration

```objectivec
- (void) workflowControllerWillStop:(AMWorkflowController *) controller;
```

## Parameters

- `controller`: The workflow controller object to stop.

## See Also

### Stopping

- [workflowControllerDidStop:](workflowcontrollerdidstop%28__%29.md): Tells the delegate that the workflow controller object has stopped.
