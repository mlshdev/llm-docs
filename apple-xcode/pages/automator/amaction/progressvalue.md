> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/progressvalue](https://developer.apple.com/documentation/automator/amaction/progressvalue)

# progressValue (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.6+

A float value between 0 and 1, which indicates how far along the action is while processing.

## Declaration

```swift
var progressValue: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this value causes Automator’s action progress indicator (displayed as a workflow runs) to update in order to provide the user with an indication of progress.

## See Also

### Getting Action Information

- [name](name.md): The name of the action.
- [ignoresInput](ignoresinput.md): A Boolean value that indicates whether the action acts upon its input or the input is ignored.
- [output](output.md): The action’s output.
- [selectedInputType](selectedinputtype.md): The type of input, in UTI format, of the input received by the action.
- [selectedOutputType](selectedoutputtype.md): The type of output, in UTI format, of the output to be produced by the action.
- [isStopped](isstopped.md): A Boolean value that indicates whether the user clicked the stop button on the parent workflow.

# progressValue (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.6+

A float value between 0 and 1, which indicates how far along the action is while processing.

## Declaration

```objectivec
@property (atomic) CGFloat progressValue;
```

<a id="Discussion"></a>

## Discussion

Setting this value causes Automator’s action progress indicator (displayed as a workflow runs) to update in order to provide the user with an indication of progress.

## See Also

### Getting Action Information

- [name](name.md): The name of the action.
- [ignoresInput](ignoresinput.md): A Boolean value that indicates whether the action acts upon its input or the input is ignored.
- [output](output.md): The action’s output.
- [selectedInputType](selectedinputtype.md): The type of input, in UTI format, of the input received by the action.
- [selectedOutputType](selectedoutputtype.md): The type of output, in UTI format, of the output to be produced by the action.
- [stopped](isstopped.md): A Boolean value that indicates whether the user clicked the stop button on the parent workflow.
