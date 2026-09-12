> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/targetdependencycondition/when(platforms:traits:)](https://developer.apple.com/documentation/packagedescription/targetdependencycondition/when(platforms:traits:))

# when(platforms:traits:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.1+

Creates a target dependency condition.

## Declaration

```swift
static func when(platforms: [Platform], traits: Set<String>) -> TargetDependencyCondition?
```

## Parameters

- `platforms`: The applicable platforms for this target dependency condition.
- `traits`: The applicable traits for this target dependency condition.

## See Also

### Creating a Dependency Condition

- [when(platforms:)](when%28platforms_%29-5bxhc.md): Creates a target dependency condition.
- [when(traits:)](when%28traits_%29.md): Creates a target dependency condition.
- [when(platforms:)](when%28platforms_%29-4djh6.md): Deprecated. Creates a target dependency condition.
