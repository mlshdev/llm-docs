> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/persistentidentifier](https://developer.apple.com/documentation/swiftdata/persistentidentifier)

# PersistentIdentifier

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that describes the aggregate identity of a SwiftData model.

## Declaration

```swift
struct PersistentIdentifier
```

<a id="overview"></a>

## Overview

> **Note**

> Decoded [PersistentIdentifier](persistentidentifier.md) and identifiers created by the [DefaultStore](defaultstore.md) are not considered equivalent.

## Topics

### Accessing identity information

- [id](persistentidentifier/id-swift.property.md): The value that uniquely identifies the associated model within the containing store.
- [PersistentIdentifier.ID](persistentidentifier/id-swift.struct.md): A type that represents the stable identity of a SwiftData model.
- [storeIdentifier](persistentidentifier/storeidentifier.md): The identifier of the store that contains the associated model.
- [entityName](persistentidentifier/entityname.md): The entity name for the associated model.

### Instance Properties

- [isTemporary](persistentidentifier/istemporary.md): A Boolean value that indicates whether the identifier is temporary.

### Type Methods

- [identifier(for:entityName:primaryKey:)](persistentidentifier/identifier%28for_entityname_primarykey_%29.md)

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying the model instance

- [persistentModelID](persistentmodel/persistentmodelid.md)
- [modelContext](persistentmodel/modelcontext.md)
