> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/webdomain](https://developer.apple.com/documentation/managedsettings/webdomain)

# WebDomain

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An object that represents a website.

## Declaration

```swift
struct WebDomain
```

## Topics

### Creating a web domain

- [init(domain:)](webdomain/init%28domain_%29.md): Creates an object that represents the specified web domain.
- [init(token:)](webdomain/init%28token_%29.md): Creates an object that represents the provided domain.

### Identifying a web domain

- [domain](webdomain/domain.md): A string that identifies a specific web domain.
- [token](webdomain/token.md): An opaque representation of a specific web domain.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Websites

- [WebDomainToken](webdomaintoken.md): A representation of a web domain that preserves the user’s privacy.
