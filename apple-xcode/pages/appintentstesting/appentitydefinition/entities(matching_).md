> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appentitydefinition/entities(matching:)](https://developer.apple.com/documentation/appintentstesting/appentitydefinition/entities(matching:))

# entities(matching:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Finds app entities that match a given string query.

## Declaration

```swift
func entities(matching string: String) async throws -> [AnyAppEntity]
```

## Parameters

- `string`: The search string to match against entity properties.

<a id="return-value"></a>

## Return Value

An array of entities that match the search criteria.

## Mentioned In

- [Testing your App Intents code](../testing-your-app-intents-code.md)

<a id="discussion"></a>

## Discussion

> **Throws**

> Any errors encountered during the query execution.

## See Also

### Searching matching entities

- [entities(identifiers:)](entities%28identifiers_%29.md): Retrieves entities by their identifiers.
- [entityQuery(identifiers:)](entityquery%28identifiers_%29.md): Creates an entity query that searches for entities by their identifiers.
- [entityQuery(matching:)](entityquery%28matching_%29.md): Creates an entity query that searches for entities that match a given string.
- [spotlightQuery(\_:)](spotlightquery%28__%29.md): Performs a Spotlight search query for entities of this type.
