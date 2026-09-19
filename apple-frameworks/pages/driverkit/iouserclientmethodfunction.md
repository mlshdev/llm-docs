> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iouserclientmethodfunction

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
