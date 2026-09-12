> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeygetcsphandle](https://developer.apple.com/documentation/security/seckeygetcsphandle)

# SecKeyGetCSPHandle

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the CSSM CSP handle for a key.

## Declaration

```objectivec
OSStatus SecKeyGetCSPHandle(SecKeyRef keyRef, CSSM_CSP_HANDLE *cspHandle);
```

## Parameters

- `keyRef`: The key for which you want a CSSM CSP handle.
- `cspHandle`: On return, points to the CSSM CSP handle for the specified key. This pointer remains valid until the key reference is released. Do not attempt to modify or free this data.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A CSSM CSP handle is required as an input to a number of CSSM functions.
