> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_import_name(_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_import_name(_:_:_:_:))

# gss_import_name(\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Converts a name in contiguous octet format to the internal name format.

## Declaration

```swift
func gss_import_name(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ input_name_buffer: gss_buffer_t, _ input_name_type: gss_const_OID?, _ output_name: UnsafeMutablePointer<gss_name_t?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `input_name_buffer`: A buffer holding the octets that represent the name to import.
- `input_name_type`: An object identifier that specifies the name type. Use [GSS_C_NO_OID](gss_c_no_oid.md) to request the default for the mechanism.
- `output_name`: A pointer the function uses to return the imported name. Release this buffer with a call to [gss_release_name(\_:\_:)](gss_release_name%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

<a id="Discussion"></a>

## Discussion

Use this function to reverse the import procedure carried out with the [gss_display_name(\_:\_:\_:\_:)](gss_display_name%28________%29.md) function.

## See Also

### Imports and Exports

- [gss_export_name(\_:\_:\_:)](gss_export_name%28______%29.md): Returns a mechanism name in contiguous octet format.

# gss_import_name (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Converts a name in contiguous octet format to the internal name format.

## Declaration

```objectivec
OM_uint32 gss_import_name(OM_uint32 *minor_status, gss_buffer_t const input_name_buffer, gss_const_OID input_name_type, gss_name_t*output_name);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `input_name_buffer`: A buffer holding the octets that represent the name to import.
- `input_name_type`: An object identifier that specifies the name type. Use [GSS_C_NO_OID](gss_c_no_oid.md) to request the default for the mechanism.
- `output_name`: A pointer the function uses to return the imported name. Release this buffer with a call to [gss_release_name](gss_release_name%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

<a id="Discussion"></a>

## Discussion

Use this function to reverse the import procedure carried out with the [gss_display_name](gss_display_name%28________%29.md) function.

## See Also

### Imports and Exports

- [gss_export_name](gss_export_name%28______%29.md): Returns a mechanism name in contiguous octet format.
