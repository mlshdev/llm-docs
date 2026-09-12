> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaingetdldbhandle](https://developer.apple.com/documentation/security/seckeychaingetdldbhandle)

# SecKeychainGetDLDBHandle

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the CSSM database handle for a given keychain object.

> The common security services manager module is no longer used.

## Declaration

```objectivec
OSStatus SecKeychainGetDLDBHandle(SecKeychainRef keychain, CSSM_DL_DB_HANDLE *dldbHandle);
```

## Parameters

- `keychain`: A keychain object.
- `dldbHandle`: On return, a pointer to the CSSM database handle for the given keychain. The handle is valid until the keychain object is released.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function is deprecated. The common security services manager module is no longer used.
