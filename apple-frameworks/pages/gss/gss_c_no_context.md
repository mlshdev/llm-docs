> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_c_no_context](https://developer.apple.com/documentation/gss/gss_c_no_context)

# GSS_C_NO_CONTEXT

**Interface language:** Objective-C

**Framework:** GSS  
**Kind:** Macro  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

A macro that indicates an empty context id object.

## Declaration

```objectivec
#define GSS_C_NO_CONTEXT
```

## See Also

### Channel Bindings

- [GSS_C_NO_CHANNEL_BINDINGS](gss_c_no_channel_bindings.md): Indicates a `NULL` [gss_channel_bindings_t](gss_channel_bindings_t.md) object.
- [gss_const_ctx_id_t](gss_const_ctx_id_t.md): A pointer to an immutable opaque type that you use to communicate context pointers with GSS-API functions.
- [gss_ctx_id_t](gss_ctx_id_t.md): A pointer to an opaque type that you use to communicate context pointers with GSS-API functions.
- [gss_channel_bindings_struct](gss_channel_bindings_struct.md): The structure defining a channel bindings descriptor that specifies the communications channel used to carry a context.
- [gss_channel_bindings_t](gss_channel_bindings_t.md): A pointer to a channel bindings descriptor that specifies the communications channel used to carry a context.
- [gss_const_channel_bindings_t](gss_const_channel_bindings_t.md): A pointer to an immutable channel bindings descriptor that you use to specify the communications channel used to carry a context.
