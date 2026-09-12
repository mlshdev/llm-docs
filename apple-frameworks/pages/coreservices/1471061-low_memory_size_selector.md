> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471061-low_memory_size_selector](https://developer.apple.com/documentation/coreservices/1471061-low_memory_size_selector)

# Low Memory Size Selector

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specifies information about the size of the low-memory area.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltLowMemorySize](1471061-low_memory_size_selector/gestaltlowmemorysize.md): The size (in bytes) of the low-memory area. The low-memory area is used for vectors, global variables, and dispatch tables
