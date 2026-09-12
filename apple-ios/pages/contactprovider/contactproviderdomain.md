> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactproviderdomain](https://developer.apple.com/documentation/contactprovider/contactproviderdomain)

# ContactProviderDomain

**Framework:** ContactProvider  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A domain, including traits like an identifier and display name, used to configure the extension.

## Declaration

```swift
protocol ContactProviderDomain
```

## Topics

### Identifying the domain

- [displayName](contactproviderdomain/displayname.md): The display name the system shows to represent this domain.
- [identifier](contactproviderdomain/identifier.md): The identifier of the domain.

### Providing custom domain data

- [userInfo](contactproviderdomain/userinfo.md): Custom values used to configure the extension before enumeration begins.

## Relationships

### Conforming Types

- [DefaultContactProviderDomain](defaultcontactproviderdomain.md)

## See Also

### Working with domains

- [DefaultContactProviderDomain](defaultcontactproviderdomain.md): The default domain the extension uses.
