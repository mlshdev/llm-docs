> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appentitydefinition/suggestedentities()](https://developer.apple.com/documentation/appintentstesting/appentitydefinition/suggestedentities())

# suggestedEntities()

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Fetches all suggested entities of this type.

## Declaration

```swift
func suggestedEntities() async throws -> [AnyAppEntity]
```

<a id="return-value"></a>

## Return Value

An array of suggested app entities.

<a id="discussion"></a>

## Discussion

The system uses suggested entities for disambiguation and recommendations in Shortcuts and Siri.

> **Throws**

> Any errors encountered during the query execution.

## See Also

### Accessing suggested entities

- [suggestedEntitiesQuery()](suggestedentitiesquery%28%29.md): Creates an entity query that retrieves suggested entities of this type.
