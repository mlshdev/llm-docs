> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iouserclient/kernelcompletion](https://developer.apple.com/documentation/driverkit/iouserclient/kernelcompletion)

# KernelCompletion

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual void KernelCompletion(OSAction *action, IOReturn status, const IOUserClientAsyncArgumentsArray asyncData, uint32_t asyncDataCount);
```

## See Also

### Communicating with the Client

- [AsyncCompletion](asynccompletion.md): Send asynchronous arguments to a completion supplied by ExternalMethod().
- [IOUserClientAsyncArgumentsArray](../iouserclientasyncargumentsarray.md)
- [Arguments Array Maximum](../3325601-arguments_array_maximum.md)
- [IOUserClientAsyncReferenceArray](../iouserclientasyncreferencearray.md)
- [Reference Array Maximum](../3325602-reference_array_maximum.md)
