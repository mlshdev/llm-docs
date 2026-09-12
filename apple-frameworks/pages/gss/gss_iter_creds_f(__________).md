> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_iter_creds_f(_:_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_iter_creds_f(_:_:_:_:_:))

# gss_iter_creds_f(\_:\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Iterates over all credentials with a user context.

## Declaration

```swift
func gss_iter_creds_f(_ min_stat: UnsafeMutablePointer<OM_uint32>, _ flags: OM_uint32, _ mech: gss_const_OID?, _ userctx: UnsafeMutableRawPointer?, _ useriter: (UnsafeMutableRawPointer?, gss_OID?, gss_cred_id_t?) -> Void) -> OM_uint32
```

## Parameters

- `flags`: No flags are currently defined. Pass 0 for this parameter.
- `mech`: The mechanism type of credentials to iterate over. Pass in `GSS_C_NO_OID_SET` to iterate over all credentials.
- `userctx`: A user context that you use to keep track of callbacks.
- `useriter`: A block that is called once for each credential. The block receives the user context that you specified with the `userctx` parameter, the credential’s mechanism, and a copy of the credential as input on each iteration. Free the copy’s memory with a call to [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md) when you are done with it. The block is called one final time with a `NULL` credential upon reaching the end of the list.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

<a id="Discussion"></a>

## Discussion

Use the [gss_iter_creds(\_:\_:\_:\_:)](gss_iter_creds%28________%29.md) function if you don’t need the user context parameter.

## See Also

### Iteration

- [gss_iter_creds(\_:\_:\_:\_:)](gss_iter_creds%28________%29.md): Iterates over all credentials.

# gss_iter_creds_f (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Iterates over all credentials with a user context.

## Declaration

```objectivec
OM_uint32 gss_iter_creds_f(OM_uint32 *min_stat, OM_uint32 flags, gss_const_OID mech, void *userctx, void (*)(void *, struct gss_OID_desc_struct *, struct gss_cred_id_t_desc_struct *)useriter);
```

## Parameters

- `flags`: No flags are currently defined. Pass 0 for this parameter.
- `mech`: The mechanism type of credentials to iterate over. Pass in `GSS_C_NO_OID_SET` to iterate over all credentials.
- `userctx`: A user context that you use to keep track of callbacks.
- `useriter`: A block that is called once for each credential. The block receives the user context that you specified with the `userctx` parameter, the credential’s mechanism, and a copy of the credential as input on each iteration. Free the copy’s memory with a call to [gss_release_cred](gss_release_cred%28____%29.md) when you are done with it. The block is called one final time with a `NULL` credential upon reaching the end of the list.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

<a id="Discussion"></a>

## Discussion

Use the [gss_iter_creds](gss_iter_creds%28________%29.md) function if you don’t need the user context parameter.

## See Also

### Iteration

- [gss_iter_creds](gss_iter_creds%28________%29.md): Iterates over all credentials.
