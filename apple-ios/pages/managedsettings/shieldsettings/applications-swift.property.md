> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/shieldsettings/applications-swift.property

# applications

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Applications for the system to cover with a shielding view.

## Declaration

```swift
var applications: Set<ApplicationToken>? { get set }
```

<a id="discussion"></a>

## Discussion

When the user launches an application in this set, the system calls your extension that customizes the shield’s appearance. When the user taps on a button the shield displays, the system calls your extension that handles user actions. If your app doesn’t provide a list of applications to shield, this value is `nil`. Your app can shield up to 50 application tokens at once.

## See Also

### Blocking apps and websites

- [applications](applications-swift.type.property.md): The metadata for the configuration that specifies apps for the system to cover with a shielding view.
- [webDomains](webdomains-swift.property.md): Websites for the system to cover with a shielding view.
- [webDomains](webdomains-swift.type.property.md): The metadata for the configuration that specifies websites for the system to shield.
