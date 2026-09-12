> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/selectedoutputtype](https://developer.apple.com/documentation/automator/amaction/selectedoutputtype)

# selectedOutputType (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.6+

The type of output, in UTI format, of the output to be produced by the action.

## Declaration

```swift
var selectedOutputType: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Getting this value provides the type of output the action is configured to produce. For example, your action may have the ability to output files and folders, or documents, depending on how it’s configured or what it encounters while processing.

The output types the action supports are specified in the action’s `Info.plist` file. By default, this property defaults to the first output type in the `Info.plist` file.

Set this value to explicitly specify the output type the action produces. Setting this value to accurately reflect the appropriate output helps Automator determine whether the output is compatible, or can be made compatible, with the next action in the workflow.

## See Also

### Getting Action Information

- [name](name.md): The name of the action.
- [progressValue](progressvalue.md): A float value between 0 and 1, which indicates how far along the action is while processing.
- [ignoresInput](ignoresinput.md): A Boolean value that indicates whether the action acts upon its input or the input is ignored.
- [output](output.md): The action’s output.
- [selectedInputType](selectedinputtype.md): The type of input, in UTI format, of the input received by the action.
- [isStopped](isstopped.md): A Boolean value that indicates whether the user clicked the stop button on the parent workflow.

# selectedOutputType (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.6+

The type of output, in UTI format, of the output to be produced by the action.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSString * selectedOutputType;
```

<a id="Discussion"></a>

## Discussion

Getting this value provides the type of output the action is configured to produce. For example, your action may have the ability to output files and folders, or documents, depending on how it’s configured or what it encounters while processing.

The output types the action supports are specified in the action’s `Info.plist` file. By default, this property defaults to the first output type in the `Info.plist` file.

Set this value to explicitly specify the output type the action produces. Setting this value to accurately reflect the appropriate output helps Automator determine whether the output is compatible, or can be made compatible, with the next action in the workflow.

## See Also

### Getting Action Information

- [name](name.md): The name of the action.
- [progressValue](progressvalue.md): A float value between 0 and 1, which indicates how far along the action is while processing.
- [ignoresInput](ignoresinput.md): A Boolean value that indicates whether the action acts upon its input or the input is ignored.
- [output](output.md): The action’s output.
- [selectedInputType](selectedinputtype.md): The type of input, in UTI format, of the input received by the action.
- [stopped](isstopped.md): A Boolean value that indicates whether the user clicked the stop button on the parent workflow.
