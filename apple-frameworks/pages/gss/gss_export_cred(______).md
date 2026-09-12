> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_export_cred(_:_:_:)](https://developer.apple.com/documentation/gss/gss_export_cred(_:_:_:))

# gss_export_cred(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Exports a credential to a token.

## Declaration

```swift
func gss_export_cred(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ cred_handle: gss_cred_id_t, _ token: gss_buffer_t) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `cred_handle`: The credential that you want to export.
- `token`: A buffer representing a token that the function fills with data that represents the credential. Anything in the buffer from before the call, is discarded, even if export fails.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

<a id="Discussion"></a>

## Discussion

You can recover the credential exported this way using [gss_import_cred(\_:\_:\_:)](gss_import_cred%28______%29.md).

## See Also

### Import and Export

- [gss_import_cred(\_:\_:\_:)](gss_import_cred%28______%29.md): Imports a credential from a token.

# gss_export_cred (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Exports a credential to a token.

## Declaration

```objectivec
OM_uint32 gss_export_cred(OM_uint32 *minor_status, gss_cred_id_t cred_handle, gss_buffer_t token);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `cred_handle`: The credential that you want to export.
- `token`: A buffer representing a token that the function fills with data that represents the credential. Anything in the buffer from before the call, is discarded, even if export fails.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

<a id="Discussion"></a>

## Discussion

You can recover the credential exported this way using [gss_import_cred](gss_import_cred%28______%29.md).

## See Also

### Import and Export

- [gss_import_cred](gss_import_cred%28______%29.md): Imports a credential from a token.
