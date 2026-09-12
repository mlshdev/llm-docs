> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/intentdefinitions/entities](https://developer.apple.com/documentation/appintentstesting/intentdefinitions/entities)

# entities

**Framework:** App Intents Testing  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The definitions for the target app’s app entities.

## Declaration

```swift
var entities: IntentDefinitions.DefinitionCollection<AppEntityDefinition> { get }
```

<a id="discussion"></a>

## Discussion

Access individual entity definitions using subscript syntax with the entity’s type name as shown in the following example:

```swift
let definitions = IntentDefinitions(
    bundleIdentifier: "com.apple.example"
)
let coffeeEntity = definitions.entities[
    "CoffeeEntity"
]
```

## See Also

### Accessing app entities and queries

- [AppEntityDefinition](../appentitydefinition.md): A definition you use to dynamically create entity instances for testing.
- [valueQueries](valuequeries.md): The definitions for the app’s intent value queries.
- [IntentValueQueryDefinition](../intentvaluequerydefinition.md): A definition you use to create an intent value query for testing.
- [transientEntities](transiententities.md): Retrieve a transient app entity definition using subscript syntax.
- [TransientAppEntityDefinition](../transientappentitydefinition.md): A definition you use to dynamically create transient app entities for testing.
