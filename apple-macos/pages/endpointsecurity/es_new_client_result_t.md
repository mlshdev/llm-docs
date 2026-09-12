> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_new_client_result_t](https://developer.apple.com/documentation/endpointsecurity/es_new_client_result_t)

# es_new_client_result_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

The result of an attempt to create a new client.

## Declaration

```swift
struct es_new_client_result_t
```

## Topics

### Success

- [ES_NEW_CLIENT_RESULT_SUCCESS](es_new_client_result_success.md): Endpoint Security successfully created the new client.

### Errors

- [ES_NEW_CLIENT_RESULT_ERR_INTERNAL](es_new_client_result_err_internal.md): Communication with the Endpoint Security subsystem failed.
- [ES_NEW_CLIENT_RESULT_ERR_INVALID_ARGUMENT](es_new_client_result_err_invalid_argument.md): The attempt to create a new client contained one or more invalid arguments.
- [ES_NEW_CLIENT_RESULT_ERR_NOT_ENTITLED](es_new_client_result_err_not_entitled.md): The caller isn’t properly entitled to connect to Endpoint Security.
- [ES_NEW_CLIENT_RESULT_ERR_NOT_PERMITTED](es_new_client_result_err_not_permitted.md): The caller isn’t permitted to connect to Endpoint Security.
- [ES_NEW_CLIENT_RESULT_ERR_NOT_PRIVILEGED](es_new_client_result_err_not_privileged.md): The caller isn’t running as root.
- [ES_NEW_CLIENT_RESULT_ERR_TOO_MANY_CLIENTS](es_new_client_result_err_too_many_clients.md): The caller has reached the maximum allowed number of simultaneously connected clients.

### Initializers

- [init(\_:)](es_new_client_result_t/init%28__%29.md)
- [init(rawValue:)](es_new_client_result_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_new_client_result_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Creating a Client

- [es_new_client(\_:\_:)](es_new_client%28____%29.md): Creates a new client instance and connects it to the Endpoint Security system.
- [es_handler_block_t](es_handler_block_t.md): A block that handles a message received from Endpoint Security.

# es_new_client_result_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

The result of an attempt to create a new client.

## Declaration

```objectivec
typedef enum { ... } es_new_client_result_t;
```

## Topics

### Success

- [ES_NEW_CLIENT_RESULT_SUCCESS](es_new_client_result_success.md): Endpoint Security successfully created the new client.

### Errors

- [ES_NEW_CLIENT_RESULT_ERR_INTERNAL](es_new_client_result_err_internal.md): Communication with the Endpoint Security subsystem failed.
- [ES_NEW_CLIENT_RESULT_ERR_INVALID_ARGUMENT](es_new_client_result_err_invalid_argument.md): The attempt to create a new client contained one or more invalid arguments.
- [ES_NEW_CLIENT_RESULT_ERR_NOT_ENTITLED](es_new_client_result_err_not_entitled.md): The caller isn’t properly entitled to connect to Endpoint Security.
- [ES_NEW_CLIENT_RESULT_ERR_NOT_PERMITTED](es_new_client_result_err_not_permitted.md): The caller isn’t permitted to connect to Endpoint Security.
- [ES_NEW_CLIENT_RESULT_ERR_NOT_PRIVILEGED](es_new_client_result_err_not_privileged.md): The caller isn’t running as root.
- [ES_NEW_CLIENT_RESULT_ERR_TOO_MANY_CLIENTS](es_new_client_result_err_too_many_clients.md): The caller has reached the maximum allowed number of simultaneously connected clients.

## See Also

### Creating a Client

- [es_client_t](es_client_t.md): An opaque type that stores the Endpoint Security client state.
- [es_new_client](es_new_client%28____%29.md): Creates a new client instance and connects it to the Endpoint Security system.
- [es_handler_block_t](es_handler_block_t.md): A block that handles a message received from Endpoint Security.
