> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/buildsettingcondition/when(platforms:configuration:traits:)](https://developer.apple.com/documentation/packagedescription/buildsettingcondition/when(platforms:configuration:traits:))

# when(platforms:configuration:traits:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.1+

Creates a build setting condition.

## Declaration

```swift
static func when(platforms: [Platform]? = nil, configuration: BuildConfiguration? = nil, traits: Set<String>? = nil) -> BuildSettingCondition
```

## Parameters

- `platforms`: The applicable platforms for this build setting condition.
- `configuration`: The applicable build configuration for this build setting condition.
- `traits`: The applicable traits for this build setting condition.

## See Also

### Checking for a Build Condition

- [when(platforms:)](when%28platforms_%29.md): Creates a build setting condition.
- [when(configuration:)](when%28configuration_%29.md): Creates a build setting condition.
- [when(platforms:configuration:)](when%28platforms_configuration_%29-475co.md): Creates a build setting condition.
- [when(platforms:configuration:)](when%28platforms_configuration_%29-2991l.md): Deprecated. Creates a build setting condition.
