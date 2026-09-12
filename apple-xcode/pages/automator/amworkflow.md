> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflow](https://developer.apple.com/documentation/automator/amworkflow)

# AMWorkflow (Swift)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An object that lets you use an Automator workflow in your app.

## Declaration

```swift
class AMWorkflow
```

<a id="overview"></a>

## Overview

A *workflow* consists of one or more actions, discrete tasks which together can perform complex automation tasks. Your app can use workflows to package its own features and to take advantage of features provided by other apps. You create actions with Xcode, while you create workflows with the Automator app.

You can load and run a workflow with minimal overhead by using the class method [run(at:withInput:)](amworkflow/run%28at_withinput_%29.md). However, in situations where you need greater control, such as the ability to start and stop the workflow, you can use an instance of the [AMWorkflowController](amworkflowcontroller.md) class instead. In that case, you must create and initialize both the workflow and the workflow controller objects.

In either case, the workflow runs in a separate process so that any actions it contains are executed in a separate memory space.  That helps to insulate your app from crashes, memory leaks, or exceptions that might occur from running the actions in the workflow.

You can display a workflow with an instance of [AMWorkflowView](amworkflowview.md).

## Topics

### Creating a Workflow

- [init()](amworkflow/init%28%29.md): Creates and initializes a workflow.
- [init(contentsOf:)](amworkflow/init%28contentsof_%29.md): Creates and initializes a workflow based on the contents of the specified file.

### Running a Workflow

- [run(at:withInput:)](amworkflow/run%28at_withinput_%29.md): Loads and runs the specified workflow file.

### Saving Changes to a Workflow

- [write(to:)](amworkflow/write%28to_%29.md): Writes the workflow to the specified file.

### Getting Information About a Workflow

- [actions](amworkflow/actions.md): An array of the workflow’s actions.
- [fileURL](amworkflow/fileurl.md): A URL that specifies the location of the workflow file.
- [valueForVariable(withName:)](amworkflow/valueforvariable%28withname_%29.md): Returns the value of the workflow variable with the specified name.

### Working with the Workflow’s Input and Output

- [input](amworkflow/input.md): The input data that is passed to the first action in the workflow.
- [output](amworkflow/output.md): The output data that is provided by the last action in the workflow.

### Manipulating the Workflow

- [setValue(\_:forVariableWithName:)](amworkflow/setvalue%28__forvariablewithname_%29.md): Sets the value of the workflow variable with the specified name.

### Manipulating the Workflow’s Actions

- [addAction(\_:)](amworkflow/addaction%28__%29.md): Adds the specified action at the end of the receiving workflow.
- [insertAction(\_:at:)](amworkflow/insertaction%28__at_%29.md): Inserts the specified action at the specified position of the receiving workflow.
- [moveAction(at:to:)](amworkflow/moveaction%28at_to_%29.md): Moves the action from the specified start position to the specified end position in the receiving workflow.
- [removeAction(\_:)](amworkflow/removeaction%28__%29.md): Removes the specified action from the workflow.

### Initializers

- [init(contentsOfURL:)](amworkflow/init%28contentsofurl_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Workflows

- [AMWorkflowController](amworkflowcontroller.md): An object that lets you manage an Automator workflow in your app.
- [AMWorkflowView](amworkflowview.md): An object that lets you view and edit Automator workflows in your app.
- [AMWorkspace](amworkspace.md): A workspace for running an Automator workflow.

# AMWorkflow (Objective-C)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An object that lets you use an Automator workflow in your app.

## Declaration

```objectivec
@interface AMWorkflow : NSObject
```

<a id="overview"></a>

## Overview

A *workflow* consists of one or more actions, discrete tasks which together can perform complex automation tasks. Your app can use workflows to package its own features and to take advantage of features provided by other apps. You create actions with Xcode, while you create workflows with the Automator app.

You can load and run a workflow with minimal overhead by using the class method [runWorkflowAtURL:withInput:error:](amworkflow/run%28at_withinput_%29.md). However, in situations where you need greater control, such as the ability to start and stop the workflow, you can use an instance of the [AMWorkflowController](amworkflowcontroller.md) class instead. In that case, you must create and initialize both the workflow and the workflow controller objects.

In either case, the workflow runs in a separate process so that any actions it contains are executed in a separate memory space.  That helps to insulate your app from crashes, memory leaks, or exceptions that might occur from running the actions in the workflow.

You can display a workflow with an instance of [AMWorkflowView](amworkflowview.md).

## Topics

### Creating a Workflow

- [init](amworkflow/init%28%29.md): Creates and initializes a workflow.
- [initWithContentsOfURL:error:](amworkflow/init%28contentsof_%29.md): Creates and initializes a workflow based on the contents of the specified file.

### Running a Workflow

- [runWorkflowAtURL:withInput:error:](amworkflow/run%28at_withinput_%29.md): Loads and runs the specified workflow file.

### Saving Changes to a Workflow

- [writeToURL:error:](amworkflow/write%28to_%29.md): Writes the workflow to the specified file.

### Getting Information About a Workflow

- [actions](amworkflow/actions.md): An array of the workflow’s actions.
- [fileURL](amworkflow/fileurl.md): A URL that specifies the location of the workflow file.
- [valueForVariableWithName:](amworkflow/valueforvariable%28withname_%29.md): Returns the value of the workflow variable with the specified name.

### Working with the Workflow’s Input and Output

- [input](amworkflow/input.md): The input data that is passed to the first action in the workflow.
- [output](amworkflow/output.md): The output data that is provided by the last action in the workflow.

### Manipulating the Workflow

- [setValue:forVariableWithName:](amworkflow/setvalue%28__forvariablewithname_%29.md): Sets the value of the workflow variable with the specified name.

### Manipulating the Workflow’s Actions

- [addAction:](amworkflow/addaction%28__%29.md): Adds the specified action at the end of the receiving workflow.
- [insertAction:atIndex:](amworkflow/insertaction%28__at_%29.md): Inserts the specified action at the specified position of the receiving workflow.
- [moveActionAtIndex:toIndex:](amworkflow/moveaction%28at_to_%29.md): Moves the action from the specified start position to the specified end position in the receiving workflow.
- [removeAction:](amworkflow/removeaction%28__%29.md): Removes the specified action from the workflow.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Workflows

- [AMWorkflowController](amworkflowcontroller.md): An object that lets you manage an Automator workflow in your app.
- [AMWorkflowView](amworkflowview.md): An object that lets you view and edit Automator workflows in your app.
- [AMWorkspace](amworkspace.md): A workspace for running an Automator workflow.
