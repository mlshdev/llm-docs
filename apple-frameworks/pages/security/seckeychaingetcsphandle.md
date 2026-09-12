> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaingetcsphandle](https://developer.apple.com/documentation/security/seckeychaingetcsphandle)

# SecKeychainGetCSPHandle

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the CSSM CSP handle for the given keychain object.

> The common security services manager module is no longer used.

## Declaration

```objectivec
OSStatus SecKeychainGetCSPHandle(SecKeychainRef keychain, CSSM_CSP_HANDLE *cspHandle);
```

## Parameters

- `keychain`: A keychain object.
- `cspHandle`: On return, a pointer to the CSSM CSP handle for the given keychain. The handle is valid until the keychain object is released.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function is deprecated. The common security services manager module is no longer used.
