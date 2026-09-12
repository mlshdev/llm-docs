> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityqueryproperties](https://developer.apple.com/documentation/appintents/entityqueryproperties)

# EntityQueryProperties

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that provides the properties to include in a property-matched query.

## Declaration

```swift
struct EntityQueryProperties<Entity, ComparatorMappingType> where Entity : AppEntity
```

<a id="overview"></a>

## Overview

Contains all the supported properties a user can query against an entity for a given query. Declare query properties with a block containing all applicable [EntityQueryProperty](entityqueryproperty.md) objects.

<a id="Example"></a>

## Example

```swift
var properties = QueryProperties {
    Property(\.$myDate) {
        LessThanComparator { /* ... body of mapping transform ... */ }
        GreaterThanComparator { /* ... body of mapping transform ... */ }
    }
    Property(\.$myArray) {
        ContainsComparator { /* ... body of mapping transform ... */ }
    }
}
```

## Topics

### Creating the query properties

- [init(properties:)](entityqueryproperties/init%28properties_%29.md)
- [EntityQueryPropertiesBuilder](entityquerypropertiesbuilder.md): A result builder that allows you to declaratively describe the properties to include in a property-matched query.

### Getting the query properties

- [subscript(\_:)](entityqueryproperties/subscript%28__%29.md)

## See Also

### Property-matched queries

- [EntityPropertyQuery](entitypropertyquery.md): An interface for locating entities by matching values against one or more of their properties.
- [EntityQueryProperty](entityqueryproperty.md): An object that provides the supported comparators you use to describe the different ways users can query against a property of an app entity.
- [Property comparators](property-comparators.md): Specify the type of comparison to perform during a property-matched query.
