> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/model()](https://developer.apple.com/documentation/swiftdata/model())

# Model()

**Framework:** SwiftData  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Converts a Swift class into a stored model that’s managed by SwiftData.

## Declaration

```swift
@attached(member, conformances: Observable, PersistentModel, Sendable, names: named(_$backingData), named(persistentBackingData), named(schemaMetadata), named(init), named(_$observationRegistrar), named(_SwiftDataNoType), named(access), named(withMutation)) @attached(memberAttribute) @attached(extension, conformances: Observable, PersistentModel, Sendable) macro Model()
```

## Mentioned In

- [Preserving your app’s model data across launches](preserving-your-apps-model-data-across-launches.md)

<a id="overview"></a>

## Overview

Annotate your model classes with the `@Model` macro to make them persistable. At build time, the macro expands to provide conformance to the [PersistentModel](persistentmodel.md) and [Observable](https://developer.apple.com/documentation/observation/observable) protocols.

```swift
@Model
class RemoteImage {
    var sourceURL: URL
    var data: Data
    
    init(sourceURL: URL, data: Data = Data()) {
        self.sourceURL = sourceURL
        self.data = data
    }
}
```

For more information about defining models, see [Preserving your app’s model data across launches](preserving-your-apps-model-data-across-launches.md).

## See Also

### Model definition

- [Attribute(\_:originalName:hashModifier:)](attribute%28__originalname_hashmodifier_%29.md): Specifies the custom behavior that SwiftData applies to the annotated property when managing the owning class.
- [Unique(\_:)](unique%28__%29.md): Specifies the key-paths that SwiftData uses to enforce the uniqueness of model instances.
- [Index(\_:)](index%28__%29-74ia2.md): Specifies the key-paths that SwiftData uses to create one or more binary indices for the associated model.
- [Index(\_:)](index%28__%29-7d4z0.md): Specifies the key-paths that SwiftData uses to create one or more indicies for the associated model, where each index is either binary or R-tree.
- [Defining data relationships with enumerations and model classes](defining-data-relationships-with-enumerations-and-model-classes.md): Create relationships for static and dynamic data stored in your app.
- [Relationship(\_:deleteRule:minimumModelCount:maximumModelCount:originalName:inverse:hashModifier:)](relationship%28__deleterule_minimummodelcount_maximummodelcount_originalname_inverse_hashmodifier_%29.md): Specifies the options that SwiftData needs to manage the annotated property as a relationship between two models.
- [Transient()](transient%28%29.md): Tells SwiftData not to persist the annotated property when managing the owning class.
