> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityqueryproperties/init(properties:)](https://developer.apple.com/documentation/appintents/entityqueryproperties/init(properties:))

# init(properties:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
init(@EntityQueryPropertiesBuilder<Entity, ComparatorMappingType> properties: () -> [EntityQueryPropertyDeclaration<Entity, ComparatorMappingType>])
```

## See Also

### Creating the query properties

- [EntityQueryPropertiesBuilder](../entityquerypropertiesbuilder.md): A result builder that allows you to declaratively describe the properties to include in a property-matched query.
