> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_thread_t](https://developer.apple.com/documentation/endpointsecurity/es_thread_t)

# es_thread_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A structure that represents a thread in a process.

## Declaration

```swift
struct es_thread_t
```

## Topics

### Identifying the Thread

- [thread_id](es_thread_t/thread_id.md): The unique identifier of the thread.

### Initializers

- [init()](es_thread_t/init%28%29.md)
- [init(thread_id:)](es_thread_t/init%28thread_id_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Inspecting Thread Properties

- [thread](es_message_t/thread.md): The thread that took the action defined in a message.

# es_thread_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A structure that represents a thread in a process.

## Declaration

```objectivec
typedef struct { ... } es_thread_t;
```

## Topics

### Identifying the Thread

- [thread_id](es_thread_t/thread_id.md): The unique identifier of the thread.

## See Also

### Inspecting Thread Properties

- [thread](es_message_t/thread.md): The thread that took the action defined in a message.
