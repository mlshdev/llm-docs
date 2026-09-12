> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/pluginpermission](https://developer.apple.com/documentation/packagedescription/pluginpermission)

# PluginPermission

**Framework:** PackageDescription  
**Kind:** Enumeration  
**Availability:** SwiftPM 5.6+

The type of permission a plug-in requires.

## Declaration

```swift
enum PluginPermission
```

<a id="overview"></a>

## Overview

Supported types are [PluginPermission.allowNetworkConnections(scope:reason:)](pluginpermission/allownetworkconnections%28scope_reason_%29.md) and [PluginPermission.writeToPackageDirectory(reason:)](pluginpermission/writetopackagedirectory%28reason_%29.md).

## Topics

### Create a permission

- [PluginPermission.allowNetworkConnections(scope:reason:)](pluginpermission/allownetworkconnections%28scope_reason_%29.md): Create a permission to make network connections.
- [PluginPermission.writeToPackageDirectory(reason:)](pluginpermission/writetopackagedirectory%28reason_%29.md): Create a permission to modify files in the package’s directory.

### Allow network connection

- [PluginNetworkPermissionScope](pluginnetworkpermissionscope.md): The scope of a network permission.

## See Also

### Creating a Plugin Target

- [plugin(name:capability:dependencies:path:exclude:sources:packageAccess:)](target/plugin%28name_capability_dependencies_path_exclude_sources_packageaccess_%29.md): Defines a new package plug-in target.
- [pluginCapability](target/plugincapability-swift.property.md): The capability provided by a package plug-in target.
- [Target.PluginCapability](target/plugincapability-swift.enum.md): The different types of capability that a plug-in can provide.
- [PluginCommandIntent](plugincommandintent.md): The intended use case of the command plug-in.
- [plugin(name:capability:dependencies:path:exclude:sources:)](target/plugin%28name_capability_dependencies_path_exclude_sources_%29.md): Deprecated. Defines a new package plugin target.
