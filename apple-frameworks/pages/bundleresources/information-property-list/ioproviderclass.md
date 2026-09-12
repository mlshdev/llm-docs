> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/ioproviderclass](https://developer.apple.com/documentation/bundleresources/information-property-list/ioproviderclass)

# IOProviderClass

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.0+

The name of the class that your driver expects to provide the implementation for its provider object.

## Details

`IOProviderClass`

<a id="Discussion"></a>

## Discussion

The value of this key is a string that contains the name of an [IOService](https://developer.apple.com/documentation/kernel/ioservice-1g) subclass. This class corresponds to the provider object that the system passes to your [IOService](../../driverkit/ioservice.md) subclass at startup. (For a kernel extension, the system passes the provider object to the [start](https://developer.apple.com/documentation/kernel/ioservice/1532606-start) method of your [`IOService`](https://developer.apple.com/documentation/kernel/ioservice-1g) subclass. For a DriverKit extension, the system passes it to the [Start](../../driverkit/ioservice/start.md) method of your [IOService](../../driverkit/ioservice.md) subclass.) Use the provider object in your driver you receive to communicate with the underlying device.

## See Also

### Driver Classes

- [IOUserClass](iouserclass.md): The name of your driver’s main class, which is the entry point for interacting with your driver’s code.
- [IOClass](ioclass.md): The name of the class to instantiate from your driver.
- [IOUserClientClass](iouserclientclass.md): The name of the class to instantiate when the system requires a client connection to the driver.
- [IOUserServerName](iouserservername.md): The name that the system uses to facilitate communication between your driver and other clients.
