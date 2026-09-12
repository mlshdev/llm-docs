> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/output](https://developer.apple.com/documentation/automator/amaction/output)

# output (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+

The action’s output.

## Declaration

```swift
var output: Any? { get set }
```

<a id="return-value"></a>

## Return Value

The receiving action’s output, or `nil` if called before the action is run.

<a id="Discussion"></a>

## Discussion

`nil` if called before the action is run.

This method is used in conjunction with the [AMWorkflow](../amworkflow.md) class, which allows access to the actions in a workflow. Within a workflow, for example, you might iteratively inspect the output of each action. Or, on completion of a workflow, you might examine the output of the last action, to determine the output of the workflow.

This parameter can also be used when running an action asynchronously. Call `setOutput` to specify the output the action produces.

## See Also

### Getting Action Information

- [name](name.md): The name of the action.
- [progressValue](progressvalue.md): A float value between 0 and 1, which indicates how far along the action is while processing.
- [ignoresInput](ignoresinput.md): A Boolean value that indicates whether the action acts upon its input or the input is ignored.
- [selectedInputType](selectedinputtype.md): The type of input, in UTI format, of the input received by the action.
- [selectedOutputType](selectedoutputtype.md): The type of output, in UTI format, of the output to be produced by the action.
- [isStopped](isstopped.md): A Boolean value that indicates whether the user clicked the stop button on the parent workflow.

# output (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+

The action’s output.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id output;
```

<a id="return-value"></a>

## Return Value

The receiving action’s output, or `nil` if called before the action is run.

<a id="Discussion"></a>

## Discussion

`nil` if called before the action is run.

This method is used in conjunction with the [AMWorkflow](../amworkflow.md) class, which allows access to the actions in a workflow. Within a workflow, for example, you might iteratively inspect the output of each action. Or, on completion of a workflow, you might examine the output of the last action, to determine the output of the workflow.

This parameter can also be used when running an action asynchronously. Call `setOutput` to specify the output the action produces.

## See Also

### Getting Action Information

- [name](name.md): The name of the action.
- [progressValue](progressvalue.md): A float value between 0 and 1, which indicates how far along the action is while processing.
- [ignoresInput](ignoresinput.md): A Boolean value that indicates whether the action acts upon its input or the input is ignored.
- [selectedInputType](selectedinputtype.md): The type of input, in UTI format, of the input received by the action.
- [selectedOutputType](selectedoutputtype.md): The type of output, in UTI format, of the output to be produced by the action.
- [stopped](isstopped.md): A Boolean value that indicates whether the user clicked the stop button on the parent workflow.
