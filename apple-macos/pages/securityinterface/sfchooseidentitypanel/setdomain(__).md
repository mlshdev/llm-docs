> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfchooseidentitypanel/setdomain(_:)](https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/setdomain(_:))

# setDomain(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets an optional domain in which the identity is to be used.

## Declaration

```swift
func setDomain(_ domainString: String!)
```

## Parameters

- `domainString`: A string containing a hostname, RFC 822 name (email address), URL, or similar identifier.

<a id="Discussion"></a>

## Discussion

Call this method to associate a domain with the chosen identity. If the user chooses an identity and a domain is set, an identity preference item is created in the default keychain. Subsequent calls to  [SecIdentitySearchCreate](https://developer.apple.com/documentation/security/secidentitysearchcreate) and [SecIdentitySearchCopyNext](https://developer.apple.com/documentation/security/secidentitysearchcopynext) return the preferred identity for this domain first.

## See Also

### Working with Domains

- [domain()](domain%28%29.md): Returns the domain that will be associated with the chosen identity.

# setDomain: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets an optional domain in which the identity is to be used.

## Declaration

```objectivec
- (void) setDomain:(NSString *) domainString;
```

## Parameters

- `domainString`: A string containing a hostname, RFC 822 name (email address), URL, or similar identifier.

<a id="Discussion"></a>

## Discussion

Call this method to associate a domain with the chosen identity. If the user chooses an identity and a domain is set, an identity preference item is created in the default keychain. Subsequent calls to  [SecIdentitySearchCreate](https://developer.apple.com/documentation/security/secidentitysearchcreate) and [SecIdentitySearchCopyNext](https://developer.apple.com/documentation/security/secidentitysearchcopynext) return the preferred identity for this domain first.

## See Also

### Working with Domains

- [domain](domain%28%29.md): Returns the domain that will be associated with the chosen identity.
