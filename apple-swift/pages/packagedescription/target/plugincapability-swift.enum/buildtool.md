> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/target/plugincapability-swift.enum/buildtool

# Target.PluginCapability.buildTool

**Framework:** PackageDescription  
**Kind:** Case  
**Availability:** SwiftPM 5.5+

Specifies that the plug-in provides a build tool capability.

## Declaration

```swift
case buildTool
```

<a id="discussion"></a>

## Discussion

The plug-in to apply to each target that uses it, and creates commands that run before or during the build of the target.
