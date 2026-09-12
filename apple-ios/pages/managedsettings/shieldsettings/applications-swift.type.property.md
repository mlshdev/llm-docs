> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/shieldsettings/applications-swift.type.property](https://developer.apple.com/documentation/managedsettings/shieldsettings/applications-swift.type.property)

# applications

**Framework:** Managed Settings  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The metadata for the configuration that specifies apps for the system to cover with a shielding view.

## Declaration

```swift
static let applications: SettingMetadata<Set<ApplicationToken>>
```

<a id="discussion"></a>

## Discussion

The default value is an empty set.

## See Also

### Blocking apps and websites

- [applications](applications-swift.property.md): Applications for the system to cover with a shielding view.
- [webDomains](webdomains-swift.property.md): Websites for the system to cover with a shielding view.
- [webDomains](webdomains-swift.type.property.md): The metadata for the configuration that specifies websites for the system to shield.
