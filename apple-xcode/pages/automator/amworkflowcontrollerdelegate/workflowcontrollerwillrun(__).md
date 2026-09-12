> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerwillrun(_:)](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerwillrun(_:))

# workflowControllerWillRun(\_:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Notifies the delegate when the workflow controller object is about to run.

## Declaration

```swift
optional func workflowControllerWillRun(_ controller: AMWorkflowController)
```

## Parameters

- `controller`: The workflow controller object to run.

## See Also

### Preparing to Run

- [workflowController(\_:willRun:)](workflowcontroller%28__willrun_%29.md): Notifies the delegate when the specified action is about to run.

# workflowControllerWillRun: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Notifies the delegate when the workflow controller object is about to run.

## Declaration

```objectivec
- (void) workflowControllerWillRun:(AMWorkflowController *) controller;
```

## Parameters

- `controller`: The workflow controller object to run.

## See Also

### Preparing to Run

- [workflowController:willRunAction:](workflowcontroller%28__willrun_%29.md): Notifies the delegate when the specified action is about to run.
