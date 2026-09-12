> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1473033-addressing_mode_attribute_select](https://developer.apple.com/documentation/coreservices/1473033-addressing_mode_attribute_select)

# Addressing Mode Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the addressing mode of the operating system.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltAddressingModeAttr](1473033-addressing_mode_attribute_select/gestaltaddressingmodeattr.md): The `Gestalt` selector you pass to determine the addressing mode attributes that are present.
- [gestalt32BitAddressing](1473033-addressing_mode_attribute_select/gestalt32bitaddressing.md): If `true`, the operating system is using 32-bit addressing mode.
- [gestalt32BitSysZone](1473033-addressing_mode_attribute_select/gestalt32bitsyszone.md): If `true`, there is a 32-bit compatible system zone.
- [gestalt32BitCapable](1473033-addressing_mode_attribute_select/gestalt32bitcapable.md): If `true`, Machine is 32-bit capable.
