> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkethernet/setinterfaceenable-3v24g](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/setinterfaceenable-3v24g)

# SetInterfaceEnable

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Enables or disables your service.

## Declaration

```objectivec
virtual kern_return_t SetInterfaceEnable(bool isEnable);
```

## Parameters

- `isEnable`: A Boolean value that indicates whether to enable or disable your service. Specify `YES` to enable the service or `NO` to disable it.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

<a id="Discussion"></a>

## Discussion

Override this method and use it to start or stop the delivery of packets to and from the device. For example, change the enabled state of the queues you use to handle packets moving to or from the device.
