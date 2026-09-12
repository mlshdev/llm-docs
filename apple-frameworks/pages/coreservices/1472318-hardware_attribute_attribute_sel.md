> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472318-hardware_attribute_attribute_sel](https://developer.apple.com/documentation/coreservices/1472318-hardware_attribute_attribute_sel)

# Hardware Attribute Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for hardware.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltHardwareAttr](1472318-hardware_attribute_attribute_sel/gestalthardwareattr.md)
- [gestaltHasVIA1](1472318-hardware_attribute_attribute_sel/gestalthasvia1.md)
- [gestaltHasVIA2](1472318-hardware_attribute_attribute_sel/gestalthasvia2.md)
- [gestaltHasASC](1472318-hardware_attribute_attribute_sel/gestalthasasc.md)
- [gestaltHasSCC](1472318-hardware_attribute_attribute_sel/gestalthasscc.md)
- [gestaltHasSCSI](1472318-hardware_attribute_attribute_sel/gestalthasscsi.md): The `gestaltHasSCSI` bit means the machine is equipped with a SCSI implementation based on the 53C80 chip, which was introduced in the Macintosh Plus. This bit is 0 on computers with a different SCSI implementation.
- [gestaltHasSoftPowerOff](1472318-hardware_attribute_attribute_sel/gestalthassoftpoweroff.md)
- [gestaltHasSCSI961](1472318-hardware_attribute_attribute_sel/gestalthasscsi961.md): This bit is set if the machine has a SCSI implementation based on the 53C96 chip installed on an internal bus.
- [gestaltHasSCSI962](1472318-hardware_attribute_attribute_sel/gestalthasscsi962.md): This bit is set if the machine has a SCSI implementation based on the 53C96 chip installed on an external bus.
- [gestaltHasUniversalROM](1472318-hardware_attribute_attribute_sel/gestalthasuniversalrom.md)
- [gestaltHasEnhancedLtalk](1472318-hardware_attribute_attribute_sel/gestalthasenhancedltalk.md)
