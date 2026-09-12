> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/linkersetting/unsafeflags(_:_:)](https://developer.apple.com/documentation/packagedescription/linkersetting/unsafeflags(_:_:))

# unsafeFlags(\_:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.0+

Sets unsafe flags to pass arbitrary command-line flags to the corresponding build tool.

## Declaration

```swift
static func unsafeFlags(_ flags: [String], _ condition: BuildSettingCondition? = nil) -> LinkerSetting
```

## Parameters

- `flags`: The unsafe flags to set.
- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

As the usage of the word “unsafe” implies, Swift Package Manager can’t safely determine if the build flags have any negative side effect on the build since certain flags can change the behavior of how it performs a build.

As some build flags can be exploited for unsupported or malicious behavior, the use of unsafe flags makes the products containing this target ineligible for use by other packages.

> **Since**

> First available in PackageDescription 5.0.

## See Also

### Configuring Linker Settings

- [linkedFramework(\_:\_:)](linkedframework%28____%29.md): Declares linkage to a system framework.
- [linkedLibrary(\_:\_:)](linkedlibrary%28____%29.md): Declares linkage to a system library.
