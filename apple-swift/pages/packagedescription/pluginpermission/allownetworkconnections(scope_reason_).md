> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/pluginpermission/allownetworkconnections(scope:reason:)](https://developer.apple.com/documentation/packagedescription/pluginpermission/allownetworkconnections(scope:reason:))

# PluginPermission.allowNetworkConnections(scope:reason:)

**Framework:** PackageDescription  
**Kind:** Case  
**Availability:** SwiftPM 5.9+

Create a permission to make network connections.

## Declaration

```swift
case allowNetworkConnections(scope: PluginNetworkPermissionScope, reason: String)
```

## Parameters

- `scope`: The scope of the permission.
- `reason`: A reason why the permission is needed. This is shown to the user when permission is sought.

<a id="discussion"></a>

## Discussion

The command plug-in requires permission to make network connections. The `reason` string is shown to the user at the time of request for approval, explaining why the plug-in is requesting access.

## See Also

### Create a permission

- [PluginPermission.writeToPackageDirectory(reason:)](writetopackagedirectory%28reason_%29.md): Create a permission to modify files in the package’s directory.
