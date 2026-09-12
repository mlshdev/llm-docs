> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/ignoresinput](https://developer.apple.com/documentation/automator/amaction/ignoresinput)

# ignoresInput (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+

A Boolean value that indicates whether the action acts upon its input or the input is ignored.

## Declaration

```swift
var ignoresInput: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the action acts upon its input, otherwise [false](https://developer.apple.com/documentation/swift/false).

Many actions act upon their input, but an action may merely pass on its input or, rarely, ignore it.

## See Also

### Getting Action Information

- [name](name.md): The name of the action.
- [progressValue](progressvalue.md): A float value between 0 and 1, which indicates how far along the action is while processing.
- [output](output.md): The action’s output.
- [selectedInputType](selectedinputtype.md): The type of input, in UTI format, of the input received by the action.
- [selectedOutputType](selectedoutputtype.md): The type of output, in UTI format, of the output to be produced by the action.
- [isStopped](isstopped.md): A Boolean value that indicates whether the user clicked the stop button on the parent workflow.

# ignoresInput (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+

A Boolean value that indicates whether the action acts upon its input or the input is ignored.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL ignoresInput;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the action acts upon its input, otherwise [false](https://developer.apple.com/documentation/swift/false).

Many actions act upon their input, but an action may merely pass on its input or, rarely, ignore it.

## See Also

### Getting Action Information

- [name](name.md): The name of the action.
- [progressValue](progressvalue.md): A float value between 0 and 1, which indicates how far along the action is while processing.
- [output](output.md): The action’s output.
- [selectedInputType](selectedinputtype.md): The type of input, in UTI format, of the input received by the action.
- [selectedOutputType](selectedoutputtype.md): The type of output, in UTI format, of the output to be produced by the action.
- [stopped](isstopped.md): A Boolean value that indicates whether the user clicked the stop button on the parent workflow.
