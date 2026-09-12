> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pcidriverkit/kpcipmcd3support](https://developer.apple.com/documentation/pcidriverkit/kpcipmcd3support)

# kPCIPMCD3Support

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit · macOS

A constant that indicates the device supports the D3 state.

## Declaration

```objectivec
kPCIPMCD3Support
```

## See Also

### Capabilities Registers

- [kPCIPMCPMESupportFromD0](kpcipmcpmesupportfromd0.md): The full-power state of the device, in which the device is running and fully operational.
- [kPCIPMCPMESupportFromD1](kpcipmcpmesupportfromd1.md): A low-power state of the device, in which the device is handling only configuration and message requests.
- [kPCIPMCPMESupportFromD2](kpcipmcpmesupportfromd2.md): A low-power state of the device, in which the device is not in use.
- [kPCIPMCPMESupportFromD3Hot](kpcipmcpmesupportfromd3hot.md): A low-power state of the device, in which the device is running in a limited capacity.
- [kPCIPMCPMESupportFromD3Cold](kpcipmcpmesupportfromd3cold.md): The state where the device has no power.
- [kPCIPMCD1Support](kpcipmcd1support.md): A constant that indicates the device supports the D1 state.
- [kPCIPMCD2Support](kpcipmcd2support.md): A constant that indicates the device supports the D2 state.
