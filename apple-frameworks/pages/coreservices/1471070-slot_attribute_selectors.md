> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471070-slot_attribute_selectors](https://developer.apple.com/documentation/coreservices/1471070-slot_attribute_selectors)

# Slot Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability for slots.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltSlotAttr](1471070-slot_attribute_selectors/gestaltslotattr.md): The selector you pass to the `Gestalt` function to determine the Slot Manager attributes.
- [gestaltSlotMgrExists](1471070-slot_attribute_selectors/gestaltslotmgrexists.md)
- [gestaltNuBusPresent](1471070-slot_attribute_selectors/gestaltnubuspresent.md)
- [gestaltSESlotPresent](1471070-slot_attribute_selectors/gestaltseslotpresent.md)
- [gestaltSE30SlotPresent](1471070-slot_attribute_selectors/gestaltse30slotpresent.md)
- [gestaltPortableSlotPresent](1471070-slot_attribute_selectors/gestaltportableslotpresent.md)
