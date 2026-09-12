> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/applicationsettings/denyappremoval-swift.type.property](https://developer.apple.com/documentation/managedsettings/applicationsettings/denyappremoval-swift.type.property)

# denyAppRemoval

**Framework:** Managed Settings  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The metadata for the setting to prevent app removal.

## Declaration

```swift
static let denyAppRemoval: SettingMetadata<Bool>
```

<a id="discussion"></a>

## Discussion

Use `denyAppRemoval` to access metadata about [denyAppRemoval](denyappremoval-swift.property.md). The default value is `false`.

## See Also

### Preventing app installation and removal

- [denyAppInstallation](denyappinstallation-swift.property.md): A Boolean value that indicates whether to prevent the user from installing applications.
- [denyAppInstallation](denyappinstallation-swift.type.property.md): The metadata for the setting to prevent app installation.
- [denyAppRemoval](denyappremoval-swift.property.md): A Boolean value that indicates whether to prevent the user from removing applications.
