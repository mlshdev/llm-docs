> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1472262-terminal_manager_attribute_selec

# Terminal Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Terminal Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltTermMgrAttr](1472262-terminal_manager_attribute_selec/gestalttermmgrattr.md): The selector you pass to the `Gestalt` function to determine the Terminal Manager attributes.
- [gestaltTermMgrPresent](1472262-terminal_manager_attribute_selec/gestalttermmgrpresent.md)
- [gestaltTermMgrErrorString](1472262-terminal_manager_attribute_selec/gestalttermmgrerrorstring.md)
