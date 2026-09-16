> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/targetdependencycondition/when(platforms:)-5bxhc

# when(platforms:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.7+

Creates a target dependency condition.

## Declaration

```swift
static func when(platforms: [Platform]) -> TargetDependencyCondition?
```

## Parameters

- `platforms`: The applicable platforms for this target dependency condition.

## See Also

### Creating a Dependency Condition

- [when(traits:)](when%28traits_%29.md): Creates a target dependency condition.
- [when(platforms:traits:)](when%28platforms_traits_%29.md): Creates a target dependency condition.
- [when(platforms:)](when%28platforms_%29-4djh6.md): Deprecated. Creates a target dependency condition.
