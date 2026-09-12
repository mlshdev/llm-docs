> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iouserclientmethoddispatch](https://developer.apple.com/documentation/driverkit/iouserclientmethoddispatch)

# IOUserClientMethodDispatch

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Structure  
**Availability:** DriverKit · iOS · iPadOS · macOS

A structure that specifies how to validate the arguments passed to a client method function.

## Declaration

```objectivec
struct IOUserClientMethodDispatch;
```

<a id="Discussion"></a>

## Discussion

Used this structure to specify the validation checks to perform on the fields of the IOUserClientMethodArguments structure passed to an [IOUserClientMethodFunction](iouserclientmethodfunction.md).

## Topics

### Getting the Dispatch Properties

- [function](iouserclientmethoddispatch/function.md): The function to call after validating all of the specified values.
- [checkCompletionExists](iouserclientmethoddispatch/checkcompletionexists.md): An integer value indicating whether to check for the existence of a completion action.
- [checkScalarInputCount](iouserclientmethoddispatch/checkscalarinputcount.md): The expected number of scalar inputs.
- [checkStructureInputSize](iouserclientmethoddispatch/checkstructureinputsize.md): The expected size of the scalar inputs.
- [checkScalarOutputCount](iouserclientmethoddispatch/checkscalaroutputcount.md): The expected number of scalar outputs.
- [checkStructureOutputSize](iouserclientmethoddispatch/checkstructureoutputsize.md): The expected size of the scalar outputs.

## See Also

### Responding to Messages

- [ExternalMethod](iouserclient/externalmethod.md): Receive arguments from IOKit.framework IOConnectMethod calls.
- [IOUserClientMethodArguments](iouserclientmethodarguments.md): Arguments to pass to IOConnectMethod calls.
- [IOUserClientMethodFunction](iouserclientmethodfunction.md)
