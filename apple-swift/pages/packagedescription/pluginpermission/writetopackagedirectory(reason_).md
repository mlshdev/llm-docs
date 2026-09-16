> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/pluginpermission/writetopackagedirectory(reason:)

# PluginPermission.writeToPackageDirectory(reason:)

**Framework:** PackageDescription  
**Kind:** Case  
**Availability:** SwiftPM 5.6+

Create a permission to modify files in the package’s directory.

## Declaration

```swift
case writeToPackageDirectory(reason: String)
```

## Parameters

- `reason`: A reason why the permission is needed. This is shown to the user when permission is sought.

<a id="discussion"></a>

## Discussion

The command plug-in requires permission to modify the files under the package directory. The `reason` string is shown to the user at the time of request for approval, explaining why the plug-in requests access.

## See Also

### Create a permission

- [PluginPermission.allowNetworkConnections(scope:reason:)](allownetworkconnections%28scope_reason_%29.md): Create a permission to make network connections.
