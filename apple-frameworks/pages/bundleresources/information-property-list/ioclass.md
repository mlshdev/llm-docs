> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/ioclass](https://developer.apple.com/documentation/bundleresources/information-property-list/ioclass)

# IOClass

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.0+

The name of the class to instantiate from your driver.

## Details

`IOClass`

<a id="Discussion"></a>

## Discussion

The value of this key is a string that contains the name of a custom [IOService](https://developer.apple.com/documentation/kernel/ioservice-1g) subclass in your driver. When the system successfully matches one of your driver’s personalities to a device, it instantiates the class in this key and calls its [start](https://developer.apple.com/documentation/kernel/ioservice/1532606-start) method.

For the personalities in a DriverKit extension, specify the value `IOUserService` unless otherwise directed by the documentation. For example, the [IOUserHIDEventService](../../hiddriverkit/iouserhideventservice.md) class expects you to specify the value `AppleUserHIDEventService`.

## See Also

### Driver Classes

- [IOUserClass](iouserclass.md): The name of your driver’s main class, which is the entry point for interacting with your driver’s code.
- [IOProviderClass](ioproviderclass.md): The name of the class that your driver expects to provide the implementation for its provider object.
- [IOUserClientClass](iouserclientclass.md): The name of the class to instantiate when the system requires a client connection to the driver.
- [IOUserServerName](iouserservername.md): The name that the system uses to facilitate communication between your driver and other clients.
