> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secidentitycopypreferred(_:_:_:)](https://developer.apple.com/documentation/security/secidentitycopypreferred(_:_:_:))

# SecIdentityCopyPreferred(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Retrieves the preferred identity for the specified name and key use.

## Declaration

```swift
func SecIdentityCopyPreferred(_ name: CFString, _ keyUsage: CFArray?, _ validIssuers: CFArray?) -> SecIdentity?
```

## Parameters

- `name`: A string containing an email address (RFC 822) or other name for which a preferred identity is requested.
- `keyUsage`: An array containing a list of usage attributes ([kSecAttrCanEncrypt](ksecattrcanencrypt.md), for example), or `NULL` if you do not want to request an identity for a particular usage. See Attribute Item Keys for a complete list of possible usage attributes.
- `validIssuers`: An array of `CFDataRef` objects whose contents are the subject names of allowable issuers, as returned by a call to [SSLCopyDistinguishedNames(\_:\_:)](sslcopydistinguishednames%28____%29.md). Pass `NULL` to allow any issuer.

<a id="return-value"></a>

## Return Value

Returns an identity, or `nil` if no identity from one of the specified issuers has been set as the preferred identity for the specified name and usage. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the identity’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

If a preferred identity has not been set for the supplied name, this function returns `NULL`. Your code should then perform a search for possible identities by calling [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md).

# SecIdentityCopyPreferred (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Retrieves the preferred identity for the specified name and key use.

## Declaration

```objectivec
SecIdentityRefSecIdentityCopyPreferred(CFStringRef name, CFArrayRef keyUsage, CFArrayRef validIssuers);
```

## Parameters

- `name`: A string containing an email address (RFC 822) or other name for which a preferred identity is requested.
- `keyUsage`: An array containing a list of usage attributes ([kSecAttrCanEncrypt](ksecattrcanencrypt.md), for example), or `NULL` if you do not want to request an identity for a particular usage. See Attribute Item Keys for a complete list of possible usage attributes.
- `validIssuers`: An array of `CFDataRef` objects whose contents are the subject names of allowable issuers, as returned by a call to [SSLCopyDistinguishedNames](sslcopydistinguishednames%28____%29.md). Pass `NULL` to allow any issuer.

<a id="return-value"></a>

## Return Value

Returns an identity, or `nil` if no identity from one of the specified issuers has been set as the preferred identity for the specified name and usage. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the identity’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

If a preferred identity has not been set for the supplied name, this function returns `NULL`. Your code should then perform a search for possible identities by calling [SecItemCopyMatching](secitemcopymatching%28____%29.md).
