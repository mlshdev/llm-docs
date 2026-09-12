> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction](https://developer.apple.com/documentation/automator/amaction)

# AMAction (Swift)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An abstract class that defines the interface and general characteristics of Automator actions.

## Declaration

```swift
class AMAction
```

<a id="overview"></a>

## Overview

Automator is an Apple app that allows users to construct and execute workflows consisting of a sequence of discrete modules called actions. An action performs a specific task, such as copying a file or cropping an image, and passes its output to Automator to give to the next action in the workflow. Actions are currently implemented as loadable bundles owned by objects of the [AMBundleAction](ambundleaction.md) class, a subclass of [AMAction](amaction.md).

The critically important method declared by [AMAction](amaction.md) is [run(withInput:)](amaction/run%28withinput_%29.md). When Automator executes a workflow, it sends this message to each action object in the workflow (in workflow sequence), in most cases passing in the output of the previous action as input. The action object performs its task in this method and ends by returning an output object for the next action in the workflow.

Subclassing [AMAction](amaction.md) is not recommended. For most situations requiring an enhancement to the Automator framework, it is sufficient to subclass [AMBundleAction](ambundleaction.md).

## Topics

### Initializing and Encoding

- [init(definition:fromArchive:)](amaction/init%28definition_fromarchive_%29.md): Initializes the action with the specified definition.
- [init(contentsOf:)](amaction/init%28contentsof_%29.md): Loads an Automator action from a file URL.
- [write(to:)](amaction/write%28to_%29.md): Examines the parameters and other configuration information specified in the passed dictionary and adds its own information to it if appropriate.

### Controlling the Action

- [run(withInput:)](amaction/run%28withinput_%29.md): Requests the action to perform its task using the specified input.
- [runAsynchronously(withInput:)](amaction/runasynchronously%28withinput_%29.md): Causes Automator to wait for notification that the action has completed execution, which allows the action to perform an asynchronous operation.
- [finishRunningWithError(\_:)](amaction/finishrunningwitherror%28__%29.md): Causes the action to stop running and return an error, which, in turn, causes the workflow to stop.
- [willFinishRunning()](amaction/willfinishrunning%28%29.md): Provides an opportunity for an action to perform cleanup operations, such as closing windows and deallocating memory.
- [stop()](amaction/stop%28%29.md): Stops the action from running.
- [reset()](amaction/reset%28%29.md): Resets the action to its initial state.

### Initializing and Synchronizing the Action User Interface

- [activated()](amaction/activated%28%29.md): Allows the action to synchronize its information with settings in another app.
- [opened()](amaction/opened%28%29.md): Allows the action to initialize its user interface.

### Performing Logging

- [AMLogLevel](amloglevel.md): Logging levels that Automator supports.

### Updating Action Parameters

- [parametersUpdated()](amaction/parametersupdated%28%29.md): Requests the action to update its user interface from its stored parameters, which have changed.
- [updateParameters()](amaction/updateparameters%28%29.md): Requests the action to update its stored set of parameters from the settings in the action’s user interface.

### Getting Action Information

- [name](amaction/name.md): The name of the action.
- [progressValue](amaction/progressvalue.md): A float value between 0 and 1, which indicates how far along the action is while processing.
- [ignoresInput](amaction/ignoresinput.md): A Boolean value that indicates whether the action acts upon its input or the input is ignored.
- [output](amaction/output.md): The action’s output.
- [selectedInputType](amaction/selectedinputtype.md): The type of input, in UTI format, of the input received by the action.
- [selectedOutputType](amaction/selectedoutputtype.md): The type of output, in UTI format, of the output to be produced by the action.
- [isStopped](amaction/isstopped.md): A Boolean value that indicates whether the user clicked the stop button on the parent workflow.

### Performing Cleanup Operations

- [closed()](amaction/closed%28%29.md): Invoked by Automator when the receiving action is removed from a workflow, allowing it to perform cleanup operations.

### Initializers

- [init(contentsOfURL:)](amaction/init%28contentsofurl_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [AMBundleAction](ambundleaction.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Actions

- [AMBundleAction](ambundleaction.md): An object that represents an Automator action that’s a loadable bundle.
- [AMShellScriptAction](amshellscriptaction.md): An object that represents Automator actions whose runtime behavior is driven by a shell script or by a Perl or Python script.

# AMAction (Objective-C)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An abstract class that defines the interface and general characteristics of Automator actions.

## Declaration

```objectivec
@interface AMAction : NSObject
```

<a id="overview"></a>

## Overview

Automator is an Apple app that allows users to construct and execute workflows consisting of a sequence of discrete modules called actions. An action performs a specific task, such as copying a file or cropping an image, and passes its output to Automator to give to the next action in the workflow. Actions are currently implemented as loadable bundles owned by objects of the [AMBundleAction](ambundleaction.md) class, a subclass of [AMAction](amaction.md).

The critically important method declared by [AMAction](amaction.md) is [runWithInput:error:](amaction/run%28withinput_%29.md). When Automator executes a workflow, it sends this message to each action object in the workflow (in workflow sequence), in most cases passing in the output of the previous action as input. The action object performs its task in this method and ends by returning an output object for the next action in the workflow.

Subclassing [AMAction](amaction.md) is not recommended. For most situations requiring an enhancement to the Automator framework, it is sufficient to subclass [AMBundleAction](ambundleaction.md).

## Topics

### Initializing and Encoding

- [initWithDefinition:fromArchive:](amaction/init%28definition_fromarchive_%29.md): Initializes the action with the specified definition.
- [initWithContentsOfURL:error:](amaction/init%28contentsof_%29.md): Loads an Automator action from a file URL.
- [writeToDictionary:](amaction/write%28to_%29.md): Examines the parameters and other configuration information specified in the passed dictionary and adds its own information to it if appropriate.

### Controlling the Action

- [runWithInput:error:](amaction/run%28withinput_%29.md): Requests the action to perform its task using the specified input.
- [runAsynchronouslyWithInput:](amaction/runasynchronously%28withinput_%29.md): Causes Automator to wait for notification that the action has completed execution, which allows the action to perform an asynchronous operation.
- [finishRunningWithError:](amaction/finishrunningwitherror%28__%29.md): Causes the action to stop running and return an error, which, in turn, causes the workflow to stop.
- [willFinishRunning](amaction/willfinishrunning%28%29.md): Provides an opportunity for an action to perform cleanup operations, such as closing windows and deallocating memory.
- [stop](amaction/stop%28%29.md): Stops the action from running.
- [reset](amaction/reset%28%29.md): Resets the action to its initial state.

### Initializing and Synchronizing the Action User Interface

- [activated](amaction/activated%28%29.md): Allows the action to synchronize its information with settings in another app.
- [opened](amaction/opened%28%29.md): Allows the action to initialize its user interface.

### Performing Logging

- [logMessageWithLevel:format:](amaction/logmessagewithlevel_format_.md): Displays a message in Automator’s log area.
- [AMLogLevel](amloglevel.md): Logging levels that Automator supports.

### Updating Action Parameters

- [parametersUpdated](amaction/parametersupdated%28%29.md): Requests the action to update its user interface from its stored parameters, which have changed.
- [updateParameters](amaction/updateparameters%28%29.md): Requests the action to update its stored set of parameters from the settings in the action’s user interface.

### Getting Action Information

- [name](amaction/name.md): The name of the action.
- [progressValue](amaction/progressvalue.md): A float value between 0 and 1, which indicates how far along the action is while processing.
- [ignoresInput](amaction/ignoresinput.md): A Boolean value that indicates whether the action acts upon its input or the input is ignored.
- [output](amaction/output.md): The action’s output.
- [selectedInputType](amaction/selectedinputtype.md): The type of input, in UTI format, of the input received by the action.
- [selectedOutputType](amaction/selectedoutputtype.md): The type of output, in UTI format, of the output to be produced by the action.
- [stopped](amaction/isstopped.md): A Boolean value that indicates whether the user clicked the stop button on the parent workflow.

### Performing Cleanup Operations

- [closed](amaction/closed%28%29.md): Invoked by Automator when the receiving action is removed from a workflow, allowing it to perform cleanup operations.

### Deprecated

- [runWithInput:fromAction:error:](amaction/runwithinput_fromaction_error_.md): Deprecated. Requests the action to perform its task using the specified input from the specified action.
- [didFinishRunningWithError:](amaction/didfinishrunningwitherror_.md): Deprecated. Sent by the action to itself when it has finished running asynchronously.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [AMBundleAction](ambundleaction.md)

## See Also

### Actions

- [AMBundleAction](ambundleaction.md): An object that represents an Automator action that’s a loadable bundle.
- [AMShellScriptAction](amshellscriptaction.md): An object that represents Automator actions whose runtime behavior is driven by a shell script or by a Perl or Python script.
