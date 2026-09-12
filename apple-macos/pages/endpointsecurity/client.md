> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/client](https://developer.apple.com/documentation/endpointsecurity/client)

# Client (Swift)

**Framework:** Endpoint Security  
**Kind:** API Collection

An opaque type that maintains Endpoint Security client state, and functions related to this type.

<a id="overview"></a>

## Overview

Create an Endpoint Security client with [es_new_client(\_:\_:)](es_new_client%28____%29.md), then use this client to subscribe to event types of interest to your app or system extension. When Endpoint Security monitors an event your client subscribes to, it sends a message that describes the event to your client. When you no longer need the client, remove it with [es_delete_client(\_:)](es_delete_client%28__%29.md).

The following code creates a client and handles any errors returned by [es_new_client(\_:\_:)](es_new_client%28____%29.md). If client creation succeeds, the code subscribes the client to the [ES_EVENT_TYPE_AUTH_EXEC](es_event_type_auth_exec.md) event. The handler passed to [es_new_client(\_:\_:)](es_new_client%28____%29.md) allows any such event to proceed.

```c
// Create the client.
es_client_t *client = NULL;
es_new_client_result_t newClientResult =
es_new_client(&client,
              ^(es_client_t * client, const es_message_t * message) {
    switch (message->event_type) {
        case ES_EVENT_TYPE_AUTH_EXEC:
            es_respond_auth_result(client, message, ES_AUTH_RESULT_ALLOW, true);
            break;
        default:
            panic("Found unexpected event type: %i", message->event_type);
            break;
    }
});

// Handle any errors encountered while creating the client.
switch (newClientResult) {
    case ES_NEW_CLIENT_RESULT_SUCCESS:
        // Client created successfully; continue.
        break;
    case ES_NEW_CLIENT_RESULT_ERR_NOT_ENTITLED:
        panic("Extension is missing entitlement.");
        break;
    case ES_NEW_CLIENT_RESULT_ERR_NOT_PRIVILEGED:
        panic ("Extension is not running as root.");
        break;
    case ES_NEW_CLIENT_RESULT_ERR_NOT_PERMITTED:
        // Prompt user to perform Transparency, Consent,
        // and Control (TCC) approval.
        // This error is recoverable; the user can try again after
        // approving the TCC prompt.
        return YOUR_NEW_CLIENT_ERROR_CODE_PROMPT_TCC;
        break;
    case ES_NEW_CLIENT_RESULT_ERR_INVALID_ARGUMENT:
        panic ("Invalid argument to es_new_client(); client or handler was null.");
        break;
    case ES_NEW_CLIENT_RESULT_ERR_TOO_MANY_CLIENTS:
        panic ("Exceeded maximum number of simultaneously-connected ES clients.");
        break;
    case ES_NEW_CLIENT_RESULT_ERR_INTERNAL:
        panic ("Failed to connect to the Endpoint Security subsystem.");
        break;
}

// Subscribe the client to the ES_EVENT_TYPE_AUTH_EXEC event.
// When the client receives a message with this event type, it must authorize
// (allow or deny) the event.
es_event_type_t eventTypes[1] = { ES_EVENT_TYPE_AUTH_EXEC };
es_return_t subscribeResult = es_subscribe(client, eventTypes, sizeof(eventTypes));
if (subscribeResult != ES_RETURN_SUCCESS) {
    panic ("Client failed to subscribe to event."); 
}

```

## Topics

### Creating a Client

- [es_new_client(\_:\_:)](es_new_client%28____%29.md): Creates a new client instance and connects it to the Endpoint Security system.
- [es_handler_block_t](es_handler_block_t.md): A block that handles a message received from Endpoint Security.
- [es_new_client_result_t](es_new_client_result_t.md): The result of an attempt to create a new client.

### Destroying a Client

- [es_delete_client(\_:)](es_delete_client%28__%29.md): Destroys and disconnects a client instance from the Endpoint Security system.

### Subscribing to Events

- [es_subscribe(\_:\_:\_:)](es_subscribe%28______%29.md): Subscribes a client to a set of events.
- [es_subscriptions(\_:\_:\_:)](es_subscriptions%28______%29.md): Returns a list of the client’s subscriptions.
- [es_unsubscribe(\_:\_:\_:)](es_unsubscribe%28______%29.md): Unsubscribes the provided client from a set of events.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
- [es_unsubscribe_all(\_:)](es_unsubscribe_all%28__%29.md): Unsubscribes a client from all events.

### Responding to Events

- [es_respond_auth_result(\_:\_:\_:\_:)](es_respond_auth_result%28________%29.md): Responds to an event that requires an authorization response.
- [es_auth_result_t](es_auth_result_t.md): Values used when responding to an authorization event.
- [es_respond_flags_result(\_:\_:\_:\_:)](es_respond_flags_result%28________%29.md): Responds to an event that requires authorization flags as a response.
- [es_respond_result_t](es_respond_result_t.md): Values that indicate the result of responding to a message.

### Managing Cached Results

- [es_clear_cache(\_:)](es_clear_cache%28__%29.md): Clears all cached results for all clients.
- [es_clear_cache_result_t](es_clear_cache_result_t.md): Values that indicate the result of clearing a cache.

### Muting Events

- [es_mute_process(\_:\_:)](es_mute_process%28____%29.md): Suppresses events from a given process.
- [es_mute_process_events(\_:\_:\_:\_:)](es_mute_process_events%28________%29.md): Suppresses a subset of events from a given process.
- [es_muted_processes_t](es_muted_processes_t.md): A structure for a set of muted processes.
- [es_release_muted_processes(\_:)](es_release_muted_processes%28__%29.md): Frees resources associated with a set of previously-retrieved muted processes.
- [es_muted_processes_events(\_:\_:)](es_muted_processes_events%28____%29.md): Retrieve a list of all muted processes.
- [es_mute_path(\_:\_:\_:)](es_mute_path%28______%29.md): Suppresses events from executables that match a given path.
- [es_mute_path_events(\_:\_:\_:\_:\_:)](es_mute_path_events%28__________%29.md): Suppresses a subset of events from executables that match a given path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_muted_paths_events(\_:\_:)](es_muted_paths_events%28____%29.md): Retrieve a list of all muted paths.
- [es_muted_paths_t](es_muted_paths_t.md): A structure for a set of muted paths.
- [es_release_muted_paths(\_:)](es_release_muted_paths%28__%29.md): Frees resources associated with a set of previously-retrieved muted paths.

