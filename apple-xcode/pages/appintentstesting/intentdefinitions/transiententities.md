> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/intentdefinitions/transiententities](https://developer.apple.com/documentation/appintentstesting/intentdefinitions/transiententities)

# transientEntities

**Framework:** App Intents Testing  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Retrieve a transient app entity definition using subscript syntax.

## Declaration

```swift
var transientEntities: IntentDefinitions.DefinitionCollection<TransientAppEntityDefinition> { get }
```

<a id="discussion"></a>

## Discussion

Access individual transient entity definitions using subscript syntax with the entity’s type name as shown in the following example:

```swift
let definitions = IntentDefinitions(
    bundleIdentifier: "com.apple.example"
)
let tempOrder = definitions.transientEntities[
    "TempOrderEntity"
]
```

## See Also

### Accessing app entities and queries

- [entities](entities.md): The definitions for the target app’s app entities.
- [AppEntityDefinition](../appentitydefinition.md): A definition you use to dynamically create entity instances for testing.
- [valueQueries](valuequeries.md): The definitions for the app’s intent value queries.
- [IntentValueQueryDefinition](../intentvaluequerydefinition.md): A definition you use to create an intent value query for testing.
- [TransientAppEntityDefinition](../transientappentitydefinition.md): A definition you use to dynamically create transient app entities for testing.
