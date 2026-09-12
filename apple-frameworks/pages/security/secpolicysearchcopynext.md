> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpolicysearchcopynext](https://developer.apple.com/documentation/security/secpolicysearchcopynext)

# SecPolicySearchCopyNext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Retrieves a policy object for the next policy matching specified search criteria.

## Declaration

```objectivec
OSStatus SecPolicySearchCopyNext(SecPolicySearchRef searchRef, SecPolicyRef*policyRef);
```

## Parameters

- `searchRef`: A policy search object specifying the search criteria for this search. You create the policy search object by calling the [SecPolicySearchCreate](secpolicysearchcreate.md) function.
- `policyRef`: On return, points to the policy object for the next policy (if any) matching the specified search criteria. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). When there are no more policies that match the parameters specified to [SecPolicySearchCreate](secpolicysearchcreate.md), [errSecPolicyNotFound](errsecpolicynotfound.md) is returned.
