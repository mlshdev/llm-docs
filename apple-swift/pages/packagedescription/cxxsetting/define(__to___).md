> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/cxxsetting/define(_:to:_:)](https://developer.apple.com/documentation/packagedescription/cxxsetting/define(_:to:_:))

# define(\_:to:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.0+

Defines a value for a macro.

## Declaration

```swift
static func define(_ name: String, to value: String? = nil, _ condition: BuildSettingCondition? = nil) -> CXXSetting
```

## Parameters

- `name`: The name of the macro.
- `value`: The value of the macro.
- `condition`: A condition that restricts the application of the build setting.

<a id="discussion"></a>

## Discussion

If you don’t specify a value, the macro’s default value is 1.

> **Since**

> First available in PackageDescription 5.0.

## See Also

### Configuring CXX Settings

- [headerSearchPath(\_:\_:)](headersearchpath%28____%29.md): Provides a header search path relative to the target’s directory.
- [unsafeFlags(\_:\_:)](unsafeflags%28____%29.md): Sets unsafe flags to pass arbitrary command-line flags to the corresponding build tool.
