> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeygetcredentials](https://developer.apple.com/documentation/security/seckeygetcredentials)

# SecKeyGetCredentials

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns an access credential for a key.

## Declaration

```objectivec
OSStatus SecKeyGetCredentials(SecKeyRef keyRef, CSSM_ACL_AUTHORIZATION_TAG operation, SecCredentialType credentialType, const CSSM_ACCESS_CREDENTIALS **outCredentials);
```

## Parameters

- `keyRef`: The key for which you want an access credential.
- `operation`: The type of operation to be performed with this key. Possible values are listed under “Authorization tag types” in `Security.framework/cssmtype.h`.
- `credentialType`: The type of credential requested. See [SecCredentialType](seccredentialtype.md) for possible values.
- `outCredentials`: On return, points to an access credential for the specified key. This pointer remains valid until the key reference is released. Do not attempt to modify or free this data.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

An access credential is required as an input to a number of CSSM functions.
