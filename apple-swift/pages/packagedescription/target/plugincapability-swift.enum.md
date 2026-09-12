> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/plugincapability-swift.enum](https://developer.apple.com/documentation/packagedescription/target/plugincapability-swift.enum)

# Target.PluginCapability

**Framework:** PackageDescription  
**Kind:** Enumeration

The different types of capability that a plug-in can provide.

## Declaration

```swift
enum PluginCapability
```

<a id="overview"></a>

## Overview

In this version of SwiftPM, only build tool and command plug-ins are supported; this enumeration will be extended as new plug-in capabilities are added.

## Topics

### Creating a Plugin Capability

- [buildTool()](plugincapability-swift.enum/buildtool%28%29.md): The plug-in is a build tool.
- [Target.PluginCapability.command(intent:permissions:)](plugincapability-swift.enum/command%28intent_permissions_%29.md): Specifies that the plug-in provides a user command capability.

### Enumeration Cases

- [Target.PluginCapability.buildTool](plugincapability-swift.enum/buildtool.md): Specifies that the plug-in provides a build tool capability.

## See Also

### Creating a Plugin Target

- [plugin(name:capability:dependencies:path:exclude:sources:packageAccess:)](plugin%28name_capability_dependencies_path_exclude_sources_packageaccess_%29.md): Defines a new package plug-in target.
- [pluginCapability](plugincapability-swift.property.md): The capability provided by a package plug-in target.
- [PluginCommandIntent](../plugincommandintent.md): The intended use case of the command plug-in.
- [PluginPermission](../pluginpermission.md): The type of permission a plug-in requires.
- [plugin(name:capability:dependencies:path:exclude:sources:)](plugin%28name_capability_dependencies_path_exclude_sources_%29.md): Deprecated. Defines a new package plugin target.
