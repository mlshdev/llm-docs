> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appentitydefinition/allentities()](https://developer.apple.com/documentation/appintentstesting/appentitydefinition/allentities())

# allEntities()

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Fetches all available entities of this type.

## Declaration

```swift
func allEntities() async throws -> [AnyAppEntity]
```

<a id="return-value"></a>

## Return Value

An array containing all entities of this type.

<a id="discussion"></a>

## Discussion

> **Throws**

> Any errors encountered during the query execution.

## See Also

### Retrieving all entities

- [allEntitiesQuery()](allentitiesquery%28%29.md): Creates an entity query that retrieves all available entities of this type.
