> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entitycollection](https://developer.apple.com/documentation/appintents/entitycollection)

# EntityCollection

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An array of entity identifiers that you use to improve the efficiency of operations involving large numbers of entities.

## Declaration

```swift
struct EntityCollection<Entity> where Entity : AppEntity
```

## Mentioned In

- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)
- [Adding parameters to an app intent](adding-parameters-to-an-app-intent.md)

<a id="overview"></a>

## Overview

Use an `EntityCollection` type to manage large numbers of entities in an app intent or app entity. An entity collection stores the identifier for each entity initially and provides an option to fetch the entire [AppEntity](appentity.md) instances later if needed. Storing only the identifiers initially can save memory and speed up operations that don’t require the entire entity instance.

If you need to store the identifiers for multiple entities, use `EntityCollection` as the type of your variable. If you use an `EntityCollection` for a parameter in an app intent, the system doesn’t force the resolution of each identifier to the full [AppEntity](appentity.md) instance during parameter resolution. For a parameter that contains hundreds of entities, not resolving each identifier can save time and memory at a potentially critical moment.

The following example shows the use of an `EntityCollection` in an app intent to disable multiple alarms. Because the code to disable the alarms requires only the identifier for each entity, the type stores those values using an entity collection.

```swift
struct DisableAlarmsIntent: AppIntent {
    static var title: LocalizedStringResource = "Disable Alarms"

    @Parameter(title: "Alarms")
    var alarms: EntityCollection<AlarmEntity>

    func perform() async throws -> some IntentResult {
        // Use the identifiers in the database query without hydration.
        try await AlarmService.disable(alarms.identifiers)

        return .result()
    }
}
```

When you need more than just entity identifiers, you can call [resolvedEntities()](entitycollection/resolvedentities%28%29.md) to generate the [AppEntity](appentity.md) instances for each identifier. The method uses your app’s query types to find or create the corresponding entity instances. After retrieving the entities, the entity collection caches those instances for future access.

## Topics

### Initializers

- [init(entities:)](entitycollection/init%28entities_%29.md): Creates a new entity identifier collection from entities.
- [init(identifiers:)](entitycollection/init%28identifiers_%29.md): Creates a new entity identifier collection.

### Instance Properties

- [count](entitycollection/count.md): The number of entity identifiers in this collection.
- [identifiers](entitycollection/identifiers.md): The entity identifiers in the collection.
- [isEmpty](entitycollection/isempty.md): A Boolean value that indicates whether the collection is empty.

### Instance Methods

- [append(\_:)](entitycollection/append%28__%29-4ze6w.md): Conforms when `Entity` conforms to `AppEntity`. Adds the specified entity identifier to the collection.
- [append(\_:)](entitycollection/append%28__%29-yr1u.md): Conforms when `Entity` conforms to `AppEntity`. Adds the identifier for the specified entity to the collection.
- [append(contentsOf:)](entitycollection/append%28contentsof_%29-7zah3.md): Conforms when `Entity` conforms to `AppEntity`. Adds the identifiers for multiple entities to the collection.
- [append(contentsOf:)](entitycollection/append%28contentsof_%29-8uhpu.md): Conforms when `Entity` conforms to `AppEntity`. Adds multiple entity identifiers to the collection.
- [contains(\_:)](entitycollection/contains%28__%29-i6hb.md): Conforms when `Entity` conforms to `AppEntity`. Returns a Boolean value that indicates whether the collection contains the specified entity identifier.
- [contains(\_:)](entitycollection/contains%28__%29-u9sl.md): Conforms when `Entity` conforms to `AppEntity`. Returns a Boolean value that indicates whether the collection contains the identifier for the specified entity.
- [remove(\_:)](entitycollection/remove%28__%29-88jpq.md): Conforms when `Entity` conforms to `AppEntity`. Removes an entity’s identifier from the collection.
- [remove(\_:)](entitycollection/remove%28__%29-etqg.md): Conforms when `Entity` conforms to `AppEntity`. Removes the specified entity identifier from the collection.
- [resolvedEntities()](entitycollection/resolvedentities%28%29.md): Conforms when `Entity` conforms to `AppEntity`. Retrieves and returns the entity instances for each identifier in the collection.

### Type Aliases

- [EntityCollection.Specification](entitycollection/specification.md): Conforms when `Entity` conforms to `AppEntity`.
- [EntityCollection.UnwrappedType](entitycollection/unwrappedtype.md): Conforms when `Entity` conforms to `AppEntity`.
- [EntityCollection.ValueType](entitycollection/valuetype.md): Conforms when `Entity` conforms to `AppEntity`.

### Type Properties

- [defaultResolverSpecification](entitycollection/defaultresolverspecification.md): Conforms when `Entity` conforms to `AppEntity`.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
