> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/linkersetting/linkedlibrary(_:_:)](https://developer.apple.com/documentation/packagedescription/linkersetting/linkedlibrary(_:_:))

# linkedLibrary(\_:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.0+

Declares linkage to a system library.

## Declaration

```swift
static func linkedLibrary(_ library: String, _ condition: BuildSettingCondition? = nil) -> LinkerSetting
```

## Parameters

- `library`: The library name.
- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

This setting is most useful when the library can’t be linked automatically, such as C++ based libraries and non-modular libraries.

> **Since**

> First available in PackageDescription 5.0.

## See Also

### Configuring Linker Settings

- [linkedFramework(\_:\_:)](linkedframework%28____%29.md): Declares linkage to a system framework.
- [unsafeFlags(\_:\_:)](unsafeflags%28____%29.md): Sets unsafe flags to pass arbitrary command-line flags to the corresponding build tool.
