> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_message_t/thread](https://developer.apple.com/documentation/endpointsecurity/es_message_t/thread)

# thread (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The thread that took the action defined in a message.

## Declaration

```swift
var thread: UnsafeMutablePointer<es_thread_t>?
```

<a id="Discussion"></a>

## Discussion

This field may be NULL when threading doesn’t apply. This includes trace events that describe calls to `ptrace(PT_TRACE_ME`) or code-signing invalidation events resulting from another process calling `csops(CS_OPS_MARKINVALID)`.

## See Also

### Inspecting Thread Properties

- [es_thread_t](../es_thread_t.md): A structure that represents a thread in a process.

# thread (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The thread that took the action defined in a message.

## Declaration

```objectivec
es_thread_t * thread;
```

<a id="Discussion"></a>

## Discussion

This field may be NULL when threading doesn’t apply. This includes trace events that describe calls to `ptrace(PT_TRACE_ME`) or code-signing invalidation events resulting from another process calling `csops(CS_OPS_MARKINVALID)`.

## See Also

### Inspecting Thread Properties

- [es_thread_t](../es_thread_t.md): A structure that represents a thread in a process.
