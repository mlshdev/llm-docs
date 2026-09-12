> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_thread_state_t](https://developer.apple.com/documentation/endpointsecurity/es_thread_state_t)

# es_thread_state_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A description of a thread’s machine-specfiic state.

## Declaration

```swift
struct es_thread_state_t
```

<a id="overview"></a>

## Overview

To work with thread state, see the definitions in the include file `mach/thread_status.h` and corresponding machine-dependent headers.

## Topics

### Inspecting Thread State

- [flavor](es_thread_state_t/flavor.md): An indication of the representation of the machine-specific thread state.
- [state](es_thread_state_t/state.md): The machine-specific thread state.
- [es_token_t](es_token_t.md): An arbitrary buffer of data with its size.

### Initializers

- [init()](es_thread_state_t/init%28%29.md)
- [init(flavor:state:)](es_thread_state_t/init%28flavor_state_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Inspecting Event Properties

- [target](es_event_remote_thread_create_t/target.md): The process targeted to spawn a new thread.
- [thread_state](es_event_remote_thread_create_t/thread_state.md): The new thread’s state.
- [reserved](es_event_remote_thread_create_t/reserved.md): An unused field reserved for future use.

# es_thread_state_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A description of a thread’s machine-specfiic state.

## Declaration

```objectivec
typedef struct { ... } es_thread_state_t;
```

<a id="overview"></a>

## Overview

To work with thread state, see the definitions in the include file `mach/thread_status.h` and corresponding machine-dependent headers.

## Topics

### Inspecting Thread State

- [flavor](es_thread_state_t/flavor.md): An indication of the representation of the machine-specific thread state.
- [state](es_thread_state_t/state.md): The machine-specific thread state.
- [es_token_t](es_token_t.md): An arbitrary buffer of data with its size.

## See Also

### Inspecting Event Properties

- [target](es_event_remote_thread_create_t/target.md): The process targeted to spawn a new thread.
- [thread_state](es_event_remote_thread_create_t/thread_state.md): The new thread’s state.
- [reserved](es_event_remote_thread_create_t/reserved.md): An unused field reserved for future use.
