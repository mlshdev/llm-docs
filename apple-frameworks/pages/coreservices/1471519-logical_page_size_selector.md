> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471519-logical_page_size_selector](https://developer.apple.com/documentation/coreservices/1471519-logical_page_size_selector)

# Logical Page Size Selector

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specifies logical page size information.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltLogicalPageSize](1471519-logical_page_size_selector/gestaltlogicalpagesize.md): The logical page size. This value is defined only on machines with the MC68010, MC68020, MC68030, or MC68040 microprocessors. On a machine with the MC68000, the `Gestalt` function returns an error when called with this selector.
