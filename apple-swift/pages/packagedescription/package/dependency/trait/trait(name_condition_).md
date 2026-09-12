> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/trait/trait(name:condition:)](https://developer.apple.com/documentation/packagedescription/package/dependency/trait/trait(name:condition:))

# trait(name:condition:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.1+

Creates a new enabled trait.

## Declaration

```swift
static func trait(name: String, condition: Package.Dependency.Trait.Condition? = nil) -> Package.Dependency.Trait
```

## Parameters

- `name`: The name of the enabled trait.
- `condition`: The condition under which the trait is enabled.
