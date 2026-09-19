> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1471320-os_trap_table_selector

# OS Trap Table Selector

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specifies base address information for the operating system trap dispatch table.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltOSTable](1471320-os_trap_table_selector/gestaltostable.md): The selector you pass to the `Gestalt` function to determine the base address of the operating system trap dispatch table.
