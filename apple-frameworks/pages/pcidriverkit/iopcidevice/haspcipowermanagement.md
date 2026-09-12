> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pcidriverkit/iopcidevice/haspcipowermanagement](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/haspcipowermanagement)

# HasPCIPowerManagement

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · macOS

Determines whether the device has the specified PCI bus power management capabilities.

## Declaration

```objectivec
virtual kern_return_t HasPCIPowerManagement(uint64_t state);
```

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) if the specified state is supported, or another value if isn’t supported. See [Error Codes](../../driverkit/error-codes.md).

<a id="discussion"></a>

## Discussion

- state: The flags for the power management capabilities you want to check. If you specify `0`, this method checks for the power-management information in the device’s registry. For a list of possible flags, see [Power Management Capabilities](../power-management-capabilities-enum.md).

## See Also

### Managing Power

- [EnablePCIPowerManagement](enablepcipowermanagement.md): Configures the device’s PCI bus power management capabilities.
- [Power Management Capabilities](../power-management-capabilities-enum.md): Constants you use to get and set the state of the device’s power management features.
- [Power Management Control/Status Register](../power-management-control-status-register-enum.md): Constants you use when checking bits in the power management register.