### Unmuting Events

- [es_unmute_process(\_:\_:)](es_unmute_process%28____%29.md): Restores event delivery from a previously-muted process.
- [es_unmute_process_events(\_:\_:\_:\_:)](es_unmute_process_events%28________%29.md): Restores event delivery of a subset of events from a previously-muted process.
- [es_unmute_path(\_:\_:\_:)](es_unmute_path%28______%29.md): Restores event delivery from a previously-muted path.
- [es_unmute_path_events(\_:\_:\_:\_:\_:)](es_unmute_path_events%28__________%29.md): Restores event delivery of a subset of events from a previously-muted path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_unmute_all_paths(\_:)](es_unmute_all_paths%28__%29.md): Restores event delivery from previously-muted paths.

### Deprecated Functions

- [es_muted_processes(\_:\_:\_:)](es_muted_processes%28______%29.md): Deprecated. Generates a list of muted processes.
- [es_mute_path_literal(\_:\_:)](es_mute_path_literal%28____%29.md): Deprecated. Suppresses events from executables matching a path literal.
- [es_mute_path_prefix(\_:\_:)](es_mute_path_prefix%28____%29.md): Deprecated. Suppresses events from executables matching a path prefix.

### Supporting Types

- [es_return_t](es_return_t.md): Values that indicate the result of an Endpoint Security action that can only succeed or fail.

