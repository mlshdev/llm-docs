> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityquerypropertiesbuilder](https://developer.apple.com/documentation/appintents/entityquerypropertiesbuilder)

# EntityQueryPropertiesBuilder

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A result builder that allows you to declaratively describe the properties to include in a property-matched query.

## Declaration

```swift
@resultBuilder enum EntityQueryPropertiesBuilder<Entity, ComparatorMappingType> where Entity : AppEntity
```

## Topics

### Building queryable properties

- [buildBlock(\_:)](entityquerypropertiesbuilder/buildblock%28__%29.md)
- [EntityQueryPropertyDeclaration](entityquerypropertydeclaration.md): An object that identifies a specific entity property and the query comparators it supports.

### Type Methods

- [buildExpression(\_:)](entityquerypropertiesbuilder/buildexpression%28__%29.md)

## See Also

### Creating the query properties

- [init(properties:)](entityqueryproperties/init%28properties_%29.md)
