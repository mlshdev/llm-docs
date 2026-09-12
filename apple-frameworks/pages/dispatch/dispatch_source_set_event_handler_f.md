> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_source_set_event_handler_f](https://developer.apple.com/documentation/dispatch/dispatch_source_set_event_handler_f)

# dispatch_source_set_event_handler_f

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the event handler function for the given dispatch source.

## Declaration

```objectivec
extern void dispatch_source_set_event_handler_f(dispatch_source_t source, dispatch_function_t handler);
```

## Parameters

- `source`: The dispatch source to modify. This parameter cannot be `NULL`.
- `handler`: The event handler function to submit to the source’s target queue. The context parameter passed to the event handler function is the current context of the dispatch source at the time the handler call is made. This parameter cannot be `NULL`.

<a id="Discussion"></a>

## Discussion

The event handler (if specified) is submitted to the source’s target queue in response to the arrival of an event.

## See Also

### Managing Event Handlers

- [dispatch_source_set_registration_handler_f](dispatch_source_set_registration_handler_f.md): Sets the registration handler function for the given dispatch source.
- [dispatch_source_set_registration_handler](dispatch_source_set_registration_handler.md): Sets the registration handler block for the given dispatch source.
- [dispatch_source_set_event_handler](dispatch_source_set_event_handler.md): Sets the event handler block for the given dispatch source.
- [dispatch_source_set_cancel_handler_f](dispatch_source_set_cancel_handler_f.md): Sets the cancellation handler function for the given dispatch source.
- [dispatch_source_set_cancel_handler](dispatch_source_set_cancel_handler.md): Sets the cancellation handler block for the given dispatch source.
