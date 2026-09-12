> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowcontrollerdelegate/workflowcontroller(_:diderror:)](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontroller(_:diderror:))

# workflowController(\_:didError:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Notifies the delegate when the workflow encounters an error.

## Declaration

```swift
optional func workflowController(_ controller: AMWorkflowController, didError error: any Error)
```

## Parameters

- `controller`: The controller object sending the message.
- `error`: If a workflow error occurs, upon return contains an instance of [NSError](https://developer.apple.com/documentation/foundation/nserror) that describes the problem.

# workflowController:didError: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Notifies the delegate when the workflow encounters an error.

## Declaration

```objectivec
- (void) workflowController:(AMWorkflowController *) controller didError:(NSError *) error;
```

## Parameters

- `controller`: The controller object sending the message.
- `error`: If a workflow error occurs, upon return contains an instance of [NSError](https://developer.apple.com/documentation/foundation/nserror) that describes the problem.
