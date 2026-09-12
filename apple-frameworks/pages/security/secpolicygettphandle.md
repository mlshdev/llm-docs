> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpolicygettphandle](https://developer.apple.com/documentation/security/secpolicygettphandle)

# SecPolicyGetTPHandle

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.7)

Retrieves the trust policy handle for a policy object.

## Declaration

```objectivec
OSStatus SecPolicyGetTPHandle(SecPolicyRef policyRef, CSSM_TP_HANDLE *tpHandle);
```

## Parameters

- `policyRef`: The policy object from which to obtain the trust policy handle.
- `tpHandle`: On return, points to the policy object’s trust policy handle. The handle remains valid until the policy object is released.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The trust policy handle is the CSSM identifier of the trust policy module that is managing the certificate. The trust policy handle is uses as an input to a number of CSSM functions.
