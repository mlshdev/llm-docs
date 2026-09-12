> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/kioservicepowercapabilitypause](https://developer.apple.com/documentation/scsicontrollerdriverkit/kioservicepowercapabilitypause)

# kIOServicePowerCapabilityPause

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Macro  
**Availability:** DriverKit

A PCIe-specific power state for halting transactions while reallocating resources.

## Declaration

```objectivec
#define kIOServicePowerCapabilityPause
```

<a id="Discussion"></a>

## Discussion

[IOUserSCSIParallelInterfaceController](iouserscsiparallelinterfacecontroller.md) supports this power state, in addition to the [kIOServicePowerCapabilityOn](../driverkit/kioservicepowercapabilityon.md) and [kIOServicePowerCapabilityOff](../driverkit/kioservicepowercapabilityoff.md) power states defined in the base [DriverKit](../driverkit.md) framework. Implement the [SetPowerState](../driverkit/ioservice/setpowerstate.md) method in your service object and use it to put your driver in a safe state for any of these power states.
