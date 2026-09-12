> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/trait/init(name:condition:)](https://developer.apple.com/documentation/packagedescription/package/dependency/trait/init(name:condition:))

# init(name:condition:)

**Framework:** PackageDescription  
**Kind:** Initializer  
**Availability:** SwiftPM 6.1+

Creates a new enabled trait.

## Declaration

```swift
init(name: String, condition: Package.Dependency.Trait.Condition? = nil)
```

## Parameters

- `name`: The name of the enabled trait.
- `condition`: The condition under which the trait is enabled.
