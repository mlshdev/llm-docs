> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scsicontrollerdriverkit/kioservicepowercapabilitypause

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
