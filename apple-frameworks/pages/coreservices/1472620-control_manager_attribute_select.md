> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1472620-control_manager_attribute_select

# Control Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Control Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltControlMgrAttr](1472620-control_manager_attribute_select/gestaltcontrolmgrattr.md)
- [gestaltControlMgrPresent](1472620-control_manager_attribute_select/gestaltcontrolmgrpresent.md): If the bit specified by this mask is set, the Control Manager functionality for Appearance Manager 1.1 is available. This bit is set for Mac OS 8.5 and later.
- [gestaltControlMgrPresentBit](1472620-control_manager_attribute_select/gestaltcontrolmgrpresentbit.md)
- [gestaltControlMsgPresentMask](1472620-control_manager_attribute_select/gestaltcontrolmsgpresentmask.md)
