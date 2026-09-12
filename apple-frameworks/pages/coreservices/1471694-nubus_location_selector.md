> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471694-nubus_location_selector](https://developer.apple.com/documentation/coreservices/1471694-nubus_location_selector)

# NuBus Location Selector

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specifies information about the NuBus slot connector locations.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltNuBusConnectors](1471694-nubus_location_selector/gestaltnubusconnectors.md): A bitmap that describes the NuBus slot connector locations. On a Macintosh II, for example, the return value would have bits 9 through 14 set, indicating that 6 NuBus slots are present, at locations 9 through 14.
