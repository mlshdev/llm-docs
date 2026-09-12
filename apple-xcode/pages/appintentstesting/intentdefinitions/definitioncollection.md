> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/intentdefinitions/definitioncollection](https://developer.apple.com/documentation/appintentstesting/intentdefinitions/definitioncollection)

# IntentDefinitions.DefinitionCollection

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A collection of a specific type of definition.

## Declaration

```swift
struct DefinitionCollection<Definition>
```

<a id="overview"></a>

## Overview

Retrieve individual definitions using their type identifier string as shown in the following example:

```swift
let orderIntent = definitions.intents[
    "OrderCoffeeIntent"
]
```

## Topics

### Subscripts

- [subscript(\_:)](definitioncollection/subscript%28__%29.md): Retrieves a type definition using its identifier.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