## See Also

### Event Monitoring

- [Message](message.md): A type used by Endpoint Security to notify your client when a monitored action occurs.
- [Event Types](event-types.md): Types used by messages to deliver details specific to different kinds of Endpoint Security events.

# Client (Objective-C)

**Framework:** Endpoint Security  
**Kind:** API Collection

An opaque type that maintains Endpoint Security client state, and functions related to this type.

<a id="overview"></a>

## Overview

Create an Endpoint Security client with [es_new_client](es_new_client%28____%29.md), then use this client to subscribe to event types of interest to your app or system extension. When Endpoint Security monitors an event your client subscribes to, it sends a message that describes the event to your client. When you no longer need the client, remove it with [es_delete_client](es_delete_client%28__%29.md).

The following code creates a client and handles any errors returned by [es_new_client](es_new_client%28____%29.md). If client creation succeeds, the code subscribes the client to the [ES_EVENT_TYPE_AUTH_EXEC](es_event_type_auth_exec.md) event. The handler passed to [es_new_client](es_new_client%28____%29.md) allows any such event to proceed.

```c
// Create the client.
es_client_t *client = NULL;
es_new_client_result_t newClientResult =
es_new_client(&client,
              ^(es_client_t * client, const es_message_t * message) {
    switch (message->event_type) {
        case ES_EVENT_TYPE_AUTH_EXEC:
            es_respond_auth_result(client, message, ES_AUTH_RESULT_ALLOW, true);
            break;
        default:
            panic("Found unexpected event type: %i", message->event_type);
            break;
    }
});

// Handle any errors encountered while creating the client.
switch (newClientResult) {
    case ES_NEW_CLIENT_RESULT_SUCCESS:
        // Client created successfully; continue.
        break;
    case ES_NEW_CLIENT_RESULT_ERR_NOT_ENTITLED:
        panic("Extension is missing entitlement.");
        break;
    case ES_NEW_CLIENT_RESULT_ERR_NOT_PRIVILEGED:
        panic ("Extension is not running as root.");
        break;
    case ES_NEW_CLIENT_RESULT_ERR_NOT_PERMITTED:
        // Prompt user to perform Transparency, Consent,
        // and Control (TCC) approval.
        // This error is recoverable; the user can try again after
        // approving the TCC prompt.
        return YOUR_NEW_CLIENT_ERROR_CODE_PROMPT_TCC;
        break;
    case ES_NEW_CLIENT_RESULT_ERR_INVALID_ARGUMENT:
        panic ("Invalid argument to es_new_client(); client or handler was null.");
        break;
    case ES_NEW_CLIENT_RESULT_ERR_TOO_MANY_CLIENTS:
        panic ("Exceeded maximum number of simultaneously-connected ES clients.");
        break;
    case ES_NEW_CLIENT_RESULT_ERR_INTERNAL:
        panic ("Failed to connect to the Endpoint Security subsystem.");
        break;
}

// Subscribe the client to the ES_EVENT_TYPE_AUTH_EXEC event.
// When the client receives a message with this event type, it must authorize
// (allow or deny) the event.
es_event_type_t eventTypes[1] = { ES_EVENT_TYPE_AUTH_EXEC };
es_return_t subscribeResult = es_subscribe(client, eventTypes, sizeof(eventTypes));
if (subscribeResult != ES_RETURN_SUCCESS) {
    panic ("Client failed to subscribe to event."); 
}

```

## Topics

### Creating a Client

- [es_client_t](es_client_t.md): An opaque type that stores the Endpoint Security client state.
- [es_new_client](es_new_client%28____%29.md): Creates a new client instance and connects it to the Endpoint Security system.
- [es_handler_block_t](es_handler_block_t.md): A block that handles a message received from Endpoint Security.
- [es_new_client_result_t](es_new_client_result_t.md): The result of an attempt to create a new client.

### Destroying a Client

