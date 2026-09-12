> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/trait/condition-swift.struct/when(traits:)](https://developer.apple.com/documentation/packagedescription/package/dependency/trait/condition-swift.struct/when(traits:))

# when(traits:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.1+

Creates a package dependency trait condition.

## Declaration

```swift
static func when(traits: Set<String>) -> Package.Dependency.Trait.Condition?
```

## Parameters

- `traits`: The set of traits that enable the dependencies trait.

<a id="discussion"></a>

## Discussion

If the depending package enables any of the traits you provide, the package manager enables the dependency to which this condition applies.
