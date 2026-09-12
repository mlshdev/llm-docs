> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appentitydefinition/entityquery(identifiers:)](https://developer.apple.com/documentation/appintentstesting/appentitydefinition/entityquery(identifiers:))

# entityQuery(identifiers:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an entity query that searches for entities by their identifiers.

## Declaration

```swift
func entityQuery<Identifier>(identifiers: [Identifier]) -> AnyEntityQuery where Identifier : EntityIdentifierConvertible
```

## Parameters

- `identifiers`: An array of entity identifiers to search for.

<a id="return-value"></a>

## Return Value

An entity query, configured for identifier-based searching.

## See Also

### Searching matching entities

- [entities(identifiers:)](entities%28identifiers_%29.md): Retrieves entities by their identifiers.
- [entities(matching:)](entities%28matching_%29.md): Finds app entities that match a given string query.
- [entityQuery(matching:)](entityquery%28matching_%29.md): Creates an entity query that searches for entities that match a given string.
- [spotlightQuery(\_:)](spotlightquery%28__%29.md): Performs a Spotlight search query for entities of this type.
