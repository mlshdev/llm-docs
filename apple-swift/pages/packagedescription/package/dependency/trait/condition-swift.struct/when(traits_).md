> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/package/dependency/trait/condition-swift.struct/when(traits:)

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
