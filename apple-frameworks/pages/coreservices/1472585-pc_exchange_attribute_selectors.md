> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1472585-pc_exchange_attribute_selectors

# PC Exchange Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for PC Exchange.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltPCXAttr](1472585-pc_exchange_attribute_selectors/gestaltpcxattr.md): The selector you pass to the `Gestalt` function to determine the PC Exchange attributes.
- [gestaltPCXHas8and16BitFAT](1472585-pc_exchange_attribute_selectors/gestaltpcxhas8and16bitfat.md)
- [gestaltPCXHasProDOS](1472585-pc_exchange_attribute_selectors/gestaltpcxhasprodos.md)
- [gestaltPCXNewUI](1472585-pc_exchange_attribute_selectors/gestaltpcxnewui.md)
- [gestaltPCXUseICMapping](1472585-pc_exchange_attribute_selectors/gestaltpcxuseicmapping.md)
