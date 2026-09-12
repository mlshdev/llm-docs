> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_remote_thread_create_t/thread_state](https://developer.apple.com/documentation/endpointsecurity/es_event_remote_thread_create_t/thread_state)

# thread_state (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The new thread’s state.

## Declaration

```swift
var thread_state: UnsafeMutablePointer<es_thread_state_t>?
```

<a id="Discussion"></a>

## Discussion

When creating a thread with `thread_create_running(_:_:_:_:_:)`, this value contains an [es_thread_state_t](../es_thread_state_t.md) value. When using `thread_create(_:_:)`, this value is `NULL`.

## See Also

### Inspecting Event Properties

- [target](target.md): The process targeted to spawn a new thread.
- [es_thread_state_t](../es_thread_state_t.md): A description of a thread’s machine-specfiic state.
- [reserved](reserved.md): An unused field reserved for future use.

# thread_state (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The new thread’s state.

## Declaration

```objectivec
es_thread_state_t * thread_state;
```

<a id="Discussion"></a>

## Discussion

When creating a thread with `thread_create_running(_:_:_:_:_:)`, this value contains an [es_thread_state_t](../es_thread_state_t.md) value. When using `thread_create(_:_:)`, this value is `NULL`.

## See Also

### Inspecting Event Properties

- [target](target.md): The process targeted to spawn a new thread.
- [es_thread_state_t](../es_thread_state_t.md): A description of a thread’s machine-specfiic state.
- [reserved](reserved.md): An unused field reserved for future use.
