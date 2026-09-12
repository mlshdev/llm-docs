> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_new_client(_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_new_client(_:_:))

# es_new_client(\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Creates a new client instance and connects it to the Endpoint Security system.

## Declaration

```swift
func es_new_client(_ client: UnsafeMutablePointer<OpaquePointer?>, _ handler: @escaping es_handler_block_t) -> es_new_client_result_t
```

## Parameters

- `client`: A pointer to receive the new client instance.
- `handler`: The handler to run on all messages sent to this client.

<a id="return-value"></a>

## Return Value

A result value indicating that indicates either success or the reason why client initialization failed.

<a id="Discussion"></a>

## Discussion

The handler block receives messages serially, and in the order the system delivers them. Returning control from the handler causes Endpoint Security to dequeue the next available message.

You can respond to a message out of order by returning control before calling one of the `es_respond`-prefixed functions. For out-of-order responding, your handler must copy the message with [es_copy_message(\_:)](es_copy_message%28__%29.md).

To create a client, your app must have the `com.apple.developer.endpoint-security.client` entitlement. The user also needs to approve your app with Transparency, Consent, and Control (TCC) mechanisms. The user does this in the Security and Privacy pane of System Preferences, by adding the app to Full Disk Access.

When you no longer need to receive Endpoint Security messages, destroy the client with [es_delete_client(\_:)](es_delete_client%28__%29.md) to free resources.

## See Also

### Related Documentation

- [com.apple.developer.endpoint-security.client](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.endpoint-security.client): The entitlement required to monitor system events for potentially malicious activity.

### Creating a Client

- [es_handler_block_t](es_handler_block_t.md): A block that handles a message received from Endpoint Security.
- [es_new_client_result_t](es_new_client_result_t.md): The result of an attempt to create a new client.

# es_new_client (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Creates a new client instance and connects it to the Endpoint Security system.

## Declaration

```objectivec
extern es_new_client_result_t es_new_client(es_client_t **client, es_handler_block_t handler);
```

## Parameters

- `client`: A pointer to receive the new client instance.
- `handler`: The handler to run on all messages sent to this client.

<a id="return-value"></a>

## Return Value

A result value indicating that indicates either success or the reason why client initialization failed.

<a id="Discussion"></a>

## Discussion

The handler block receives messages serially, and in the order the system delivers them. Returning control from the handler causes Endpoint Security to dequeue the next available message.

You can respond to a message out of order by returning control before calling one of the `es_respond`-prefixed functions. For out-of-order responding, your handler must copy the message with [es_copy_message](es_copy_message%28__%29.md).

To create a client, your app must have the `com.apple.developer.endpoint-security.client` entitlement. The user also needs to approve your app with Transparency, Consent, and Control (TCC) mechanisms. The user does this in the Security and Privacy pane of System Preferences, by adding the app to Full Disk Access.

When you no longer need to receive Endpoint Security messages, destroy the client with [es_delete_client](es_delete_client%28__%29.md) to free resources.

## See Also

### Related Documentation

- [com.apple.developer.endpoint-security.client](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.endpoint-security.client): The entitlement required to monitor system events for potentially malicious activity.

### Creating a Client

- [es_client_t](es_client_t.md): An opaque type that stores the Endpoint Security client state.
- [es_handler_block_t](es_handler_block_t.md): A block that handles a message received from Endpoint Security.
- [es_new_client_result_t](es_new_client_result_t.md): The result of an attempt to create a new client.
