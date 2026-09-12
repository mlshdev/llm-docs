> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/resolvedvaluequeryresult](https://developer.apple.com/documentation/appintentstesting/resolvedvaluequeryresult)

# ResolvedValueQueryResult

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The result of an intent value query.

## Declaration

```swift
struct ResolvedValueQueryResult
```

<a id="overview"></a>

## Overview

Use the resolved value query result to verify that your [IntentValueQuery](https://developer.apple.com/documentation/appintents/intentvaluequery) returns the expected results as shown in the following example:

```swift
let result = try await searchQuery.values(for: "Arizona")

// Verify individual items.
XCTAssertEqual(try result.items[0].name, "Botanical Garden")

// Cast items to a concrete value for additional verifications.
let entity: AnyAppEntity =
    try result.items[0].as(AnyAppEntity.self)
```

## Topics

### Accessing query results

- [items](resolvedvaluequeryresult/items.md): The results that the query returns.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Intent and query result verification

- [ResolvedIntentResult](resolvedintentresult.md): A type-safe result from performing an app intent.
