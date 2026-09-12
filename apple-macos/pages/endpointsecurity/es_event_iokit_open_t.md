> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_iokit_open_t](https://developer.apple.com/documentation/endpointsecurity/es_event_iokit_open_t)

# es_event_iokit_open_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the opening of an IOKit device.

## Declaration

```swift
struct es_event_iokit_open_t
```

<a id="overview"></a>

## Overview

Endpoint Security generates this event when a process calls [IOServiceOpen(\_:\_:\_:\_:)](https://developer.apple.com/documentation/iokit/1514515-ioserviceopen) in order to open a communications channel with an IOKit driver. The event doesn’t correspond to driver/device communication and provides neither visibility nor access control into devices.

## Topics

### Inspecting Event Properties

- [user_client_class](es_event_iokit_open_t/user_client_class.md): The name of the IOKit service client.
- [user_client_type](es_event_iokit_open_t/user_client_type.md): The type of the IOKit client.
- [reserved](es_event_iokit_open_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init()](es_event_iokit_open_t/init%28%29.md)
- [init(user_client_type:user_client_class:parent_registry_id:parent_path:reserved:)](es_event_iokit_open_t/init%28user_client_type_user_client_class_parent_registry_id_parent_path_reserved_%29.md)

### Instance Properties

- [parent_path](es_event_iokit_open_t/parent_path.md)
- [parent_registry_id](es_event_iokit_open_t/parent_registry_id.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Kernel Event Types

- [es_event_kextload_t](es_event_kextload_t.md): A type for an event that indicates the loading of a kernel extension.
- [es_event_kextunload_t](es_event_kextunload_t.md): A type for an event that indicates the unloading of a Kernel Extension (KEXT).

# es_event_iokit_open_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the opening of an IOKit device.

## Declaration

```objectivec
typedef struct { ... } es_event_iokit_open_t;
```

<a id="overview"></a>

## Overview

Endpoint Security generates this event when a process calls [IOServiceOpen](https://developer.apple.com/documentation/iokit/1514515-ioserviceopen) in order to open a communications channel with an IOKit driver. The event doesn’t correspond to driver/device communication and provides neither visibility nor access control into devices.

## Topics

### Inspecting Event Properties

- [user_client_class](es_event_iokit_open_t/user_client_class.md): The name of the IOKit service client.
- [user_client_type](es_event_iokit_open_t/user_client_type.md): The type of the IOKit client.
- [reserved](es_event_iokit_open_t/reserved.md): An unused field reserved for future use.

### Instance Properties

- [parent_path](es_event_iokit_open_t/parent_path.md)
- [parent_registry_id](es_event_iokit_open_t/parent_registry_id.md)

## See Also

### Kernel Event Types

- [es_event_kextload_t](es_event_kextload_t.md): A type for an event that indicates the loading of a kernel extension.
- [es_event_kextunload_t](es_event_kextunload_t.md): A type for an event that indicates the unloading of a Kernel Extension (KEXT).
