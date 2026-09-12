> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_respond_result_err_event_type](https://developer.apple.com/documentation/endpointsecurity/es_respond_result_err_event_type)

# ES_RESPOND_RESULT_ERR_EVENT_TYPE (Swift)

**Framework:** Endpoint Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst · macOS

The caller performed an inappropriate response to the event.

## Declaration

```swift
var ES_RESPOND_RESULT_ERR_EVENT_TYPE: es_respond_result_t { get }
```

<a id="Discussion"></a>

## Discussion

Authorization events require the client to respond with an appropriate result using either [es_respond_auth_result(\_:\_:\_:\_:)](es_respond_auth_result%28________%29.md) or [es_respond_flags_result(\_:\_:\_:\_:)](es_respond_flags_result%28________%29.md). This error occurs if the client attempts to respond to an authorization event using the wrong interface. It also occurs when the client performs any response to a notification-only event.

## See Also

### Errors

- [ES_RESPOND_RESULT_ERR_DUPLICATE_RESPONSE](es_respond_result_err_duplicate_response.md): The caller responded to a message that already received a response.
- [ES_RESPOND_RESULT_ERR_INTERNAL](es_respond_result_err_internal.md): Communication with the Endpoint Security system failed.
- [ES_RESPOND_RESULT_ERR_INVALID_ARGUMENT](es_respond_result_err_invalid_argument.md): The caller provided one or more invalid arguments.
- [ES_RESPOND_RESULT_NOT_FOUND](es_respond_result_not_found.md): The system couldn’t find the message that the caller sent this response to.

# ES_RESPOND_RESULT_ERR_EVENT_TYPE (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

The caller performed an inappropriate response to the event.

## Declaration

```objectivec
ES_RESPOND_RESULT_ERR_EVENT_TYPE
```

<a id="Discussion"></a>

## Discussion

Authorization events require the client to respond with an appropriate result using either [es_respond_auth_result](es_respond_auth_result%28________%29.md) or [es_respond_flags_result](es_respond_flags_result%28________%29.md). This error occurs if the client attempts to respond to an authorization event using the wrong interface. It also occurs when the client performs any response to a notification-only event.

## See Also

### Errors

- [ES_RESPOND_RESULT_ERR_DUPLICATE_RESPONSE](es_respond_result_err_duplicate_response.md): The caller responded to a message that already received a response.
- [ES_RESPOND_RESULT_ERR_INTERNAL](es_respond_result_err_internal.md): Communication with the Endpoint Security system failed.
- [ES_RESPOND_RESULT_ERR_INVALID_ARGUMENT](es_respond_result_err_invalid_argument.md): The caller provided one or more invalid arguments.
- [ES_RESPOND_RESULT_NOT_FOUND](es_respond_result_not_found.md): The system couldn’t find the message that the caller sent this response to.
