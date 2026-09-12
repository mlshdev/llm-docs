> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_krb5_cfx_keydata/have_acceptor_subkey](https://developer.apple.com/documentation/gss/gss_krb5_cfx_keydata/have_acceptor_subkey)

# have_acceptor_subkey (Swift)

**Framework:** GSS  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The flag that indicates if the Kerberos session acceptor subkey is available.

## Declaration

```swift
var have_acceptor_subkey: OM_uint32
```

<a id="Discussion"></a>

## Discussion

This flag is set to 1 if the Kerberos session acceptor subkey is available; otherwise, it is set to 0.

## See Also

### Key Properties

- [acceptor_subkey](acceptor_subkey.md): The Kerberos session acceptor subkey.
- [ctx_key](ctx_key.md): The Kerberos session context key.

# have_acceptor_subkey (Objective-C)

**Framework:** GSS  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The flag that indicates if the Kerberos session acceptor subkey is available.

## Declaration

```objectivec
OM_uint32 have_acceptor_subkey;
```

<a id="Discussion"></a>

## Discussion

This flag is set to 1 if the Kerberos session acceptor subkey is available; otherwise, it is set to 0.

## See Also

### Key Properties

- [acceptor_subkey](acceptor_subkey.md): The Kerberos session acceptor subkey.
- [ctx_key](ctx_key.md): The Kerberos session context key.
