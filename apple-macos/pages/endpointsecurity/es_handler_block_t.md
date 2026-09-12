> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_handler_block_t](https://developer.apple.com/documentation/endpointsecurity/es_handler_block_t)

# es_handler_block_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

A block that handles a message received from Endpoint Security.

## Declaration

```swift
typealias es_handler_block_t = (OpaquePointer, UnsafePointer<es_message_t>) -> Void
```

<a id="Discussion"></a>

## Discussion

The block receives two parameters:

- The client that receives the event, as an [es_client_t](es_client_t.md) pointer. You pass this client to any `es_respond`-prefixed functions that you call in the handler.
- The message to handle, as an [es_message_t](es_message_t.md) pointer.

You implement the handler by inspecting the message and deciding how to respond to it. For example, your handler might receive a message with [event_type](es_message_t/event_type.md) [ES_EVENT_TYPE_AUTH_RENAME](es_event_type_auth_rename.md), indicating that the system wants authorization before renaming a file. Your handler would call [es_respond_auth_result(\_:\_:\_:\_:)](es_respond_auth_result%28________%29.md) to permit or deny the renaming.

## See Also

### Creating a Client

- [es_new_client(\_:\_:)](es_new_client%28____%29.md): Creates a new client instance and connects it to the Endpoint Security system.
- [es_new_client_result_t](es_new_client_result_t.md): The result of an attempt to create a new client.

# es_handler_block_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

A block that handles a message received from Endpoint Security.

## Declaration

```objectivec
typedef void (^)(struct es_client_s *, const es_message_t *) es_handler_block_t;
```

<a id="Discussion"></a>

## Discussion

The block receives two parameters:

- The client that receives the event, as an [es_client_t](es_client_t.md) pointer. You pass this client to any `es_respond`-prefixed functions that you call in the handler.
- The message to handle, as an [es_message_t](es_message_t.md) pointer.

You implement the handler by inspecting the message and deciding how to respond to it. For example, your handler might receive a message with [event_type](es_message_t/event_type.md) [ES_EVENT_TYPE_AUTH_RENAME](es_event_type_auth_rename.md), indicating that the system wants authorization before renaming a file. Your handler would call [es_respond_auth_result](es_respond_auth_result%28________%29.md) to permit or deny the renaming.

## See Also

### Creating a Client

- [es_client_t](es_client_t.md): An opaque type that stores the Endpoint Security client state.
- [es_new_client](es_new_client%28____%29.md): Creates a new client instance and connects it to the Endpoint Security system.
- [es_new_client_result_t](es_new_client_result_t.md): The result of an attempt to create a new client.
