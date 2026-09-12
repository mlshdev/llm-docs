> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iouserclientmethodfunction](https://developer.apple.com/documentation/driverkit/iouserclientmethodfunction)

# IOUserClientMethodFunction

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
typedef int (*)(class OSObject *, void *, struct IOUserClientMethodArguments *) IOUserClientMethodFunction;
```

## See Also

### Responding to Messages

- [ExternalMethod](iouserclient/externalmethod.md): Receive arguments from IOKit.framework IOConnectMethod calls.
- [IOUserClientMethodArguments](iouserclientmethodarguments.md): Arguments to pass to IOConnectMethod calls.
- [IOUserClientMethodDispatch](iouserclientmethoddispatch.md): A structure that specifies how to validate the arguments passed to a client method function.
