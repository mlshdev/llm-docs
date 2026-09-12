> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iouserclient/asynccompletion](https://developer.apple.com/documentation/driverkit/iouserclient/asynccompletion)

# AsyncCompletion

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Send asynchronous arguments to a completion supplied by ExternalMethod().

## Declaration

```objectivec
virtual void AsyncCompletion(OSAction *action, IOReturn status, const IOUserClientAsyncArgumentsArray asyncData, uint32_t asyncDataCount);
```

## Parameters

- `action`: OSAction passed to IOExternalMethod().
- `status`: An IOReturn status value to be sent.
- `asyncData`: An array of scalar data to be sent.
- `asyncDataCount`: Count of valid data in asyncData.

<a id="Discussion"></a>

## Discussion

IOConnectAsyncMethod calls from the owner of the connection come will pass an OSAction instance. To deliver the asynchronous results the driver calls AsyncCompletion().

## See Also

### Communicating with the Client

- [KernelCompletion](kernelcompletion.md)
- [IOUserClientAsyncArgumentsArray](../iouserclientasyncargumentsarray.md)
- [Arguments Array Maximum](../3325601-arguments_array_maximum.md)
- [IOUserClientAsyncReferenceArray](../iouserclientasyncreferencearray.md)
- [Reference Array Maximum](../3325602-reference_array_maximum.md)
