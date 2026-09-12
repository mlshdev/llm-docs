> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_client_t](https://developer.apple.com/documentation/endpointsecurity/es_client_t)

# es_client_t

**Interface language:** Objective-C

**Framework:** Endpoint Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

An opaque type that stores the Endpoint Security client state.

## Declaration

```objectivec
typedef struct es_client_s es_client_t;
```

## See Also

### Creating a Client

- [es_new_client](es_new_client%28____%29.md): Creates a new client instance and connects it to the Endpoint Security system.
- [es_handler_block_t](es_handler_block_t.md): A block that handles a message received from Endpoint Security.
- [es_new_client_result_t](es_new_client_result_t.md): The result of an attempt to create a new client.
