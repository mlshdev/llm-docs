> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/isstopped](https://developer.apple.com/documentation/automator/amaction/isstopped)

# isStopped (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A Boolean value that indicates whether the user clicked the stop button on the parent workflow.

## Declaration

```swift
var isStopped: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the user clicked the stop button, or [false](https://developer.apple.com/documentation/swift/false) if the workflow is still running. This property should be referenced during lengthy action processes, such as a loop, in order to determine whether to exit the operation and stop the action.

## See Also

### Getting Action Information

- [name](name.md): The name of the action.
- [progressValue](progressvalue.md): A float value between 0 and 1, which indicates how far along the action is while processing.
- [ignoresInput](ignoresinput.md): A Boolean value that indicates whether the action acts upon its input or the input is ignored.
- [output](output.md): The action’s output.
- [selectedInputType](selectedinputtype.md): The type of input, in UTI format, of the input received by the action.
- [selectedOutputType](selectedoutputtype.md): The type of output, in UTI format, of the output to be produced by the action.

# stopped (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A Boolean value that indicates whether the user clicked the stop button on the parent workflow.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isStopped) BOOL stopped;
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the user clicked the stop button, or [false](https://developer.apple.com/documentation/swift/false) if the workflow is still running. This property should be referenced during lengthy action processes, such as a loop, in order to determine whether to exit the operation and stop the action.

## See Also

### Getting Action Information

- [name](name.md): The name of the action.
- [progressValue](progressvalue.md): A float value between 0 and 1, which indicates how far along the action is while processing.
- [ignoresInput](ignoresinput.md): A Boolean value that indicates whether the action acts upon its input or the input is ignored.
- [output](output.md): The action’s output.
- [selectedInputType](selectedinputtype.md): The type of input, in UTI format, of the input received by the action.
- [selectedOutputType](selectedoutputtype.md): The type of output, in UTI format, of the output to be produced by the action.
