> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/applicationsettings/denyappinstallation-swift.type.property](https://developer.apple.com/documentation/managedsettings/applicationsettings/denyappinstallation-swift.type.property)

# denyAppInstallation

**Framework:** Managed Settings  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The metadata for the setting to prevent app installation.

## Declaration

```swift
static let denyAppInstallation: SettingMetadata<Bool>
```

<a id="discussion"></a>

## Discussion

Use `denyAppInstallation` to access metadata about [denyAppInstallation](denyappinstallation-swift.property.md). The default value is `false`.

## See Also

### Preventing app installation and removal

- [denyAppInstallation](denyappinstallation-swift.property.md): A Boolean value that indicates whether to prevent the user from installing applications.
- [denyAppRemoval](denyappremoval-swift.property.md): A Boolean value that indicates whether to prevent the user from removing applications.
- [denyAppRemoval](denyappremoval-swift.type.property.md): The metadata for the setting to prevent app removal.
