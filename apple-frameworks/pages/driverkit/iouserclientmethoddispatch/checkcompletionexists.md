> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iouserclientmethoddispatch/checkcompletionexists](https://developer.apple.com/documentation/driverkit/iouserclientmethoddispatch/checkcompletionexists)

# checkCompletionExists

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit · iOS · iPadOS · macOS

An integer value indicating whether to check for the existence of a completion action.

## Declaration

```objectivec
uint32_t checkCompletionExists;
```

<a id="Discussion"></a>

## Discussion

If the value of this field is a positive unsigned integer, the [completion](../iouserclientmethodarguments/completion.md) field must be set to a valid action. If the value is `0`, the [completion](../iouserclientmethodarguments/completion.md) field must be `NULL`. If the value of this field is -1U, the [completion](../iouserclientmethodarguments/completion.md) field is ignored.

## See Also

### Getting the Dispatch Properties

- [function](function.md): The function to call after validating all of the specified values.
- [checkScalarInputCount](checkscalarinputcount.md): The expected number of scalar inputs.
- [checkStructureInputSize](checkstructureinputsize.md): The expected size of the scalar inputs.
- [checkScalarOutputCount](checkscalaroutputcount.md): The expected number of scalar outputs.
- [checkStructureOutputSize](checkstructureoutputsize.md): The expected size of the scalar outputs.
