> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471519-logical_page_size_selector/gestaltlogicalpagesize](https://developer.apple.com/documentation/coreservices/1471519-logical_page_size_selector/gestaltlogicalpagesize)

# gestaltLogicalPageSize

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

The logical page size. This value is defined only on machines with the MC68010, MC68020, MC68030, or MC68040 microprocessors. On a machine with the MC68000, the `Gestalt` function returns an error when called with this selector.

## Declaration

```objectivec
gestaltLogicalPageSize = 'pgsz'
```
