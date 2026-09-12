> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_import_cred(_:_:_:)](https://developer.apple.com/documentation/gss/gss_import_cred(_:_:_:))

# gss_import_cred(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Imports a credential from a token.

## Declaration

```swift
func gss_import_cred(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ token: gss_buffer_t, _ cred_handle: UnsafeMutablePointer<gss_cred_id_t?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `token`: The token containing the data that represents the credential.
- `cred_handle`: A pointer to a credential that the function uses to return the credential. Free the credential’s memory with [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

<a id="Discussion"></a>

## Discussion

You can import a credential from a token created with [gss_export_cred(\_:\_:\_:)](gss_export_cred%28______%29.md).

## See Also

### Import and Export

- [gss_export_cred(\_:\_:\_:)](gss_export_cred%28______%29.md): Exports a credential to a token.

# gss_import_cred (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Imports a credential from a token.

## Declaration

```objectivec
OM_uint32 gss_import_cred(OM_uint32 *minor_status, gss_buffer_t token, gss_cred_id_t*cred_handle);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `token`: The token containing the data that represents the credential.
- `cred_handle`: A pointer to a credential that the function uses to return the credential. Free the credential’s memory with [gss_release_cred](gss_release_cred%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

<a id="Discussion"></a>

## Discussion

You can import a credential from a token created with [gss_export_cred](gss_export_cred%28______%29.md).

## See Also

### Import and Export

- [gss_export_cred](gss_export_cred%28______%29.md): Exports a credential to a token.
