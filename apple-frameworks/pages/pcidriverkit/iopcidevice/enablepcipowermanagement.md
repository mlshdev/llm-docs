> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pcidriverkit/iopcidevice/enablepcipowermanagement](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/enablepcipowermanagement)

# EnablePCIPowerManagement

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · macOS

Configures the device’s PCI bus power management capabilities.

## Declaration

```objectivec
virtual kern_return_t EnablePCIPowerManagement(uint64_t state);
```

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) if the specified state is supported, or another value if isn’t supported. See [Error Codes](../../driverkit/error-codes.md).

<a id="discussion"></a>

## Discussion

- state: The flags for the power management capabilities you want to enable. If you specify `0xffffffff`, this method lets the [IOPCIDevice](../iopcidevice.md) object determine the desired state. Specify [kPCIPMCSPowerStateD0](../kpcipmcspowerstated0.md) to disable PCI power management. For a list of possible flags, see [Power Management Capabilities](../power-management-capabilities-enum.md).

## See Also

### Managing Power

- [HasPCIPowerManagement](haspcipowermanagement.md): Determines whether the device has the specified PCI bus power management capabilities.
- [Power Management Capabilities](../power-management-capabilities-enum.md): Constants you use to get and set the state of the device’s power management features.
- [Power Management Control/Status Register](../power-management-control-status-register-enum.md): Constants you use when checking bits in the power management register.
