> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1471024-toolbox_trap_table_second_half_s

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
