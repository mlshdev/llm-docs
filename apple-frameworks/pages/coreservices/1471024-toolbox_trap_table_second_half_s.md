> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471024-toolbox_trap_table_second_half_s](https://developer.apple.com/documentation/coreservices/1471024-toolbox_trap_table_second_half_s)

# Toolbox Trap Table (Second Half) Selector

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specifies address information for the second half of the Toolbox trap table.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltExtToolboxTable](1471024-toolbox_trap_table_second_half_s/gestaltexttoolboxtable.md): The base address of the second half of the Toolbox trap table if the table is discontiguous. If the table is contiguous, this selector returns 0.
