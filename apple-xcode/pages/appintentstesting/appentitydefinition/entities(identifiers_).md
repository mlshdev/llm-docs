> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appentitydefinition/entities(identifiers:)](https://developer.apple.com/documentation/appintentstesting/appentitydefinition/entities(identifiers:))

# entities(identifiers:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Retrieves entities by their identifiers.

## Declaration

```swift
func entities<Identifier>(identifiers: [Identifier]) async throws -> [AnyAppEntity] where Identifier : EntityIdentifierConvertible
```

## Parameters

- `identifiers`: An array of entity identifiers to look up.

<a id="return-value"></a>

## Return Value

An array of entities matching the provided identifiers.

<a id="discussion"></a>

## Discussion

> **Throws**

> Any errors encountered during the query execution.

## See Also

### Searching matching entities

- [entityQuery(identifiers:)](entityquery%28identifiers_%29.md): Creates an entity query that searches for entities by their identifiers.
- [entities(matching:)](entities%28matching_%29.md): Finds app entities that match a given string query.
- [entityQuery(matching:)](entityquery%28matching_%29.md): Creates an entity query that searches for entities that match a given string.
- [spotlightQuery(\_:)](spotlightquery%28__%29.md): Performs a Spotlight search query for entities of this type.
