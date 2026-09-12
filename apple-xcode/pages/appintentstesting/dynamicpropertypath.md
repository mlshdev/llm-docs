> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/dynamicpropertypath](https://developer.apple.com/documentation/appintentstesting/dynamicpropertypath)

# DynamicPropertyPath

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type-safe, dynamic path to access nested intent values.

## Declaration

```swift
@dynamicMemberLookup struct DynamicPropertyPath
```

<a id="overview"></a>

## Overview

You typically don’t create instances of `DynamicPropertyPath` directly. The system returns instances of the type to indicate that you can further traverse a nested property. Use `DynamicPropertyPath` for chained property access and array indexing on entities and intent results.

```swift
// Navigate nested properties.
let name: String = try entity.profile.name

// Index properties into an array.
let first: String = try entity.tags[0]

// Cast the entity to a known entity type definition.
let coffee: AnyAppEntity = try result.value.as(CoffeeEntity)
```

## Topics

### Instance Methods

- [as(\_:)](dynamicpropertypath/as%28__%29-5po1a.md): Casts a property to the provided type.
- [as(\_:)](dynamicpropertypath/as%28__%29-6n9rh.md): Casts the value to the given type.

### Subscripts

- [subscript(\_:)](dynamicpropertypath/subscript%28__%29-1hj9z.md): Accesses a collection element by index, without casting.
- [subscript(\_:)](dynamicpropertypath/subscript%28__%29-4bof1.md): Accesses a nested property on a collection element by index.
- [subscript(\_:)](dynamicpropertypath/subscript%28__%29-kiay.md): Accesses a collection element by index, for comparison with a known value.
- [subscript(dynamicMember:)](dynamicpropertypath/subscript%28dynamicmember_%29-aj9z.md): Creates a dynamic path for navigating deeper into a nested property hierarchy.
- [subscript(dynamicMember:)](dynamicpropertypath/subscript%28dynamicmember_%29-hqdv.md): Accesses a property by name without casting.
- [subscript(dynamicMember:)](dynamicpropertypath/subscript%28dynamicmember_%29-lizi.md): Accesses a typed property at the current path by name.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AppIntentTypeDefinition](appintenttypedefinition.md): A protocol that associates a definition type with its corresponding instance type.
- [DynamicPropertyPathCollection](dynamicpropertypathcollection.md): Indexed result items from an intent value query.
- [IntentValuePropertiesCallable](intentvaluepropertiescallable.md): A callable wrapper that creates app intent instances from keyword arguments.
