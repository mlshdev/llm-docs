> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_export_name(_:_:_:)](https://developer.apple.com/documentation/gss/gss_export_name(_:_:_:))

# gss_export_name(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a mechanism name in contiguous octet format.

## Declaration

```swift
func gss_export_name(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ input_name: gss_name_t, _ exported_name: gss_buffer_t) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `input_name`: The mechanism name to export. You typically obtain a name in this format from either the [gss_accept_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_accept_sec_context%28______________________%29.md) or the [gss_canonicalize_name(\_:\_:\_:\_:)](gss_canonicalize_name%28________%29.md) function.
- `exported_name`: A buffer the function fills with a contiguous octet format version of the name. Release the buffer with a call to [gss_release_buffer(\_:\_:)](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Imports and Exports

- [gss_import_name(\_:\_:\_:\_:)](gss_import_name%28________%29.md): Converts a name in contiguous octet format to the internal name format.

# gss_export_name (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a mechanism name in contiguous octet format.

## Declaration

```objectivec
OM_uint32 gss_export_name(OM_uint32 *minor_status, gss_name_t const input_name, gss_buffer_t exported_name);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `input_name`: The mechanism name to export. You typically obtain a name in this format from either the [gss_accept_sec_context](gss_accept_sec_context%28______________________%29.md) or the [gss_canonicalize_name](gss_canonicalize_name%28________%29.md) function.
- `exported_name`: A buffer the function fills with a contiguous octet format version of the name. Release the buffer with a call to [gss_release_buffer](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Imports and Exports

- [gss_import_name](gss_import_name%28________%29.md): Converts a name in contiguous octet format to the internal name format.
