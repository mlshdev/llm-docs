> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3180701-registerservice](https://developer.apple.com/documentation/kernel/ioservice/3180701-registerservice)

# RegisterService

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Starts the registration process for the service and performs any additional matching.

## Declaration

```objectivec
virtual kern_return_t RegisterService(void);
```

```objectivec
kern_return_t RegisterService(OSDispatchMethod supermethod);
```

<a id="return_value"></a>

## Return Value

[kIOReturnSuccess](https://developer.apple.com/documentation/driverkit/kioreturnsuccess) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](https://developer.apple.com/documentation/driverkit/error-codes).

<a id="discussion"></a>

## Discussion

After setting up your service in your custom [Start](3180710-start.md) method, call this method to let the system know your service is running.

## See Also

### Registering the Service with IOKit

- [SetName](https://developer.apple.com/documentation/driverkit/ioservice/setname): Sets the name of the service in the system's registry.
- [GetRegistryEntryID](3180698-getregistryentryid.md): Returns the registry ID for the current service.
- [IOServiceName](https://developer.apple.com/documentation/driverkit/ioservicename): A string type for setting the name of the service in the system's registry.
