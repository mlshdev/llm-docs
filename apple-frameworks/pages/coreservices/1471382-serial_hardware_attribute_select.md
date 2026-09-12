> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471382-serial_hardware_attribute_select](https://developer.apple.com/documentation/coreservices/1471382-serial_hardware_attribute_select)

# Serial Hardware Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify serial hardware attributes.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltSerialAttr](1471382-serial_hardware_attribute_select/gestaltserialattr.md): The selector you pass to the `Gestalt` function to determine the serial hardware attributes of the machine, such as whether or not the GPIa line is connected and can be used for external clocking.
- [gestaltHasGPIaToDCDa](1471382-serial_hardware_attribute_select/gestalthasgpiatodcda.md)
- [gestaltHasGPIaToRTxCa](1471382-serial_hardware_attribute_select/gestalthasgpiatortxca.md)
- [gestaltHasGPIbToDCDb](1471382-serial_hardware_attribute_select/gestalthasgpibtodcdb.md)
- [gestaltHidePortA](1471382-serial_hardware_attribute_select/gestalthideporta.md)
- [gestaltHidePortB](1471382-serial_hardware_attribute_select/gestalthideportb.md)
- [gestaltPortADisabled](1471382-serial_hardware_attribute_select/gestaltportadisabled.md)
- [gestaltPortBDisabled](1471382-serial_hardware_attribute_select/gestaltportbdisabled.md)
