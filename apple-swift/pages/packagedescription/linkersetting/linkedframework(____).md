> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/linkersetting/linkedframework(_:_:)

# linkedFramework(\_:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.0+

Declares linkage to a system framework.

## Declaration

```swift
static func linkedFramework(_ framework: String, _ condition: BuildSettingCondition? = nil) -> LinkerSetting
```

## Parameters

- `framework`: The framework name.
- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

This setting is most useful when the framework can’t be linked automatically, such as C++ based frameworks and non-modular frameworks.

> **Since**

> First available in PackageDescription 5.0.

## See Also

### Configuring Linker Settings

- [linkedLibrary(\_:\_:)](linkedlibrary%28____%29.md): Declares linkage to a system library.
- [unsafeFlags(\_:\_:)](unsafeflags%28____%29.md): Sets unsafe flags to pass arbitrary command-line flags to the corresponding build tool.
