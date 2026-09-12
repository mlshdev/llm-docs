> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpolicycreatewithoid](https://developer.apple.com/documentation/security/secpolicycreatewithoid)

# SecPolicyCreateWithOID

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.9)

Returns a policy object for the specified policy type object identifier.

## Declaration

```objectivec
SecPolicyRefSecPolicyCreateWithOID(CFTypeRef policyOID);
```

## Parameters

- `policyOID`: The object identifier (OID) of the policy type for this policy.
