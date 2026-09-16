> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/package/dependency/trait/init(name:condition:)

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
