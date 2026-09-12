> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservicename](https://developer.apple.com/documentation/driverkit/ioservicename)

# IOServiceName

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

A string type for setting the name of the service in the system’s registry.

## Declaration

```objectivec
typedef char[128] IOServiceName;
```

## See Also

### Registering the Service with IOKit

- [RegisterService](ioservice/registerservice.md): Starts the registration process for the service and performs any additional matching.
- [SetName](ioservice/setname.md): Sets the name of the service in the system’s registry.
- [GetRegistryEntryID](ioservice/getregistryentryid.md): Returns the registry ID for the current service.
