> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc-connections](https://developer.apple.com/documentation/xpc/xpc-connections)

# XPC connections (Swift)

**Framework:** XPC  
**Kind:** API Collection

Create and manage connections to services using connection-based APIs.

<a id="overview"></a>

## Overview

Use these APIs to work with XPC connections and related types — for example, when a framework function that you call returns an [xpc_connection_t](xpc_connection_t.md).

But, in most situations, the listener- and session-based APIs are a better choice for designing XPC communication protocols. For more information, see [Creating XPC services](creating-xpc-services.md).

## Topics

### Creation

- [xpc_connection_t](xpc_connection_t.md): A type that represents a connection to a named service.
- [xpc_connection_create(\_:\_:)](xpc_connection_create%28____%29.md): Creates a new connection object.
- [xpc_connection_create_from_endpoint(\_:)](xpc_connection_create_from_endpoint%28__%29.md): Creates a new connection from the specified endpoint.
- [xpc_connection_create_mach_service(\_:\_:\_:)](xpc_connection_create_mach_service%28______%29.md): Creates a new connection object that represents a Mach service.
- [xpc_connection_set_target_queue(\_:\_:)](xpc_connection_set_target_queue%28____%29.md): Sets the target queue of the connection.
- [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md): A flag that indicates the caller is the listener for the named service.
- [XPC_CONNECTION_MACH_SERVICE_PRIVILEGED](xpc_connection_mach_service_privileged.md): A flag that indicates the job advertising the service name belongs to a launch daemon rather than a launch agent.

### Event handling

- [xpc_connection_set_event_handler(\_:\_:)](xpc_connection_set_event_handler%28____%29.md): Sets the event handler block for the connection.
- [xpc_handler_t](xpc_handler_t.md): The type of block that the XPC connection APIs accept.
- [xpc_connection_handler_t](xpc_connection_handler_t.md): The type of the function to invoke for a bundled XPC service when there’s a new connection on the service.

### Life cycle

- [xpc_main(\_:)](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.
- [xpc_connection_activate(\_:)](xpc_connection_activate%28__%29.md): Activates a new connection.
- [xpc_connection_suspend(\_:)](xpc_connection_suspend%28__%29.md): Suspends the connection so the event handler block doesn’t fire and the connection doesn’t attempt to send any messages it has in its queue.
- [xpc_connection_resume(\_:)](xpc_connection_resume%28__%29.md): Resumes a suspended connection.
- [xpc_connection_cancel(\_:)](xpc_connection_cancel%28__%29.md): Cancels the connection and ensures that its event handler doesn’t fire again.
- [xpc_transaction_begin()](xpc_transaction_begin%28%29.md): Informs the XPC runtime when a transaction begins, indicating that the service isn’t idle.
- [xpc_transaction_end()](xpc_transaction_end%28%29.md): Informs the XPC runtime when a transaction ends.
- [xpc_connection_copy_invalidation_reason(\_:)](xpc_connection_copy_invalidation_reason%28__%29.md)

### Messages

- [xpc_connection_send_message(\_:\_:)](xpc_connection_send_message%28____%29.md): Sends a message over the connection to the destination service.
- [xpc_connection_send_barrier(\_:\_:)](xpc_connection_send_barrier%28____%29.md): Issues a barrier against the connection’s message-send activity.
- [xpc_connection_send_message_with_reply(\_:\_:\_:\_:)](xpc_connection_send_message_with_reply%28________%29.md): Sends a message over the connection to the destination service and associates a handler to invoke when the remote service sends a reply message.
- [xpc_connection_send_message_with_reply_sync(\_:\_:)](xpc_connection_send_message_with_reply_sync%28____%29.md): Sends a message over the connection and blocks the caller until it receives a reply.
- [xpc_main(\_:)](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.

### Remote peer information

- [xpc_connection_get_name(\_:)](xpc_connection_get_name%28__%29.md): Returns the name of the remote service that creates the connection.
- [xpc_connection_get_euid(\_:)](xpc_connection_get_euid%28__%29.md): Returns the EUID of the remote peer.
- [xpc_connection_get_egid(\_:)](xpc_connection_get_egid%28__%29.md): Returns the EGID of the remote peer.
- [xpc_connection_get_pid(\_:)](xpc_connection_get_pid%28__%29.md): Returns the PID of the remote peer.
- [xpc_connection_get_asid(\_:)](xpc_connection_get_asid%28__%29.md): Returns the audit session identifier of the remote peer.
- [xpc_connection_set_peer_entitlement_exists_requirement(\_:\_:)](xpc_connection_set_peer_entitlement_exists_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature that contains an entitlement.
- [xpc_connection_set_peer_entitlement_matches_value_requirement(\_:\_:\_:)](xpc_connection_set_peer_entitlement_matches_value_requirement%28______%29.md): Sets a requirement that the executable for the peer process has a valid code signature that contains an entitlement with a specific value.
- [xpc_connection_set_peer_lightweight_code_requirement(\_:\_:)](xpc_connection_set_peer_lightweight_code_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature that matches the lightweight code requirement.
- [xpc_connection_set_peer_platform_identity_requirement(\_:\_:)](xpc_connection_set_peer_platform_identity_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature that identifies it as an Apple-signed binary with the given signing identifier.
- [xpc_connection_set_peer_team_identity_requirement(\_:\_:)](xpc_connection_set_peer_team_identity_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature and is signed by the same team identifier as the calling process.
- [xpc_connection_set_peer_code_signing_requirement(\_:\_:)](xpc_connection_set_peer_code_signing_requirement%28____%29.md)

### Context

- [xpc_connection_set_context(\_:\_:)](xpc_connection_set_context%28____%29.md): Sets a context on the connection.
- [xpc_connection_get_context(\_:)](xpc_connection_get_context%28__%29.md): Returns the context for the connection.
- [xpc_connection_set_finalizer_f(\_:\_:)](xpc_connection_set_finalizer_f%28____%29.md): Sets the finalizer for the connection.
- [xpc_finalizer_t](xpc_finalizer_t.md): A function to invoke when tearing down a connection and freeing its context.

### Endpoints

- [xpc_endpoint_create(\_:)](xpc_endpoint_create%28__%29.md): Creates a new endpoint from a connection that is suitable for embedding into messages.
- [xpc_endpoint_t](xpc_endpoint_t.md): A type that represents a connection in serialized form.

### Errors

- [XPC_ERROR_CONNECTION_INVALID](xpc_error_connection_invalid-swift.var.md): An error that sends to the connection’s event handler to indicate that the connection is no longer usable.
- [XPC_ERROR_CONNECTION_INTERRUPTED](xpc_error_connection_interrupted-swift.var.md): An error that sends to the connection’s event handler when the remote service exits.
- [XPC_ERROR_TERMINATION_IMMINENT](xpc_error_termination_imminent-swift.var.md): An error that sends to a peer connection’s event handler when the XPC runtime determines that the program needs to exit and that all outstanding transactions must wind down.

## See Also

### Additional Types

- [XPC objects](xpc-objects.md): Encapsulate data in objects that represent primitive types, collections, and more.
- [Utilities](utilities.md): Browse debugging utilities and constants to use with the XPC APIs.

# XPC connections (Objective-C)

**Framework:** XPC  
**Kind:** API Collection

Create and manage connections to services using connection-based APIs.

<a id="overview"></a>

## Overview

Use these APIs to work with XPC connections and related types — for example, when a framework function that you call returns an [xpc_connection_t](xpc_connection_t.md).

But, in most situations, the listener- and session-based APIs are a better choice for designing XPC communication protocols. For more information, see [Creating XPC services](creating-xpc-services.md).

## Topics

### Creation

- [xpc_connection_t](xpc_connection_t.md): A type that represents a connection to a named service.
- [xpc_connection_create](xpc_connection_create%28____%29.md): Creates a new connection object.
- [xpc_connection_create_from_endpoint](xpc_connection_create_from_endpoint%28__%29.md): Creates a new connection from the specified endpoint.
- [xpc_connection_create_mach_service](xpc_connection_create_mach_service%28______%29.md): Creates a new connection object that represents a Mach service.
- [xpc_connection_set_target_queue](xpc_connection_set_target_queue%28____%29.md): Sets the target queue of the connection.
- [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md): A flag that indicates the caller is the listener for the named service.
- [XPC_CONNECTION_MACH_SERVICE_PRIVILEGED](xpc_connection_mach_service_privileged.md): A flag that indicates the job advertising the service name belongs to a launch daemon rather than a launch agent.

### Event handling

- [xpc_connection_set_event_handler](xpc_connection_set_event_handler%28____%29.md): Sets the event handler block for the connection.
- [xpc_handler_t](xpc_handler_t.md): The type of block that the XPC connection APIs accept.
- [xpc_connection_handler_t](xpc_connection_handler_t.md): The type of the function to invoke for a bundled XPC service when there’s a new connection on the service.

### Life cycle

- [xpc_main](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.
- [xpc_connection_activate](xpc_connection_activate%28__%29.md): Activates a new connection.
- [xpc_connection_suspend](xpc_connection_suspend%28__%29.md): Suspends the connection so the event handler block doesn’t fire and the connection doesn’t attempt to send any messages it has in its queue.
- [xpc_connection_resume](xpc_connection_resume%28__%29.md): Resumes a suspended connection.
- [xpc_connection_cancel](xpc_connection_cancel%28__%29.md): Cancels the connection and ensures that its event handler doesn’t fire again.
- [xpc_transaction_begin](xpc_transaction_begin%28%29.md): Informs the XPC runtime when a transaction begins, indicating that the service isn’t idle.
- [xpc_transaction_end](xpc_transaction_end%28%29.md): Informs the XPC runtime when a transaction ends.
- [xpc_connection_copy_invalidation_reason](xpc_connection_copy_invalidation_reason%28__%29.md)

### Messages

- [xpc_connection_send_message](xpc_connection_send_message%28____%29.md): Sends a message over the connection to the destination service.
- [xpc_connection_send_barrier](xpc_connection_send_barrier%28____%29.md): Issues a barrier against the connection’s message-send activity.
- [xpc_connection_send_message_with_reply](xpc_connection_send_message_with_reply%28________%29.md): Sends a message over the connection to the destination service and associates a handler to invoke when the remote service sends a reply message.
- [xpc_connection_send_message_with_reply_sync](xpc_connection_send_message_with_reply_sync%28____%29.md): Sends a message over the connection and blocks the caller until it receives a reply.
- [xpc_main](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.

### Remote peer information

- [xpc_connection_get_name](xpc_connection_get_name%28__%29.md): Returns the name of the remote service that creates the connection.
- [xpc_connection_get_euid](xpc_connection_get_euid%28__%29.md): Returns the EUID of the remote peer.
- [xpc_connection_get_egid](xpc_connection_get_egid%28__%29.md): Returns the EGID of the remote peer.
- [xpc_connection_get_pid](xpc_connection_get_pid%28__%29.md): Returns the PID of the remote peer.
- [xpc_connection_get_asid](xpc_connection_get_asid%28__%29.md): Returns the audit session identifier of the remote peer.
- [xpc_connection_set_peer_entitlement_exists_requirement](xpc_connection_set_peer_entitlement_exists_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature that contains an entitlement.
- [xpc_connection_set_peer_entitlement_matches_value_requirement](xpc_connection_set_peer_entitlement_matches_value_requirement%28______%29.md): Sets a requirement that the executable for the peer process has a valid code signature that contains an entitlement with a specific value.
- [xpc_connection_set_peer_lightweight_code_requirement](xpc_connection_set_peer_lightweight_code_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature that matches the lightweight code requirement.
- [xpc_connection_set_peer_platform_identity_requirement](xpc_connection_set_peer_platform_identity_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature that identifies it as an Apple-signed binary with the given signing identifier.
- [xpc_connection_set_peer_team_identity_requirement](xpc_connection_set_peer_team_identity_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature and is signed by the same team identifier as the calling process.
- [xpc_connection_set_peer_code_signing_requirement](xpc_connection_set_peer_code_signing_requirement%28____%29.md)

### Context

- [xpc_connection_set_context](xpc_connection_set_context%28____%29.md): Sets a context on the connection.
- [xpc_connection_get_context](xpc_connection_get_context%28__%29.md): Returns the context for the connection.
- [xpc_connection_set_finalizer_f](xpc_connection_set_finalizer_f%28____%29.md): Sets the finalizer for the connection.
- [xpc_finalizer_t](xpc_finalizer_t.md): A function to invoke when tearing down a connection and freeing its context.

### Endpoints

- [xpc_endpoint_create](xpc_endpoint_create%28__%29.md): Creates a new endpoint from a connection that is suitable for embedding into messages.
- [xpc_endpoint_t](xpc_endpoint_t.md): A type that represents a connection in serialized form.

### Errors

- [XPC_ERROR_CONNECTION_INVALID](xpc_error_connection_invalid-c.macro.md): An error that sends to the connection’s event handler to indicate that the connection is no longer usable.
- [XPC_ERROR_CONNECTION_INTERRUPTED](xpc_error_connection_interrupted-c.macro.md): An error that sends to the connection’s event handler when the remote service exits.
- [XPC_ERROR_TERMINATION_IMMINENT](xpc_error_termination_imminent-c.macro.md): An error that sends to a peer connection’s event handler when the XPC runtime determines that the program needs to exit and that all outstanding transactions must wind down.

## See Also

### Additional types

- [XPC objects](xpc-objects.md): Encapsulate data in objects that represent primitive types, collections, and more.
- [launchd](launchd.md): Browse APIs for interacting with `launchd`.
- [Utilities](utilities.md): Browse debugging utilities and constants to use with the XPC APIs.
