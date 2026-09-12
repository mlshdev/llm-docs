> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/shieldsettings/webdomains-swift.property](https://developer.apple.com/documentation/managedsettings/shieldsettings/webdomains-swift.property)

# webDomains

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Websites for the system to cover with a shielding view.

## Declaration

```swift
var webDomains: Set<WebDomainToken>? { get set }
```

<a id="discussion"></a>

## Discussion

When the user visits a website in this list of domains, the system calls your extension that customizes the shield’s appearance. When the user taps on a button the shield displays, the system calls your extension that handles user actions. If your app doesn’t provide a list of domains to shield, this value is `nil`. Your app can shield up to 50 web domain tokens at once.

## See Also

### Blocking apps and websites

- [applications](applications-swift.property.md): Applications for the system to cover with a shielding view.
- [applications](applications-swift.type.property.md): The metadata for the configuration that specifies apps for the system to cover with a shielding view.
- [webDomains](webdomains-swift.type.property.md): The metadata for the configuration that specifies websites for the system to shield.
