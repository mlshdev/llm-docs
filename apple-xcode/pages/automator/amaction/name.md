> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/name](https://developer.apple.com/documentation/automator/amaction/name)

# name (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+

The name of the action.

## Declaration

```swift
var name: String { get }
```

## See Also

### Getting Action Information

- [progressValue](progressvalue.md): A float value between 0 and 1, which indicates how far along the action is while processing.
- [ignoresInput](ignoresinput.md): A Boolean value that indicates whether the action acts upon its input or the input is ignored.
- [output](output.md): The action’s output.
- [selectedInputType](selectedinputtype.md): The type of input, in UTI format, of the input received by the action.
- [selectedOutputType](selectedoutputtype.md): The type of output, in UTI format, of the output to be produced by the action.
- [isStopped](isstopped.md): A Boolean value that indicates whether the user clicked the stop button on the parent workflow.

# name (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+

The name of the action.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSString * name;
```

## See Also

### Getting Action Information

- [progressValue](progressvalue.md): A float value between 0 and 1, which indicates how far along the action is while processing.
- [ignoresInput](ignoresinput.md): A Boolean value that indicates whether the action acts upon its input or the input is ignored.
- [output](output.md): The action’s output.
- [selectedInputType](selectedinputtype.md): The type of input, in UTI format, of the input received by the action.
- [selectedOutputType](selectedoutputtype.md): The type of output, in UTI format, of the output to be produced by the action.
- [stopped](isstopped.md): A Boolean value that indicates whether the user clicked the stop button on the parent workflow.
