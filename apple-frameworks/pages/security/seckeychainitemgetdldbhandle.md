> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitemgetdldbhandle](https://developer.apple.com/documentation/security/seckeychainitemgetdldbhandle)

# SecKeychainItemGetDLDBHandle

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the CSSM database handle for a given keychain item object.

> The common security services manager module is no longer used.

## Declaration

```objectivec
OSStatus SecKeychainItemGetDLDBHandle(SecKeychainItemRef keyItemRef, CSSM_DL_DB_HANDLE *dldbHandle);
```

## Parameters

- `keyItemRef`: A keychain item object.
- `dldbHandle`: On return, a pointer to a CSSM database handle for the keychain database containing the given item. The handle is valid until the keychain item object is released.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function is deprecated. The common security services manager module is no longer used.
