> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontroller(_:willrun:)

# workflowController(\_:willRun:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Notifies the delegate when the specified action is about to run.

## Declaration

```swift
optional func workflowController(_ controller: AMWorkflowController, willRun action: AMAction)
```

## Parameters

- `controller`: The controller object sending the message.
- `action`: The workflow action to run.

## See Also

### Preparing to Run

- [workflowControllerWillRun(\_:)](workflowcontrollerwillrun%28__%29.md): Notifies the delegate when the workflow controller object is about to run.

# workflowController:willRunAction: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Notifies the delegate when the specified action is about to run.

## Declaration

```objectivec
- (void) workflowController:(AMWorkflowController *) controller willRunAction:(AMAction *) action;
```

## Parameters

- `controller`: The controller object sending the message.
- `action`: The workflow action to run.

## See Also

### Preparing to Run

- [workflowControllerWillRun:](workflowcontrollerwillrun%28__%29.md): Notifies the delegate when the workflow controller object is about to run.
