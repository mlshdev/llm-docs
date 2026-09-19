> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerdidrun(_:)

# workflowControllerDidRun(\_:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Notifies the delegate when the workflow controller object finishes running.

## Declaration

```swift
optional func workflowControllerDidRun(_ controller: AMWorkflowController)
```

## Parameters

- `controller`: The workflow controller object that finished running.

## See Also

### Running

- [workflowController(\_:didRun:)](workflowcontroller%28__didrun_%29.md): Notifies the delegate when the specified action finishes running.

# workflowControllerDidRun: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Notifies the delegate when the workflow controller object finishes running.

## Declaration

```objectivec
- (void) workflowControllerDidRun:(AMWorkflowController *) controller;
```

## Parameters

- `controller`: The workflow controller object that finished running.

## See Also

### Running

- [workflowController:didRunAction:](workflowcontroller%28__didrun_%29.md): Notifies the delegate when the specified action finishes running.
