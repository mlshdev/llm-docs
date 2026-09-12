> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/plugincapability-swift.enum/buildtool()](https://developer.apple.com/documentation/packagedescription/target/plugincapability-swift.enum/buildtool())

# buildTool()

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.5+

The plug-in is a build tool.

## Declaration

```swift
static func buildTool() -> Target.PluginCapability
```

<a id="return-value"></a>

## Return Value

A plug-in capability that defines a build tool.

<a id="discussion"></a>

## Discussion

The plug-in to apply to each target that uses it, and creates commands that run before or during the build of the target.

## See Also

### Creating a Plugin Capability

- [Target.PluginCapability.command(intent:permissions:)](command%28intent_permissions_%29.md): Specifies that the plug-in provides a user command capability.
