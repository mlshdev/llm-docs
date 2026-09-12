> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkethernet/init](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/init)

# init

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Handles the basic initialization of the service.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

`YES` if initialization was successful, or `NO` if an error occurred.

<a id="Discussion"></a>

## Discussion

The system calls this method shortly after it instantiates your [IOUserNetworkEthernet](../iousernetworkethernet.md) subclass, and before it calls the [Start](../../driverkit/ioservice/start.md) method of your service. Limit the work you do in this method to simple tasks that must occur before your service stats. For example, you might use this method to allocate memory for your `ivars` structure.

Always call the `super` implementation of this method at some point.

## See Also

### Configuring the Driver Service

- [free](free.md): Performs any final cleanup for the service.
- [RegisterEthernetInterface](registerethernetinterface-4jqw8.md): Deprecated. Registers your driver with the networking stack.
