> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_const_channel_bindings_t](https://developer.apple.com/documentation/gss/gss_const_channel_bindings_t)

# gss_const_channel_bindings_t (Swift)

**Framework:** GSS  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

A pointer to an immutable channel bindings descriptor that you use to specify the communications channel used to carry a context.

## Declaration

```swift
typealias gss_const_channel_bindings_t = UnsafePointer<gss_channel_bindings_struct>
```

## See Also

### Channel Bindings

- [gss_ctx_id_t](gss_ctx_id_t.md): A pointer to an opaque type that you use to communicate context pointers with GSS-API functions.
- [gss_channel_bindings_struct](gss_channel_bindings_struct.md): The structure defining a channel bindings descriptor that specifies the communications channel used to carry a context.
- [gss_channel_bindings_t](gss_channel_bindings_t.md): A pointer to a channel bindings descriptor that specifies the communications channel used to carry a context.

# gss_const_channel_bindings_t (Objective-C)

**Framework:** GSS  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

A pointer to an immutable channel bindings descriptor that you use to specify the communications channel used to carry a context.

## Declaration

```objectivec
typedef const struct gss_channel_bindings_struct * gss_const_channel_bindings_t;
```

## See Also

### Channel Bindings

- [GSS_C_NO_CHANNEL_BINDINGS](gss_c_no_channel_bindings.md): Indicates a `NULL` [gss_channel_bindings_t](gss_channel_bindings_t.md) object.
- [GSS_C_NO_CONTEXT](gss_c_no_context.md): A macro that indicates an empty context id object.
- [gss_const_ctx_id_t](gss_const_ctx_id_t.md): A pointer to an immutable opaque type that you use to communicate context pointers with GSS-API functions.
- [gss_ctx_id_t](gss_ctx_id_t.md): A pointer to an opaque type that you use to communicate context pointers with GSS-API functions.
- [gss_channel_bindings_struct](gss_channel_bindings_struct.md): The structure defining a channel bindings descriptor that specifies the communications channel used to carry a context.
- [gss_channel_bindings_t](gss_channel_bindings_t.md): A pointer to a channel bindings descriptor that specifies the communications channel used to carry a context.
