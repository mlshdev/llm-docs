> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/index(_:)-7d4z0](https://developer.apple.com/documentation/swiftdata/index(_:)-7d4z0)

# Index(\_:)

**Framework:** SwiftData  
**Kind:** Macro  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+ · Swift 5.9+

Specifies the key-paths that SwiftData uses to create one or more indicies for the associated model, where each index is either binary or R-tree.

## Declaration

```swift
@freestanding(declaration) macro Index<T>(_ indices: Schema.Index<T>.Types<T>...) where T : PersistentModel
```

## See Also

### Model definition

- [Model()](model%28%29.md): Converts a Swift class into a stored model that’s managed by SwiftData.
- [Attribute(\_:originalName:hashModifier:)](attribute%28__originalname_hashmodifier_%29.md): Specifies the custom behavior that SwiftData applies to the annotated property when managing the owning class.
- [Unique(\_:)](unique%28__%29.md): Specifies the key-paths that SwiftData uses to enforce the uniqueness of model instances.
- [Index(\_:)](index%28__%29-74ia2.md): Specifies the key-paths that SwiftData uses to create one or more binary indices for the associated model.
- [Defining data relationships with enumerations and model classes](defining-data-relationships-with-enumerations-and-model-classes.md): Create relationships for static and dynamic data stored in your app.
- [Relationship(\_:deleteRule:minimumModelCount:maximumModelCount:originalName:inverse:hashModifier:)](relationship%28__deleterule_minimummodelcount_maximummodelcount_originalname_inverse_hashmodifier_%29.md): Specifies the options that SwiftData needs to manage the annotated property as a relationship between two models.
- [Transient()](transient%28%29.md): Tells SwiftData not to persist the annotated property when managing the owning class.
