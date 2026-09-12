> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowcontrollerdelegate/workflowcontroller(_:didrun:)](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontroller(_:didrun:))

# workflowController(\_:didRun:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Notifies the delegate when the specified action finishes running.

## Declaration

```swift
optional func workflowController(_ controller: AMWorkflowController, didRun action: AMAction)
```

## Parameters

- `controller`: The controller object sending the message.
- `action`: The workflow action that ran.

## See Also

### Running

- [workflowControllerDidRun(\_:)](workflowcontrollerdidrun%28__%29.md): Notifies the delegate when the workflow controller object finishes running.

# workflowController:didRunAction: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Notifies the delegate when the specified action finishes running.

## Declaration

```objectivec
- (void) workflowController:(AMWorkflowController *) controller didRunAction:(AMAction *) action;
```

## Parameters

- `controller`: The controller object sending the message.
- `action`: The workflow action that ran.

## See Also

### Running

- [workflowControllerDidRun:](workflowcontrollerdidrun%28__%29.md): Notifies the delegate when the workflow controller object finishes running.
