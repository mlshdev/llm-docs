> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/targetdependencycondition](https://developer.apple.com/documentation/packagedescription/targetdependencycondition)

# TargetDependencyCondition

**Framework:** PackageDescription  
**Kind:** Structure

A condition that limits the application of a target’s dependency.

## Declaration

```swift
struct TargetDependencyCondition
```

## Topics

### Creating a Dependency Condition

- [when(platforms:)](targetdependencycondition/when%28platforms_%29-5bxhc.md): Creates a target dependency condition.
- [when(traits:)](targetdependencycondition/when%28traits_%29.md): Creates a target dependency condition.
- [when(platforms:traits:)](targetdependencycondition/when%28platforms_traits_%29.md): Creates a target dependency condition.
- [when(platforms:)](targetdependencycondition/when%28platforms_%29-4djh6.md): Deprecated. Creates a target dependency condition.

## Relationships

### Conforms To

- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)

## See Also

### Declaring a Dependency Target

- [dependencies](target/dependencies.md): The target’s dependencies on other entities inside or outside the package.
- [Target.Dependency](target/dependency.md): The different types of a target’s dependency on another entity.
