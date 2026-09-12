> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/applicationsettings/blockedapplications-swift.type.property](https://developer.apple.com/documentation/managedsettings/applicationsettings/blockedapplications-swift.type.property)

# blockedApplications

**Framework:** Managed Settings  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A description of the setting that controls which apps a user can launch on their device.

## Declaration

```swift
static let blockedApplications: SettingMetadata<Set<Application>>
```

<a id="discussion"></a>

## Discussion

Use `blockedApplications` to access the metadata for [blockedApplications](blockedapplications-swift.property.md). The default value is an empty set.

## See Also

### Blocking applications

- [blockedApplications](blockedapplications-swift.property.md): A set of applications for the system to block.
