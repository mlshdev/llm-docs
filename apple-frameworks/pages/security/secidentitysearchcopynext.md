> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secidentitysearchcopynext](https://developer.apple.com/documentation/security/secidentitysearchcopynext)

# SecIdentitySearchCopyNext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Finds the next identity matching specified search criteria

## Declaration

```objectivec
OSStatus SecIdentitySearchCopyNext(SecIdentitySearchRef searchRef, SecIdentityRef*identity);
```

## Parameters

- `searchRef`: An identity search object specifying the search criteria for this search. You create the identity search object by calling the [SecIdentitySearchCreate](secidentitysearchcreate.md) function.
- `identity`: On return, points to the identity object of the next matching identity (if any). In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). When there are no more identities that match the parameters specified to [SecIdentitySearchCreate](secidentitysearchcreate.md), [errSecItemNotFound](errsecitemnotfound.md) is returned.
