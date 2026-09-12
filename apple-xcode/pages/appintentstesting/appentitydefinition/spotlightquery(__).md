> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appentitydefinition/spotlightquery(_:)](https://developer.apple.com/documentation/appintentstesting/appentitydefinition/spotlightquery(_:))

# spotlightQuery(\_:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Performs a Spotlight search query for entities of this type.

## Declaration

```swift
func spotlightQuery(_ userQuery: String? = nil) async throws -> [AnyAppEntity]
```

## Parameters

- `userQuery`: The search query string. If `nil`, returns all indexed entities.

<a id="return-value"></a>

## Return Value

An array of `AnyAppEntity` instances that match the search criteria.

## Mentioned In

- [Testing your App Intents code](../testing-your-app-intents-code.md)

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the spotlight query fails.

## See Also

### Searching matching entities

- [entities(identifiers:)](entities%28identifiers_%29.md): Retrieves entities by their identifiers.
- [entityQuery(identifiers:)](entityquery%28identifiers_%29.md): Creates an entity query that searches for entities by their identifiers.
- [entities(matching:)](entities%28matching_%29.md): Finds app entities that match a given string query.
- [entityQuery(matching:)](entityquery%28matching_%29.md): Creates an entity query that searches for entities that match a given string.
