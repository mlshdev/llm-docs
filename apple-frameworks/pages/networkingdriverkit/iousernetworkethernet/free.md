> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkethernet/free](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/free)

# free

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Performs any final cleanup for the service.

## Declaration

```objectivec
virtual void free();
```

<a id="Discussion"></a>

## Discussion

Use this method to perform any final cleanup of your service, such as deallocating any memory associated with your service. The system calls this method at some point after it calls your service’s [Stop](../../driverkit/ioservice/stop.md) method.

## See Also

### Configuring the Driver Service

- [init](init.md): Handles the basic initialization of the service.
- [RegisterEthernetInterface](registerethernetinterface-4jqw8.md): Deprecated. Registers your driver with the networking stack.
