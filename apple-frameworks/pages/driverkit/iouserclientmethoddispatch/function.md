> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iouserclientmethoddispatch/function

# function

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit · iOS · iPadOS · macOS

The function to call after validating all of the specified values.

## Declaration

```objectivec
IOUserClientMethodFunction function;
```

<a id="Discussion"></a>

## Discussion

If this property is `NULL` and all checks pass, the system returns `kIOReturnNoCompletion` for the caller to implement the method.

## See Also

### Getting the Dispatch Properties

- [checkCompletionExists](checkcompletionexists.md): An integer value indicating whether to check for the existence of a completion action.
- [checkScalarInputCount](checkscalarinputcount.md): The expected number of scalar inputs.
- [checkStructureInputSize](checkstructureinputsize.md): The expected size of the scalar inputs.
- [checkScalarOutputCount](checkscalaroutputcount.md): The expected number of scalar outputs.
- [checkStructureOutputSize](checkstructureoutputsize.md): The expected size of the scalar outputs.
