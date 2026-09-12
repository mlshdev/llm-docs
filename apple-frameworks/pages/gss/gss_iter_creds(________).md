> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_iter_creds(_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_iter_creds(_:_:_:_:))

# gss_iter_creds(\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Iterates over all credentials.

## Declaration

```swift
func gss_iter_creds(_ min_stat: UnsafeMutablePointer<OM_uint32>, _ flags: OM_uint32, _ mech: gss_const_OID?, _ useriter: @escaping (gss_OID?, gss_cred_id_t?) -> Void) -> OM_uint32
```

## Parameters

- `flags`: No flags are currently defined. Pass 0 for this parameter.
- `mech`: The mechanism type of credentials to iterate over. Pass in `GSS_C_NO_OID_SET` to iterate over all credentials.
- `useriter`: A block that is called once for each credential. The block receives the credential’s mechanism and a copy of the credential as input on each iteration. Free the copy’s memory with a call to [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md) when you are done with it. The block is called one final time with `NULL` inputs upon reaching the end of the list.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

<a id="Discussion"></a>

## Discussion

Use the [gss_iter_creds_f(\_:\_:\_:\_:\_:)](gss_iter_creds_f%28__________%29.md) function if you want to track the callbacks using a user-supplied context.

## See Also

### Iteration

- [gss_iter_creds_f(\_:\_:\_:\_:\_:)](gss_iter_creds_f%28__________%29.md): Iterates over all credentials with a user context.

# gss_iter_creds (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Iterates over all credentials.

## Declaration

```objectivec
OM_uint32 gss_iter_creds(OM_uint32 *min_stat, OM_uint32 flags, gss_const_OID mech, void (^useriter)(gss_OID , gss_cred_id_t ));
```

## Parameters

- `flags`: No flags are currently defined. Pass 0 for this parameter.
- `mech`: The mechanism type of credentials to iterate over. Pass in `GSS_C_NO_OID_SET` to iterate over all credentials.
- `useriter`: A block that is called once for each credential. The block receives the credential’s mechanism and a copy of the credential as input on each iteration. Free the copy’s memory with a call to [gss_release_cred](gss_release_cred%28____%29.md) when you are done with it. The block is called one final time with `NULL` inputs upon reaching the end of the list.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

<a id="Discussion"></a>

## Discussion

Use the [gss_iter_creds_f](gss_iter_creds_f%28__________%29.md) function if you want to track the callbacks using a user-supplied context.

## See Also

### Iteration

- [gss_iter_creds_f](gss_iter_creds_f%28__________%29.md): Iterates over all credentials with a user context.
