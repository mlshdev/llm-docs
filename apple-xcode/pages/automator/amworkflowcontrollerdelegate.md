> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowcontrollerdelegate](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate)

# AMWorkflowControllerDelegate (Swift)

**Framework:** Automator  
**Kind:** Protocol  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A set of optional methods that a delegate of a workflow controller implements.

## Declaration

```swift
protocol AMWorkflowControllerDelegate : NSObjectProtocol
```

## Topics

### Preparing to Run

- [workflowController(\_:willRun:)](amworkflowcontrollerdelegate/workflowcontroller%28__willrun_%29.md): Notifies the delegate when the specified action is about to run.
- [workflowControllerWillRun(\_:)](amworkflowcontrollerdelegate/workflowcontrollerwillrun%28__%29.md): Notifies the delegate when the workflow controller object is about to run.

### Running

- [workflowController(\_:didRun:)](amworkflowcontrollerdelegate/workflowcontroller%28__didrun_%29.md): Notifies the delegate when the specified action finishes running.
- [workflowControllerDidRun(\_:)](amworkflowcontrollerdelegate/workflowcontrollerdidrun%28__%29.md): Notifies the delegate when the workflow controller object finishes running.

### Stopping

- [workflowControllerWillStop(\_:)](amworkflowcontrollerdelegate/workflowcontrollerwillstop%28__%29.md): Tells the delegate that the workflow controller object is about to stop.
- [workflowControllerDidStop(\_:)](amworkflowcontrollerdelegate/workflowcontrollerdidstop%28__%29.md): Tells the delegate that the workflow controller object has stopped.

### Handling Errors

- [workflowController(\_:didError:)](amworkflowcontrollerdelegate/workflowcontroller%28__diderror_%29.md): Notifies the delegate when the workflow encounters an error.

### Deprecated

- [workflowController(\_:willRun:)](amworkflowcontrollerdelegate/workflowcontroller%28__willrun_%29.md): Notifies the delegate when the specified action is about to run.
- [workflowControllerWillRun(\_:)](amworkflowcontrollerdelegate/workflowcontrollerwillrun%28__%29.md): Notifies the delegate when the workflow controller object is about to run.
- [workflowController(\_:didRun:)](amworkflowcontrollerdelegate/workflowcontroller%28__didrun_%29.md): Notifies the delegate when the specified action finishes running.
- [workflowControllerDidRun(\_:)](amworkflowcontrollerdelegate/workflowcontrollerdidrun%28__%29.md): Notifies the delegate when the workflow controller object finishes running.
- [workflowControllerWillStop(\_:)](amworkflowcontrollerdelegate/workflowcontrollerwillstop%28__%29.md): Tells the delegate that the workflow controller object is about to stop.
- [workflowControllerDidStop(\_:)](amworkflowcontrollerdelegate/workflowcontrollerdidstop%28__%29.md): Tells the delegate that the workflow controller object has stopped.
- [workflowController(\_:didError:)](amworkflowcontrollerdelegate/workflowcontroller%28__diderror_%29.md): Notifies the delegate when the workflow encounters an error.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Accessing the Delegate

- [delegate](amworkflowcontroller/delegate.md): The controller’s delegate.

# AMWorkflowControllerDelegate (Objective-C)

**Framework:** Automator  
**Kind:** Protocol  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A set of optional methods that a delegate of a workflow controller implements.

## Declaration

```objectivec
@protocol AMWorkflowControllerDelegate <NSObject>
```

## Topics

### Preparing to Run

- [workflowController:willRunAction:](amworkflowcontrollerdelegate/workflowcontroller%28__willrun_%29.md): Notifies the delegate when the specified action is about to run.
- [workflowControllerWillRun:](amworkflowcontrollerdelegate/workflowcontrollerwillrun%28__%29.md): Notifies the delegate when the workflow controller object is about to run.

### Running

- [workflowController:didRunAction:](amworkflowcontrollerdelegate/workflowcontroller%28__didrun_%29.md): Notifies the delegate when the specified action finishes running.
- [workflowControllerDidRun:](amworkflowcontrollerdelegate/workflowcontrollerdidrun%28__%29.md): Notifies the delegate when the workflow controller object finishes running.

### Stopping

- [workflowControllerWillStop:](amworkflowcontrollerdelegate/workflowcontrollerwillstop%28__%29.md): Tells the delegate that the workflow controller object is about to stop.
- [workflowControllerDidStop:](amworkflowcontrollerdelegate/workflowcontrollerdidstop%28__%29.md): Tells the delegate that the workflow controller object has stopped.

### Handling Errors

- [workflowController:didError:](amworkflowcontrollerdelegate/workflowcontroller%28__diderror_%29.md): Notifies the delegate when the workflow encounters an error.

### Deprecated

- [workflowController:willRunAction:](amworkflowcontrollerdelegate/workflowcontroller%28__willrun_%29.md): Notifies the delegate when the specified action is about to run.
- [workflowControllerWillRun:](amworkflowcontrollerdelegate/workflowcontrollerwillrun%28__%29.md): Notifies the delegate when the workflow controller object is about to run.
- [workflowController:didRunAction:](amworkflowcontrollerdelegate/workflowcontroller%28__didrun_%29.md): Notifies the delegate when the specified action finishes running.
- [workflowControllerDidRun:](amworkflowcontrollerdelegate/workflowcontrollerdidrun%28__%29.md): Notifies the delegate when the workflow controller object finishes running.
- [workflowControllerWillStop:](amworkflowcontrollerdelegate/workflowcontrollerwillstop%28__%29.md): Tells the delegate that the workflow controller object is about to stop.
- [workflowControllerDidStop:](amworkflowcontrollerdelegate/workflowcontrollerdidstop%28__%29.md): Tells the delegate that the workflow controller object has stopped.
- [workflowController:didError:](amworkflowcontrollerdelegate/workflowcontroller%28__diderror_%29.md): Notifies the delegate when the workflow encounters an error.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Accessing the Delegate

- [delegate](amworkflowcontroller/delegate.md): The controller’s delegate.
