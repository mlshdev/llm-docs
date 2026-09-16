> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/targetdependencycondition/when(traits:)

# when(traits:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.1+

Creates a target dependency condition.

## Declaration

```swift
static func when(traits: Set<String>) -> TargetDependencyCondition?
```

## Parameters

- `traits`: The applicable traits for this target dependency condition.

## See Also

### Creating a Dependency Condition

- [when(platforms:)](when%28platforms_%29-5bxhc.md): Creates a target dependency condition.
- [when(platforms:traits:)](when%28platforms_traits_%29.md): Creates a target dependency condition.
- [when(platforms:)](when%28platforms_%29-4djh6.md): Deprecated. Creates a target dependency condition.
