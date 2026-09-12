> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/dynamicpropertypathcollection](https://developer.apple.com/documentation/appintentstesting/dynamicpropertypathcollection)

# DynamicPropertyPathCollection

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indexed result items from an intent value query.

## Declaration

```swift
struct DynamicPropertyPathCollection
```

<a id="overview"></a>

## Overview

Access query results by index and navigate their properties using dynamic member lookup:

```swift
let result = try await searchQuery.values(for: "Arizona")

XCTAssertEqual(result.items.count, 3)
XCTAssertEqual(try result.items[0].name, "Botanical Garden")
```

## Topics

### Instance Properties

- [count](dynamicpropertypathcollection/count.md): The number of items in the collection.
- [isEmpty](dynamicpropertypathcollection/isempty.md): A Boolean value that indicates whether the collection is empty.

### Subscripts

- [subscript(\_:)](dynamicpropertypathcollection/subscript%28__%29-6t8mq.md): Accesses typed properties from the intent value at the given index.
- [subscript(\_:)](dynamicpropertypathcollection/subscript%28__%29-700kp.md): Creates a dynamic path for navigating into the item’s properties.
- [subscript(\_:)](dynamicpropertypathcollection/subscript%28__%29-8h9mv.md): Accesses an item for nil checking and assigning to intent parameters without casting.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AppIntentTypeDefinition](appintenttypedefinition.md): A protocol that associates a definition type with its corresponding instance type.
- [DynamicPropertyPath](dynamicpropertypath.md): A type-safe, dynamic path to access nested intent values.
- [IntentValuePropertiesCallable](intentvaluepropertiescallable.md): A callable wrapper that creates app intent instances from keyword arguments.
