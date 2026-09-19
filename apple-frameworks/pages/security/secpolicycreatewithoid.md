> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secpolicycreatewithoid

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
