> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/anyentityquery](https://developer.apple.com/documentation/appintentstesting/anyentityquery)

# AnyEntityQuery

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type-erased, intermediate representation of your entity query for testing purposes.

## Declaration

```swift
struct AnyEntityQuery
```

<a id="overview"></a>

## Overview

The `AnyEntityQuery` structure resolves to your concrete query type, and allows you to test your entity queries and verify their results as shown in the following example:

```swift
let landmarkDef = definitions.entities["LandmarkEntity"]

// Query by string.
let stringQueryResults = try await landmarkDef.entities(matching: "Yosemite")

// Query by identifiers.
let specific = try await landmarkDef.entities(identifiers: ["yosemite-falls"])

// Get all entities.
let all = try await landmarkDef.allEntities()
```

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Intermediate types

- [AnyAppIntent](anyappintent.md): A type-erased, intermediate representation of an app intent for testing purposes.
- [AnyAppEntity](anyappentity.md): A type-erased, intermediate representation of your app entity for testing purposes.
- [AnyAppEnum](anyappenum.md): A type-erased representation of an app enumeration that provides dynamic enumeration value access.
- [AnyTransientAppEntity](anytransientappentity.md): A type-erased representation of a transient app entity that provides dynamic property access.
