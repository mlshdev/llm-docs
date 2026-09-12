> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpolicygetvalue](https://developer.apple.com/documentation/security/secpolicygetvalue)

# SecPolicyGetValue

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.7)

Retrieves a policy’s value.

## Declaration

```objectivec
OSStatus SecPolicyGetValue(SecPolicyRef policyRef, SecAsn1Item *value);
```

## Parameters

- `policyRef`: The policy object for which to retrieve the value.
- `value`: On return, points to the policy’s value. This value is owned by the policy object and remains valid until that object is destroyed; do not release it separately.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A policy’s value is defined and interpreted by the policy. If you are using CSSM, you can specify object-identifier–policy-value pairs as input to the `CSSM_TP_POLICYINFO` function. Use the [SecPolicyGetOID](secpolicygetoid.md) function to obtain the object identifier (OID) for a policy.

Depending on how the policy uses the value, the value can be specific to a transaction. Because some other process might be using this policy object, it is best not to assign a new value to the policy using the same policy object. Instead, obtain a new policy object before assigning a new value to the policy.
