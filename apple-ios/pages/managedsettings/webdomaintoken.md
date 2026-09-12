> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/webdomaintoken](https://developer.apple.com/documentation/managedsettings/webdomaintoken)

# WebDomainToken

**Framework:** Managed Settings  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A representation of a web domain that preserves the user’s privacy.

## Declaration

```swift
typealias WebDomainToken = Token<WebDomain>
```

<a id="discussion"></a>

## Discussion

Managed Settings uses representations of web domains to preserve user privacy and control. Use a token to represent a web domain without revealing what domain the token represents. [FamilyActivitySelection](../familycontrols/familyactivityselection.md) provides tokens that devices within the same Family Sharing group can use to identify applications.

## See Also

### Websites

- [WebDomain](webdomain.md): An object that represents a website.
