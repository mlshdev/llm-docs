> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iouserclient/externalmethod](https://developer.apple.com/documentation/driverkit/iouserclient/externalmethod)

# ExternalMethod

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Receive arguments from IOKit.framework IOConnectMethod calls.

## Declaration

```objectivec
virtual kern_return_t ExternalMethod(uint64_t selector, IOUserClientMethodArguments *arguments, const IOUserClientMethodDispatch *dispatch, OSObject *target, void *reference);
```

## Parameters

- `selector`: Selector argument to `IOConnectMethod`.
- `arguments`: Structure describing all arguments being passed to `IOConnectMethod`. See the [IOUserClientMethodArguments](../iouserclientmethodarguments.md) definition.
- `dispatch`: NULL when called in the driver. The [ExternalMethod](externalmethod.md) implementation may be called with a non-NULL argument to check certain fields of the arguments structure before calling a target procedure specified by the dispatch structure ‘function’ field, and the ‘target’ and ‘reference’ parameters to this method. See the [IOUserClientMethodDispatch](../iouserclientmethoddispatch.md) definition.
- `target`: Target for the dispatch function
- `reference`: Reference constant for the dispatch function

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See IOReturn.h for error codes.

<a id="Discussion"></a>

## Discussion

IOConnectMethod calls from the owner of the connection come here. Any argument may be passed as NULL if not passed by the caller.

## See Also

### Responding to Messages

- [IOUserClientMethodArguments](../iouserclientmethodarguments.md): Arguments to pass to IOConnectMethod calls.
- [IOUserClientMethodDispatch](../iouserclientmethoddispatch.md): A structure that specifies how to validate the arguments passed to a client method function.
- [IOUserClientMethodFunction](../iouserclientmethodfunction.md)
