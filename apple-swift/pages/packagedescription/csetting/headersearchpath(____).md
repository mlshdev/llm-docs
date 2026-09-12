> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/csetting/headersearchpath(_:_:)](https://developer.apple.com/documentation/packagedescription/csetting/headersearchpath(_:_:))

# headerSearchPath(\_:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.0+

Provides a header search path relative to the target’s directory.

## Declaration

```swift
static func headerSearchPath(_ path: String, _ condition: BuildSettingCondition? = nil) -> CSetting
```

## Parameters

- `path`: The path of the directory that contains the headers. The path is relative to the target’s directory.
- `condition`: A condition that restricts the use of the build setting.

<a id="discussion"></a>

## Discussion

Use this setting to add a search path for headers within your target. You can’t use absolute paths and you can’t use this setting to provide headers that are visible to other targets.

The path must be a directory inside the package.

> **Since**

> First available in PackageDescription 5.0.

## See Also

### Configuring C Settings

- [define(\_:to:\_:)](define%28__to___%29.md): Defines a value for a macro.
- [unsafeFlags(\_:\_:)](unsafeflags%28____%29.md): Sets unsafe flags to pass arbitrary command-line flags to the corresponding build tool.
