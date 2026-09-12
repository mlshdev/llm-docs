> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_events_t/kextload](https://developer.apple.com/documentation/endpointsecurity/es_events_t/kextload)

# kextload (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

Properties of an event that indicates the loading of a Kernel Extension (KEXT).

## Declaration

```swift
var kextload: es_event_kextload_t { get set }
```

## See Also

### Kernel Events

- [iokit_open](iokit_open.md): Properties of an event that indicates the opening of an IOKit device.
- [kextunload](kextunload.md): Properties of an event that indicates the unloading of a Kernel Extension (KEXT).

# kextload (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

Properties of an event that indicates the loading of a Kernel Extension (KEXT).

## Declaration

```objectivec
es_event_kextload_t kextload;
```

## See Also

### Kernel Events

- [iokit_open](iokit_open.md): Properties of an event that indicates the opening of an IOKit device.
- [kextunload](kextunload.md): Properties of an event that indicates the unloading of a Kernel Extension (KEXT).
