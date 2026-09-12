> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iouserclientmethodarguments/scalarinput](https://developer.apple.com/documentation/driverkit/iouserclientmethodarguments/scalarinput)

# scalarInput

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit · iOS · iPadOS · macOS

An array of scalars from the caller.

## Declaration

```objectivec
const uint64_t * scalarInput;
```

## See Also

### Getting the Method Arguments

- [version](version.md)
- [selector](selector.md): The index of the method you want to execute.
- [completion](completion.md): An action for processing asynchronous data received from the service.
- [scalarInputCount](scalarinputcount.md): The number of scalars provided by the caller.
- [structureInput](structureinput.md): A data object containing the structure input from the IOKit connect method.
- [structureInputDescriptor](structureinputdescriptor.md): A memory descriptor containing structure input from the IOKit connect method.
- [scalarOutput](scalaroutput.md): An array of scalars to return to the caller.
- [scalarOutputCount](scalaroutputcount.md): The number of scalars to return to the caller.
- [structureOutput](structureoutput.md): A data object to return to the caller as structure output.
- [structureOutputDescriptor](structureoutputdescriptor.md): An IOMemoryDescriptor specified by the caller for structure output.
- [structureOutputMaximumSize](structureoutputmaximumsize.md): The maximum size of the output structure that you specified.