- [es_delete_client](es_delete_client%28__%29.md): Destroys and disconnects a client instance from the Endpoint Security system.

### Subscribing to Events

- [es_subscribe](es_subscribe%28______%29.md): Subscribes a client to a set of events.
- [es_subscriptions](es_subscriptions%28______%29.md): Returns a list of the client’s subscriptions.
- [es_unsubscribe](es_unsubscribe%28______%29.md): Unsubscribes the provided client from a set of events.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
- [es_unsubscribe_all](es_unsubscribe_all%28__%29.md): Unsubscribes a client from all events.

### Responding to Events

- [es_respond_auth_result](es_respond_auth_result%28________%29.md): Responds to an event that requires an authorization response.
- [es_auth_result_t](es_auth_result_t.md): Values used when responding to an authorization event.
- [es_respond_flags_result](es_respond_flags_result%28________%29.md): Responds to an event that requires authorization flags as a response.
- [es_respond_result_t](es_respond_result_t.md): Values that indicate the result of responding to a message.

### Managing Cached Results

- [es_clear_cache](es_clear_cache%28__%29.md): Clears all cached results for all clients.
- [es_clear_cache_result_t](es_clear_cache_result_t.md): Values that indicate the result of clearing a cache.

### Muting Events

- [es_mute_process](es_mute_process%28____%29.md): Suppresses events from a given process.
- [es_mute_process_events](es_mute_process_events%28________%29.md): Suppresses a subset of events from a given process.
- [es_muted_processes_t](es_muted_processes_t.md): A structure for a set of muted processes.
- [es_release_muted_processes](es_release_muted_processes%28__%29.md): Frees resources associated with a set of previously-retrieved muted processes.
- [es_muted_processes_events](es_muted_processes_events%28____%29.md): Retrieve a list of all muted processes.
- [es_mute_path](es_mute_path%28______%29.md): Suppresses events from executables that match a given path.
- [es_mute_path_events](es_mute_path_events%28__________%29.md): Suppresses a subset of events from executables that match a given path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_muted_paths_events](es_muted_paths_events%28____%29.md): Retrieve a list of all muted paths.
- [es_muted_paths_t](es_muted_paths_t.md): A structure for a set of muted paths.
- [es_release_muted_paths](es_release_muted_paths%28__%29.md): Frees resources associated with a set of previously-retrieved muted paths.

### Unmuting Events

- [es_unmute_process](es_unmute_process%28____%29.md): Restores event delivery from a previously-muted process.
- [es_unmute_process_events](es_unmute_process_events%28________%29.md): Restores event delivery of a subset of events from a previously-muted process.
- [es_unmute_path](es_unmute_path%28______%29.md): Restores event delivery from a previously-muted path.
- [es_unmute_path_events](es_unmute_path_events%28__________%29.md): Restores event delivery of a subset of events from a previously-muted path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_unmute_all_paths](es_unmute_all_paths%28__%29.md): Restores event delivery from previously-muted paths.

### Deprecated Functions

- [es_muted_processes](es_muted_processes%28______%29.md): Deprecated. Generates a list of muted processes.
- [es_mute_path_literal](es_mute_path_literal%28____%29.md): Deprecated. Suppresses events from executables matching a path literal.
- [es_mute_path_prefix](es_mute_path_prefix%28____%29.md): Deprecated. Suppresses events from executables matching a path prefix.

### Supporting Types

- [es_return_t](es_return_t.md): Values that indicate the result of an Endpoint Security action that can only succeed or fail.

## See Also

### Event Monitoring

- [Message](message.md): A type used by Endpoint Security to notify your client when a monitored action occurs.
- [Event Types](event-types.md): Types used by messages to deliver details specific to different kinds of Endpoint Security events.
- [Monitoring System Events with Endpoint Security](monitoring-system-events-with-endpoint-security.md): Receive notifications and authorization requests for sensitive operations by creating an Endpoint Security client for your app.
