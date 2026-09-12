> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entitypropertyquery](https://developer.apple.com/documentation/appintents/entitypropertyquery)

# EntityPropertyQuery

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An interface for locating entities by matching values against one or more of their properties.

## Declaration

```swift
protocol EntityPropertyQuery : EntityQuery
```

## Mentioned In

- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)

<a id="overview"></a>

## Overview

`EntityPropertyQuery` provides an [EntityQuery](entityquery.md) with the ability to query instances according to its traits as they are modeled through query properties and their corresponding comparators.

At runtime, [entities(matching:mode:sortedBy:limit:)](entitypropertyquery/entities%28matching_mode_sortedby_limit_%29.md) receives an array of `ComparatorMappingType` instances - a type of your choice that represents the different comparator mappings given by the user - and is responsible for fetching entities matching those comparators.

The `properties` property on a `EntityPropertyQuery` contains the set of [EntityQueryProperty](entityqueryproperty.md)s the query accepts. When declaring each property’s set of supported [EntityQueryComparator](entityquerycomparator.md)s, you will supply a closure that will transform a runtime user-supplied value into an instance of `ComparatorMappingType`.

The AppIntents runtime will invoke query comparator mapping closures for each comparator included in the user request, gather their output `ComparatorMappingType` values, and then invoke the `entities` function. It is then up to you to retrieve entities matching those comparators, using whichever backend (in-memory lookup, CoreData, remote network call, …) suits your application. For example, consider the following simplified `AppEntity` for a photo:

```swift
class MyPhoto: AppEntity {
    @Property(title: "Date taken")
    let takenAt: Date

    @Property(title: "Tags")
    let tags: [String]
}
```

The following example shows how you would build a `EntityPropertyQuery` that allows the user to query for photos taken:

- Before a certain date
- After a certain date
- Containing a given tag

In `entities` you want to retrieve photos through a network request, so you supply mapping closures returning `URLQueryItem` instances for each [EntityQueryComparator](entityquerycomparator.md). Then you can use those `URLQueryItem` in `entities` to construct the correct `URL` to fetch entities.

```swift
struct MyPhotoQuery: EntityPropertyQuery {
   static var properties = QueryProperties {
       Property(\.$takenAt) {
           LessThanMapping { URLQueryItem(name: "takenBefore", value: $0) }
           GreaterThanMapping { URLQueryItem(name: "takenAfter": value: $0) }
       }
       Property(\.$tags) {
           ContainsComparator { URLQueryItem(name: "tagsContains", value: $0) }
       }
   }

   func entities(
       matching comparators: [URLQueryItem],
       mode: ComparatorMode,
       sortedBy: [Sort<MyPhoto>],
       limit: Int?
   ) async throws -> [MyPhoto] {
       let components = URLComponents()
       components.queryItems = comparators
       let url = components.url(relativeTo: "https://myphotosbackend.com/photos")

       return try await PhotosBackend.fetch(url: url)
   }
}
```

## Topics

### Specifying the queryable properties

- [properties](entitypropertyquery/properties.md): The set of query properties supported by this query.
- [EntityPropertyQuery.QueryProperties](entitypropertyquery/queryproperties.md)
- [EntityPropertyQuery.Property](entitypropertyquery/property.md)
- [ComparatorMappingType](entitypropertyquery/comparatormappingtype.md): Type produced by `EntityQueryComparator` mapping closures and supplied as input to `results`.

### Sorting the results

- [sortingOptions](entitypropertyquery/sortingoptions-swift.type.property.md): The set of sorting orders supported by this query.
- [EntityPropertyQuery.SortingOptions](entitypropertyquery/sortingoptions-swift.typealias.md)
- [EntityPropertyQuery.SortableBy](entitypropertyquery/sortableby.md)

### Searching for entities

- [entities(matching:mode:sortedBy:limit:)](entitypropertyquery/entities%28matching_mode_sortedby_limit_%29.md): Retrieves instances matching the supplied comparators.
- [EntityPropertyQuery.Sort](entitypropertyquery/sort.md)
- [EntityPropertyQuery.ComparatorMode](entitypropertyquery/comparatormode.md)
- [EntityQueryComparatorMode](entityquerycomparatormode.md): Modes that determine how to apply a query’s comparators.

### Type Properties

- [findIntentDescription](entitypropertyquery/findintentdescription.md): Defines how the generated ‘Find’ Shortcuts action of this query type is displayed to the user.

## Relationships

### Inherits From

- [DynamicOptionsProvider](dynamicoptionsprovider.md)
- [EntityQuery](entityquery.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Property-matched queries

- [EntityQueryProperties](entityqueryproperties.md): A type that provides the properties to include in a property-matched query.
- [EntityQueryProperty](entityqueryproperty.md): An object that provides the supported comparators you use to describe the different ways users can query against a property of an app entity.
- [Property comparators](property-comparators.md): Specify the type of comparison to perform during a property-matched query.
