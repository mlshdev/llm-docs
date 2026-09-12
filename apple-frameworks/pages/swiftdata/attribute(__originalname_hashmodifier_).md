> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/attribute(_:originalname:hashmodifier:)](https://developer.apple.com/documentation/swiftdata/attribute(_:originalname:hashmodifier:))

# Attribute(\_:originalName:hashModifier:)

**Framework:** SwiftData  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Specifies the custom behavior that SwiftData applies to the annotated property when managing the owning class.

## Declaration

```swift
@attached(peer) macro Attribute(_ options: Schema.Attribute.Option..., originalName: String? = nil, hashModifier: String? = nil)
```

## Parameters

- `options`: A list of options to apply to the attached property to customize its behavior. For possible values, see [Schema.Attribute.Option](schema/attribute/option.md).
- `originalName`: The previous name of the attribute, if it’s different to the one in the current schema version. The default value is `nil`.
- `hashModifier`: A unique hash value that represents the most recent version of the attached property. The default value is `nil`.

## Mentioned In

- [Fetching and filtering time-based model changes](fetching-and-filtering-time-based-model-changes.md)
- [Preserving your app’s model data across launches](preserving-your-apps-model-data-across-launches.md)

<a id="overview"></a>

## Overview

The framework’s default behavior for managing a model class’s stored properties is suitable for most use cases. However, if you need to alter the persistence behavior of a particular property, annotate it with the `@Attribute` macro. For example, you may want to avoid conflicts in your model data by specifying that an attribute’s value is unique across all instances of that model.

```swift
@Model
class RemoteImage {
    @Attribute(.unique) var sourceURL: URL
    var data: Data
    
    init(sourceURL: URL, data: Data = Data()) {
        self.sourceURL = sourceURL
        self.data = data
    }
}
```

## See Also

### Model definition

- [Model()](model%28%29.md): Converts a Swift class into a stored model that’s managed by SwiftData.
- [Unique(\_:)](unique%28__%29.md): Specifies the key-paths that SwiftData uses to enforce the uniqueness of model instances.
- [Index(\_:)](index%28__%29-74ia2.md): Specifies the key-paths that SwiftData uses to create one or more binary indices for the associated model.
- [Index(\_:)](index%28__%29-7d4z0.md): Specifies the key-paths that SwiftData uses to create one or more indicies for the associated model, where each index is either binary or R-tree.
- [Defining data relationships with enumerations and model classes](defining-data-relationships-with-enumerations-and-model-classes.md): Create relationships for static and dynamic data stored in your app.
- [Relationship(\_:deleteRule:minimumModelCount:maximumModelCount:originalName:inverse:hashModifier:)](relationship%28__deleterule_minimummodelcount_maximummodelcount_originalname_inverse_hashmodifier_%29.md): Specifies the options that SwiftData needs to manage the annotated property as a relationship between two models.
- [Transient()](transient%28%29.md): Tells SwiftData not to persist the annotated property when managing the owning class.
