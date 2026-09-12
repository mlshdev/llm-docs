> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3180698-getregistryentryid](https://developer.apple.com/documentation/kernel/ioservice/3180698-getregistryentryid)

# GetRegistryEntryID

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns the registry ID for the current service.

## Declaration

```objectivec
virtual kern_return_t GetRegistryEntryID(uint64_t *registryEntryID);
```

```objectivec
kern_return_t GetRegistryEntryID(uint64_t *registryEntryID, OSDispatchMethod supermethod);
```

## Parameters

- `registryEntryID`: A pointer to an integer that, on return, contains the registry ID for the service. It is a programmer error to specify `NULL` or an invalid pointer for this parameter.

<a id="return_value"></a>

## Return Value

[kIOReturnSuccess](https://developer.apple.com/documentation/driverkit/kioreturnsuccess) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](https://developer.apple.com/documentation/driverkit/error-codes).

## See Also

### Registering the Service with IOKit

- [RegisterService](3180701-registerservice.md): Starts the registration process for the service and performs any additional matching.
- [SetName](https://developer.apple.com/documentation/driverkit/ioservice/setname): Sets the name of the service in the system's registry.
- [IOServiceName](https://developer.apple.com/documentation/driverkit/ioservicename): A string type for setting the name of the service in the system's registry.
