> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472400-physical_ram_size_selector](https://developer.apple.com/documentation/coreservices/1472400-physical_ram_size_selector)

# Physical RAM Size Selector

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specifies information about the size of the physical RAM.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltPhysicalRAMSize](1472400-physical_ram_size_selector/gestaltphysicalramsize.md): The selector you pass to the `Gestalt` function to determine the number of bytes of physical RAM currently installed.
