> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_respond_result_t](https://developer.apple.com/documentation/endpointsecurity/es_respond_result_t)

# es_respond_result_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

Values that indicate the result of responding to a message.

## Declaration

```swift
struct es_respond_result_t
```

## Topics

### Success

- [ES_RESPOND_RESULT_SUCCESS](es_respond_result_success.md): Endpoint Security successfully delivered the response.

### Errors

- [ES_RESPOND_RESULT_ERR_DUPLICATE_RESPONSE](es_respond_result_err_duplicate_response.md): The caller responded to a message that already received a response.
- [ES_RESPOND_RESULT_ERR_INTERNAL](es_respond_result_err_internal.md): Communication with the Endpoint Security system failed.
- [ES_RESPOND_RESULT_ERR_INVALID_ARGUMENT](es_respond_result_err_invalid_argument.md): The caller provided one or more invalid arguments.
- [ES_RESPOND_RESULT_NOT_FOUND](es_respond_result_not_found.md): The system couldn’t find the message that the caller sent this response to.
- [ES_RESPOND_RESULT_ERR_EVENT_TYPE](es_respond_result_err_event_type.md): The caller performed an inappropriate response to the event.

### Initializers

- [init(\_:)](es_respond_result_t/init%28__%29.md)
- [init(rawValue:)](es_respond_result_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_respond_result_t/rawvalue.md)

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
- [es_auth_result_t](es_auth_result_t.md): Values used when responding to an authorization event.
- [es_respond_flags_result(\_:\_:\_:\_:)](es_respond_flags_result%28________%29.md): Responds to an event that requires authorization flags as a response.

# es_respond_result_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

Values that indicate the result of responding to a message.

## Declaration

```objectivec
typedef enum { ... } es_respond_result_t;
```

## Topics

### Success

- [ES_RESPOND_RESULT_SUCCESS](es_respond_result_success.md): Endpoint Security successfully delivered the response.

### Errors

- [ES_RESPOND_RESULT_ERR_DUPLICATE_RESPONSE](es_respond_result_err_duplicate_response.md): The caller responded to a message that already received a response.
- [ES_RESPOND_RESULT_ERR_INTERNAL](es_respond_result_err_internal.md): Communication with the Endpoint Security system failed.
- [ES_RESPOND_RESULT_ERR_INVALID_ARGUMENT](es_respond_result_err_invalid_argument.md): The caller provided one or more invalid arguments.
- [ES_RESPOND_RESULT_NOT_FOUND](es_respond_result_not_found.md): The system couldn’t find the message that the caller sent this response to.
- [ES_RESPOND_RESULT_ERR_EVENT_TYPE](es_respond_result_err_event_type.md): The caller performed an inappropriate response to the event.

## See Also

### Responding to Events

- [es_respond_auth_result](es_respond_auth_result%28________%29.md): Responds to an event that requires an authorization response.
- [es_auth_result_t](es_auth_result_t.md): Values used when responding to an authorization event.
- [es_respond_flags_result](es_respond_flags_result%28________%29.md): Responds to an event that requires authorization flags as a response.
