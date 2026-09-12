> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_debug](https://developer.apple.com/documentation/dispatch/dispatch_debug)

# dispatch_debug

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.9) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Programmatically logs debug information about a dispatch object.

## Declaration

```objectivec
extern void dispatch_debug(dispatch_object_t object, const char *message, ...);
```

## Parameters

- `object`: The object to introspect.
- `message`: The message to log above and beyond the introspection, in the form of a printf-style format string. The content of this message is appended to the log message separated by a colon, like this: “{*dispatch_object_information*}: *message*”.

<a id="Discussion"></a>

## Discussion

Debug information is logged to the Console log.  This information can be useful as a debugging tool to view the internal state (current reference count, suspension count, etc.) of a dispatch object at the time the [dispatch_debug](dispatch_debug.md) function is called.

## See Also

### Functions

- [dispatch_get_current_queue](dispatch_get_current_queue%28%29.md): Deprecated. Returns the queue on which the currently executing block is running.
- [dispatch_debugv](dispatch_debugv%28______%29.md): Deprecated.
