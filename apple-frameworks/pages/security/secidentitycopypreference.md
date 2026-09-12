> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secidentitycopypreference](https://developer.apple.com/documentation/security/secidentitycopypreference)

# SecIdentityCopyPreference

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the preferred identity for the specified name and key use.

## Declaration

```objectivec
OSStatus SecIdentityCopyPreference(CFStringRef name, CSSM_KEYUSE keyUsage, CFArrayRef validIssuers, SecIdentityRef*identity);
```

## Parameters

- `name`: A string containing a URI, RFC822 email address, DNS hostname, or other name that uniquely identifies the service requiring an identity.
- `keyUsage`: A key use value, as defined in `Security.framework/cssmtype.h`. Pass `0` if you don’t want to specify a particular key use.
- `validIssuers`: An array of `CFDataRef` instances whose contents are the subject names of allowable issuers, as returned by a call to `SSLCopyDistinguishedNames` (`Security.framework/SecureTransport.h`). Pass `NULL` if you don’t want to limit the search to specific issuers.
- `identity`: On return, a reference to the preferred identity, or `NULL` if none was found. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

If a preferred identity has not been set for the specified name, the returned identity reference is `NULL`. You should then typically perform a search for possible identities, using [SecIdentitySearchCreate](secidentitysearchcreate.md) and [SecIdentitySearchCopyNext](secidentitysearchcopynext.md), allowing the user to choose from a list if more than one is found.

<a id="Special-Considerations"></a>

### Special Considerations

Use [SecIdentityCopyPreferred](secidentitycopypreferred%28______%29.md) for new development instead.
