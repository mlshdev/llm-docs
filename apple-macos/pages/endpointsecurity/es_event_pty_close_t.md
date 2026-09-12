> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_pty_close_t](https://developer.apple.com/documentation/endpointsecurity/es_event_pty_close_t)

# es_event_pty_close_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the closing of a pseudoterminal device.

## Declaration

```swift
struct es_event_pty_close_t
```

## Topics

### Inspecting Event Properties

- [dev](es_event_pty_close_t/dev.md): The major and minor numbers of the device.
- [reserved](es_event_pty_close_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init()](es_event_pty_close_t/init%28%29.md)
- [init(dev:reserved:)](es_event_pty_close_t/init%28dev_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Pseudoterminal Event Types

- [es_event_pty_grant_t](es_event_pty_grant_t.md): A type for an event that indicates the granting of a pseudoterminal device to a user.

# es_event_pty_close_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the closing of a pseudoterminal device.

## Declaration

```objectivec
typedef struct { ... } es_event_pty_close_t;
```

## Topics

### Inspecting Event Properties

- [dev](es_event_pty_close_t/dev.md): The major and minor numbers of the device.
- [reserved](es_event_pty_close_t/reserved.md): An unused field reserved for future use.

## See Also

### Pseudoterminal Event Types

- [es_event_pty_grant_t](es_event_pty_grant_t.md): A type for an event that indicates the granting of a pseudoterminal device to a user.
