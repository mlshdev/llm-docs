> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerdidstop(_:)](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerdidstop(_:))

# workflowControllerDidStop(\_:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Tells the delegate that the workflow controller object has stopped.

## Declaration

```swift
optional func workflowControllerDidStop(_ controller: AMWorkflowController)
```

## Parameters

- `controller`: The workflow controller object that stopped.

## See Also

### Stopping

- [workflowControllerWillStop(\_:)](workflowcontrollerwillstop%28__%29.md): Tells the delegate that the workflow controller object is about to stop.

# workflowControllerDidStop: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Tells the delegate that the workflow controller object has stopped.

## Declaration

```objectivec
- (void) workflowControllerDidStop:(AMWorkflowController *) controller;
```

## Parameters

- `controller`: The workflow controller object that stopped.

## See Also

### Stopping

- [workflowControllerWillStop:](workflowcontrollerwillstop%28__%29.md): Tells the delegate that the workflow controller object is about to stop.
