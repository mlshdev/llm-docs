> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/iouserservername](https://developer.apple.com/documentation/bundleresources/information-property-list/iouserservername)

# IOUserServerName

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.14+

The name that the system uses to facilitate communication between your driver and other clients.

## Details

`IOUserServerName`

<a id="Discussion"></a>

## Discussion

Typically, you set the value of this key to your kext or DriverKit extension’s bundle identifier. The system registers your driver under the specified server name, and uses that name to facilitate communications between your driver and other clients, including the kernel itself.

## See Also

### Driver Classes

- [IOUserClass](iouserclass.md): The name of your driver’s main class, which is the entry point for interacting with your driver’s code.
- [IOProviderClass](ioproviderclass.md): The name of the class that your driver expects to provide the implementation for its provider object.
- [IOClass](ioclass.md): The name of the class to instantiate from your driver.
- [IOUserClientClass](iouserclientclass.md): The name of the class to instantiate when the system requires a client connection to the driver.
