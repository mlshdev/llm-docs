> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471440-toolbox_trap_table_selector](https://developer.apple.com/documentation/coreservices/1471440-toolbox_trap_table_selector)

# Toolbox Trap Table Selector

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specifies base address information for the Toolbox trap dispatch table.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltToolboxTable](1471440-toolbox_trap_table_selector/gestalttoolboxtable.md): The selector you pass to the `Gestalt` function to determine the base address of the Toolbox trap dispatch table.
