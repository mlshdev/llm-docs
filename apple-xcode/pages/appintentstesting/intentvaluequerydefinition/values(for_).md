> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/intentvaluequerydefinition/values(for:)](https://developer.apple.com/documentation/appintentstesting/intentvaluequerydefinition/values(for:))

# values(for:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Performs the value query with the given input and returns matching results.

## Declaration

```swift
func values(for input: some IntentValueConvertible) async throws -> ResolvedValueQueryResult
```

## Parameters

- `input`: The value to use in this query.

<a id="return-value"></a>

## Return Value

Results matching the query.

<a id="discussion"></a>

## Discussion

Use this function to verify that the system can query your app for app entities as shown in the following example:

```swift
let searchQuery = definitions.valueQueries[
    "LandmarkIntentValueQuery"
]
let result = try await searchQuery.values(
    for: "Arizona"
)
let name: String = try result.items[0].name
```
