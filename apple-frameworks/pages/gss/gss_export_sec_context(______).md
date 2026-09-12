> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_export_sec_context(_:_:_:)](https://developer.apple.com/documentation/gss/gss_export_sec_context(_:_:_:))

# gss_export_sec_context(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Transfers a security context to another process.

## Declaration

```swift
func gss_export_sec_context(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ context_handle: UnsafeMutablePointer<gss_ctx_id_t?>, _ interprocess_token: gss_buffer_t?) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context to export.
- `interprocess_token`: A buffer the function fills with a token corresponding to the context. Release the buffer storage with a call to [gss_release_buffer(\_:\_:)](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

<a id="Discussion"></a>

## Discussion

The function deactivates the context before exporting it. Use [gss_import_sec_context(\_:\_:\_:)](gss_import_sec_context%28______%29.md) to restore the token to a context and reactivate it. Only one instance of a given context may be active at a time.

## See Also

### Import and Export

- [gss_import_sec_context(\_:\_:\_:)](gss_import_sec_context%28______%29.md): Imports a security context from another process.

# gss_export_sec_context (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Transfers a security context to another process.

## Declaration

```objectivec
OM_uint32 gss_export_sec_context(OM_uint32 *minor_status, gss_ctx_id_t*context_handle, gss_buffer_t interprocess_token);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context to export.
- `interprocess_token`: A buffer the function fills with a token corresponding to the context. Release the buffer storage with a call to [gss_release_buffer](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

<a id="Discussion"></a>

## Discussion

The function deactivates the context before exporting it. Use [gss_import_sec_context](gss_import_sec_context%28______%29.md) to restore the token to a context and reactivate it. Only one instance of a given context may be active at a time.

## See Also

### Import and Export

- [gss_import_sec_context](gss_import_sec_context%28______%29.md): Imports a security context from another process.
