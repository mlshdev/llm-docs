> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iouserclientmethoddispatch/checkscalaroutputcount

# checkScalarOutputCount

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit · iOS · iPadOS · macOS

The expected number of scalar outputs.

## Declaration

```objectivec
uint32_t checkScalarOutputCount;
```

<a id="Discussion"></a>

## Discussion

If the value of this field is [kIOUserClientVariableStructureSize](../kiouserclientvariablestructuresize.md), ignore the value of the [scalarOutputCount](../iouserclientmethodarguments/scalaroutputcount.md) field. For all other values, the value in this property must equal the value in the [scalarOutputCount](../iouserclientmethodarguments/scalaroutputcount.md) field of the [IOUserClientMethodArguments](../iouserclientmethodarguments.md) structure.

## See Also

### Getting the Dispatch Properties

- [function](function.md): The function to call after validating all of the specified values.
- [checkCompletionExists](checkcompletionexists.md): An integer value indicating whether to check for the existence of a completion action.
- [checkScalarInputCount](checkscalarinputcount.md): The expected number of scalar inputs.
- [checkStructureInputSize](checkstructureinputsize.md): The expected size of the scalar inputs.
- [checkStructureOutputSize](checkstructureoutputsize.md): The expected size of the scalar outputs.
