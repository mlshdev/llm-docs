> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/trait/trait(name:description:enabledtraits:)](https://developer.apple.com/documentation/packagedescription/trait/trait(name:description:enabledtraits:))

# trait(name:description:enabledTraits:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.1+

Creates a trait with a name, a description, and set of additional traits it enables.

## Declaration

```swift
static func trait(name: String, description: String? = nil, enabledTraits: Set<String> = []) -> Trait
```

## Parameters

- `name`: The trait’s canonical name.
- `description`: The trait’s description.
- `enabledTraits`: A set of other traits of this package that this trait enables.
