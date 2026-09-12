> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/applicationsettings/denyappremoval-swift.property](https://developer.apple.com/documentation/managedsettings/applicationsettings/denyappremoval-swift.property)

# denyAppRemoval

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether to prevent the user from removing applications.

## Declaration

```swift
var denyAppRemoval: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

If your app doesn’t constrain this setting, the value is `nil`.

## See Also

### Preventing app installation and removal

- [denyAppInstallation](denyappinstallation-swift.property.md): A Boolean value that indicates whether to prevent the user from installing applications.
- [denyAppInstallation](denyappinstallation-swift.type.property.md): The metadata for the setting to prevent app installation.
- [denyAppRemoval](denyappremoval-swift.type.property.md): The metadata for the setting to prevent app removal.
