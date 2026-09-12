> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_trace_payload_t](https://developer.apple.com/documentation/os/os_trace_payload_t)

# os_trace_payload_t

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a trace payload.

> Use logging instead.

## Declaration

```objectivec
typedef void (^)(NSObject<OS_xpc_object> *) os_trace_payload_t;
```

## See Also

### Deprecated Type Aliases

- [os_breadcrumb_t](os_breadcrumb_t.md): Deprecated.
- [os_trace_payload_object_t](os_trace_payload_object_t.md): Deprecated. A pointer to a trace payload object.
