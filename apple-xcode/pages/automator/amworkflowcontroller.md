> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowcontroller](https://developer.apple.com/documentation/automator/amworkflowcontroller)

# AMWorkflowController (Swift)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An object that lets you manage an Automator workflow in your app.

## Declaration

```swift
class AMWorkflowController
```

<a id="overview"></a>

## Overview

A controller can run and stop a workflow and obtain information about its state. The controller’s delegate ([AMWorkflowControllerDelegate](amworkflowcontrollerdelegate.md)) receives messages as the workflow is executed and its actions are run.

You can load and run a workflow with minimal overhead by using the [AMWorkflow](amworkflow.md) class method [run(at:withInput:)](amworkflow/run%28at_withinput_%29.md). Use [AMWorkflowController](amworkflowcontroller.md) where you need greater control, such as the ability to start and stop the workflow. In that case, you must create and initialize both the workflow and the workflow controller objects.

## Topics

### Accessing the Workflow

- [workflow](amworkflowcontroller/workflow.md): The controller’s workflow.

### Accessing the Workflow View

- [workflowView](amworkflowcontroller/workflowview-swift.property.md): The controller’s workflow view.

### Accessing the Delegate

- [delegate](amworkflowcontroller/delegate.md): The controller’s delegate.
- [AMWorkflowControllerDelegate](amworkflowcontrollerdelegate.md): A set of optional methods that a delegate of a workflow controller implements.

### Controlling the Workflow

- [pause(\_:)](amworkflowcontroller/pause%28__%29.md): Pauses a workflow that’s running.
- [reset(\_:)](amworkflowcontroller/reset%28__%29.md): Stops a workflow, clears any action results, and resets the workflow back to an un-run state.
- [run(\_:)](amworkflowcontroller/run%28__%29.md): Runs the associated workflow, after first clearing any results stored by its actions during any previous run.
- [step(\_:)](amworkflowcontroller/step%28__%29.md): In a paused workflow, runs the next action in the workflow and then pauses again.
- [stop(\_:)](amworkflowcontroller/stop%28__%29.md): Stops the associated workflow.

### Getting Workflow Information

- [canRun](amworkflowcontroller/canrun.md): A Boolean value that indicates whether the controller’s workflow is able to run.
- [isPaused](amworkflowcontroller/ispaused.md): A Boolean value that indicates whether the controller’s workflow is currently paused.
- [isRunning](amworkflowcontroller/isrunning.md): A Boolean value that indicates whether the controller’s workflow is currently running.

## Relationships

### Inherits From

- [NSController](https://developer.apple.com/documentation/appkit/nscontroller)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSEditorRegistration](https://developer.apple.com/documentation/appkit/nseditorregistration)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Workflows

- [AMWorkflow](amworkflow.md): An object that lets you use an Automator workflow in your app.
- [AMWorkflowView](amworkflowview.md): An object that lets you view and edit Automator workflows in your app.
- [AMWorkspace](amworkspace.md): A workspace for running an Automator workflow.

# AMWorkflowController (Objective-C)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An object that lets you manage an Automator workflow in your app.

## Declaration

```objectivec
@interface AMWorkflowController : NSController
```

<a id="overview"></a>

## Overview

A controller can run and stop a workflow and obtain information about its state. The controller’s delegate ([AMWorkflowControllerDelegate](amworkflowcontrollerdelegate.md)) receives messages as the workflow is executed and its actions are run.

You can load and run a workflow with minimal overhead by using the [AMWorkflow](amworkflow.md) class method [runWorkflowAtURL:withInput:error:](amworkflow/run%28at_withinput_%29.md). Use [AMWorkflowController](amworkflowcontroller.md) where you need greater control, such as the ability to start and stop the workflow. In that case, you must create and initialize both the workflow and the workflow controller objects.

## Topics

### Accessing the Workflow

- [workflow](amworkflowcontroller/workflow.md): The controller’s workflow.

### Accessing the Workflow View

- [workflowView](amworkflowcontroller/workflowview-swift.property.md): The controller’s workflow view.

### Accessing the Delegate

- [delegate](amworkflowcontroller/delegate.md): The controller’s delegate.
- [AMWorkflowControllerDelegate](amworkflowcontrollerdelegate.md): A set of optional methods that a delegate of a workflow controller implements.

### Controlling the Workflow

- [pause:](amworkflowcontroller/pause%28__%29.md): Pauses a workflow that’s running.
- [reset:](amworkflowcontroller/reset%28__%29.md): Stops a workflow, clears any action results, and resets the workflow back to an un-run state.
- [run:](amworkflowcontroller/run%28__%29.md): Runs the associated workflow, after first clearing any results stored by its actions during any previous run.
- [step:](amworkflowcontroller/step%28__%29.md): In a paused workflow, runs the next action in the workflow and then pauses again.
- [stop:](amworkflowcontroller/stop%28__%29.md): Stops the associated workflow.

### Getting Workflow Information

- [canRun](amworkflowcontroller/canrun.md): A Boolean value that indicates whether the controller’s workflow is able to run.
- [paused](amworkflowcontroller/ispaused.md): A Boolean value that indicates whether the controller’s workflow is currently paused.
- [running](amworkflowcontroller/isrunning.md): A Boolean value that indicates whether the controller’s workflow is currently running.

### Instance Variables

- [workflowView](amworkflowcontroller/workflowview-c.ivar.md)

## Relationships

### Inherits From

- [NSController](https://developer.apple.com/documentation/appkit/nscontroller)

## See Also

### Workflows

- [AMWorkflow](amworkflow.md): An object that lets you use an Automator workflow in your app.
- [AMWorkflowView](amworkflowview.md): An object that lets you view and edit Automator workflows in your app.
- [AMWorkspace](amworkspace.md): A workspace for running an Automator workflow.
