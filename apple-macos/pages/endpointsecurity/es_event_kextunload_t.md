> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_kextunload_t](https://developer.apple.com/documentation/endpointsecurity/es_event_kextunload_t)

# es_event_kextunload_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the unloading of a Kernel Extension (KEXT).

## Declaration

```swift
struct es_event_kextunload_t
```

## Topics

### Inspecting Event Properties

- [identifier](es_event_kextunload_t/identifier.md): A string identifying the kernel extension.
- [reserved](es_event_kextunload_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init()](es_event_kextunload_t/init%28%29.md)
- [init(identifier:reserved:)](es_event_kextunload_t/init%28identifier_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Kernel Event Types

- [es_event_iokit_open_t](es_event_iokit_open_t.md): A type for an event that indicates the opening of an IOKit device.
- [es_event_kextload_t](es_event_kextload_t.md): A type for an event that indicates the loading of a kernel extension.

# es_event_kextunload_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the unloading of a Kernel Extension (KEXT).

## Declaration

```objectivec
typedef struct { ... } es_event_kextunload_t;
```

## Topics

### Inspecting Event Properties

- [identifier](es_event_kextunload_t/identifier.md): A string identifying the kernel extension.
- [reserved](es_event_kextunload_t/reserved.md): An unused field reserved for future use.

## See Also

### Kernel Event Types

- [es_event_iokit_open_t](es_event_iokit_open_t.md): A type for an event that indicates the opening of an IOKit device.
- [es_event_kextload_t](es_event_kextload_t.md): A type for an event that indicates the loading of a kernel extension.
