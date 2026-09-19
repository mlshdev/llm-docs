> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/tiousb20buscurrent

# tIOUSB20BusCurrent

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 19.0+

Constants for the available current levels for USB 2.0 devices.

## Declaration

```objectivec
enum tIOUSB20BusCurrent : unsigned int;
```

## Topics

### Getting the Current Limits

- [kIOUSB20BusCurrentMinimum](tiousb20buscurrent/kiousb20buscurrentminimum.md)
- [kIOUSB20BusCurrentDefault](tiousb20buscurrent/kiousb20buscurrentdefault.md)
- [kIOUSB20BusCurrentMaxPowerUnits](tiousb20buscurrent/kiousb20buscurrentmaxpowerunits.md)

## See Also

### Electrical Characteristics

- [tIOUSB30BusCurrent](tiousb30buscurrent.md): Constants for the available power levels of USB 3.0 devices.
- [tIOUSBBusVoltage](tiousbbusvoltage.md): A constant for the USB bus voltage.
