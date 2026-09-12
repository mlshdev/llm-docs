> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflow/input](https://developer.apple.com/documentation/automator/amworkflow/input)

# input (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

The input data that is passed to the first action in the workflow.

## Declaration

```swift
var input: Any? { get set }
```

<a id="return-value"></a>

## Return Value

The input for the first action in the workflow. Should be a data type the action can use, or a type that can be converted to one the action can use. Use `setInput:` to set the input data for the workflow.

## See Also

### Working with the Workflow’s Input and Output

- [output](output.md): The output data that is provided by the last action in the workflow.

# input (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

The input data that is passed to the first action in the workflow.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id input;
```

<a id="return-value"></a>

## Return Value

The input for the first action in the workflow. Should be a data type the action can use, or a type that can be converted to one the action can use. Use `setInput:` to set the input data for the workflow.

## See Also

### Working with the Workflow’s Input and Output

- [output](output.md): The output data that is provided by the last action in the workflow.
