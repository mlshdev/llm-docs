> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpolicygetoid](https://developer.apple.com/documentation/security/secpolicygetoid)

# SecPolicyGetOID

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.7)

Retrieves a policy’s object identifier.

## Declaration

```objectivec
OSStatus SecPolicyGetOID(SecPolicyRef policyRef, SecAsn1Oid *oid);
```

## Parameters

- `policyRef`: The policy object for which to obtain the object identifier. You can obtain a policy object with the [SecPolicySearchCopyNext](secpolicysearchcopynext.md) function.
- `oid`: On return, points to the policy’s object identifier. This identifier is owned by the policy object and remains valid until that object is destroyed; do not release it separately.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The policy’s object identifier, in the form of a `CSSM_OID` structure, is used in the CSSM API together with the policy’s value. Use the [SecPolicyGetValue](secpolicygetvalue.md) function to obtain the value that corresponds to this object identifier.
