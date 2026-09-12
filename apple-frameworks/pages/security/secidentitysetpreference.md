> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secidentitysetpreference](https://developer.apple.com/documentation/security/secidentitysetpreference)

# SecIdentitySetPreference

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Sets the preferred identity for the specified name and key use.

## Declaration

```objectivec
OSStatus SecIdentitySetPreference(SecIdentityRef identity, CFStringRef name, CSSM_KEYUSE keyUsage);
```

## Parameters

- `identity`: A reference to the preferred identity.
- `name`: A string containing a URI, RFC822 email address, DNS host name, or other name that uniquely identifies a service requiring this identity.
- `keyUsage`: A key use value, as defined in `Security.framework/cssmtype.h`. Pass `0` if you don’t want to specify a particular key use.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use [SecIdentitySetPreferred](secidentitysetpreferred%28______%29.md) for new development instead.
