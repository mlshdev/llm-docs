> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/plugincapability-swift.enum/command(intent:permissions:)](https://developer.apple.com/documentation/packagedescription/target/plugincapability-swift.enum/command(intent:permissions:))

# Target.PluginCapability.command(intent:permissions:)

**Framework:** PackageDescription  
**Kind:** Case  
**Availability:** SwiftPM 5.6+

Specifies that the plug-in provides a user command capability.

## Declaration

```swift
case command(intent: PluginCommandIntent, permissions: [PluginPermission] = [])
```

## Parameters

- `intent`: The semantic intent of the plug-in; either one of the predefined intents, or a custom intent.
- `permissions`: Any permissions needed by the command plug-in. This affects what the sandbox in which the plug-in is run allows. Some permissions may require user approval.

<a id="discussion"></a>

## Discussion

Plug-ins that specify a `command` capability define commands that can run using the SwiftPM command line interface, or in an IDE that supports Swift packages. You can invoke the command manually on one or more targets in a package.

```swift
swift package <verb>
```

The package can specify the *verb* used to invoke the command.

## See Also

### Creating a Plugin Capability

- [buildTool()](buildtool%28%29.md): The plug-in is a build tool.
