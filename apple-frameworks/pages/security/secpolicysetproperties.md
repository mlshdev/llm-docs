> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpolicysetproperties](https://developer.apple.com/documentation/security/secpolicysetproperties)

# SecPolicySetProperties

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.9)

Sets properties for a policy.

## Declaration

```objectivec
OSStatus SecPolicySetProperties(SecPolicyRef policyRef, CFDictionaryRef properties);
```

## Parameters

- `policyRef`: The policy to alter
- `properties`: A `CFDictionaryRef` object containing the new set of properties. For a list of valid property keys, see [Security Policy Keys](security-policy-keys.md).

  > **Note**

  >  The property [kSecPolicyOid](ksecpolicyoid.md) is read-only and thus cannot be changed by this function.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
