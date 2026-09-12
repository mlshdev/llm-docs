> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_auth_result_t](https://developer.apple.com/documentation/endpointsecurity/es_auth_result_t)

# es_auth_result_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

Values used when responding to an authorization event.

## Declaration

```swift
struct es_auth_result_t
```

## Topics

### Authorization Values

- [ES_AUTH_RESULT_ALLOW](es_auth_result_allow.md): The caller authorizes the event and allows it to continue.
- [ES_AUTH_RESULT_DENY](es_auth_result_deny.md): The caller denies authorization to the event and prevents it from continuing.

### Initializers

- [init(\_:)](es_auth_result_t/init%28__%29.md)
- [init(rawValue:)](es_auth_result_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_auth_result_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Responding to Events

- [es_respond_auth_result(\_:\_:\_:\_:)](es_respond_auth_result%28________%29.md): Responds to an event that requires an authorization response.
- [es_respond_flags_result(\_:\_:\_:\_:)](es_respond_flags_result%28________%29.md): Responds to an event that requires authorization flags as a response.
- [es_respond_result_t](es_respond_result_t.md): Values that indicate the result of responding to a message.

# es_auth_result_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

Values used when responding to an authorization event.

## Declaration

```objectivec
typedef enum { ... } es_auth_result_t;
```

## Topics

### Authorization Values

- [ES_AUTH_RESULT_ALLOW](es_auth_result_allow.md): The caller authorizes the event and allows it to continue.
- [ES_AUTH_RESULT_DENY](es_auth_result_deny.md): The caller denies authorization to the event and prevents it from continuing.

## See Also

### Responding to Events

- [es_respond_auth_result](es_respond_auth_result%28________%29.md): Responds to an event that requires an authorization response.
- [es_respond_flags_result](es_respond_flags_result%28________%29.md): Responds to an event that requires authorization flags as a response.
- [es_respond_result_t](es_respond_result_t.md): Values that indicate the result of responding to a message.
