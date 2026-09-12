> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/selectedinputtype](https://developer.apple.com/documentation/automator/amaction/selectedinputtype)

# selectedInputType (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.6+

The type of input, in UTI format, of the input received by the action.

## Declaration

```swift
var selectedInputType: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Getting this value provides the type of input the action is configured to accept. For example, your action may have the ability to accept files and folders, or documents, depending on how it’s configured and what action precedes it in the workflow.

The input types the action supports are specified in the action’s `Info.plist` file. By default, this property defaults to first input type in the `Info.plist` file.

Through its interface, the action can could be configured to allow the user to specify the type of input the action should accept. For example, a Contacts action may allow the user to configure whether the action accepts people or groups. In cases like this, set this property value to explicitly indicate the input type the action accepts. Setting this value to accurately reflect the appropriate type of input helps Automator determine whether the input the action receives is compatible, or can be made compatible, with the action.

## See Also

### Getting Action Information

- [name](name.md): The name of the action.
- [progressValue](progressvalue.md): A float value between 0 and 1, which indicates how far along the action is while processing.
- [ignoresInput](ignoresinput.md): A Boolean value that indicates whether the action acts upon its input or the input is ignored.
- [output](output.md): The action’s output.
- [selectedOutputType](selectedoutputtype.md): The type of output, in UTI format, of the output to be produced by the action.
- [isStopped](isstopped.md): A Boolean value that indicates whether the user clicked the stop button on the parent workflow.

# selectedInputType (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.6+

The type of input, in UTI format, of the input received by the action.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSString * selectedInputType;
```

<a id="Discussion"></a>

## Discussion

Getting this value provides the type of input the action is configured to accept. For example, your action may have the ability to accept files and folders, or documents, depending on how it’s configured and what action precedes it in the workflow.

The input types the action supports are specified in the action’s `Info.plist` file. By default, this property defaults to first input type in the `Info.plist` file.

Through its interface, the action can could be configured to allow the user to specify the type of input the action should accept. For example, a Contacts action may allow the user to configure whether the action accepts people or groups. In cases like this, set this property value to explicitly indicate the input type the action accepts. Setting this value to accurately reflect the appropriate type of input helps Automator determine whether the input the action receives is compatible, or can be made compatible, with the action.

## See Also

### Getting Action Information

- [name](name.md): The name of the action.
- [progressValue](progressvalue.md): A float value between 0 and 1, which indicates how far along the action is while processing.
- [ignoresInput](ignoresinput.md): A Boolean value that indicates whether the action acts upon its input or the input is ignored.
- [output](output.md): The action’s output.
- [selectedOutputType](selectedoutputtype.md): The type of output, in UTI format, of the output to be produced by the action.
- [stopped](isstopped.md): A Boolean value that indicates whether the user clicked the stop button on the parent workflow.
