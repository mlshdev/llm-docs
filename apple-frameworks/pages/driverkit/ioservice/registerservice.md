> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservice/registerservice](https://developer.apple.com/documentation/driverkit/ioservice/registerservice)

# RegisterService

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Starts the registration process for the service and performs any additional matching.

## Declaration

```objectivec
virtual kern_return_t RegisterService();
```

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../error-codes.md).

## Mentioned In

- [Creating a Driver Using the DriverKit SDK](../creating-a-driver-using-the-driverkit-sdk.md)

<a id="Discussion"></a>

## Discussion

After setting up your service in your custom [Start](start.md) method, call this method to let the system know your service is running.

## See Also

### Registering the Service with IOKit

- [SetName](setname.md): Sets the name of the service in the system’s registry.
- [GetRegistryEntryID](getregistryentryid.md): Returns the registry ID for the current service.
- [IOServiceName](../ioservicename.md): A string type for setting the name of the service in the system’s registry.
