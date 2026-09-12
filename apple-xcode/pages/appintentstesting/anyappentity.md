> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/anyappentity](https://developer.apple.com/documentation/appintentstesting/anyappentity)

# AnyAppEntity

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type-erased, intermediate representation of your app entity for testing purposes.

## Declaration

```swift
@dynamicMemberLookup struct AnyAppEntity
```

## Mentioned In

- [Testing your App Intents code](testing-your-app-intents-code.md)

<a id="overview"></a>

## Overview

The `AnyAppEntity` structure resolves to your actual entity type and gives you access to its properties, enabling you to test your app entity code:

```swift
// Define your app entity type from your app bundle:
let definitions = IntentDefinitions(
    bundleIdentifier: "com.apple.example"
)
let exampleEntity = definitions.entities[
    "ExampleEntity"
]

// Create an entity from an identifier.
let entity = exampleEntity.makeReference(
    identifier: "my-example"
)

// Type-safe access to the entity's properties.
let name: String? = entity.name
let itemCount: Int? = entity.itemCount

// Accessing nested properties (requires try).
if try entity.profile.name == "John Doe" {
    print("User found")
}
```

## Topics

### Identifying the entity

- [identifier](anyappentity/identifier.md): The value that uniquely identifies the app entity.

### Instance Methods

- [exported(as:)](anyappentity/exported%28as_%29-54w7m.md): Exports this entity as a system intent value type.
- [exported(as:)](anyappentity/exported%28as_%29-7pg2q.md): Exports this entity as a transferable intent value type.
- [exported(as:)](anyappentity/exported%28as_%29-8qa8k.md): Exports this entity’s content as an `IntentFile`.

### Subscripts

- [subscript(dynamicMember:)](anyappentity/subscript%28dynamicmember_%29-4bdp1.md): Accesses an entity property by name, without casting.
- [subscript(dynamicMember:)](anyappentity/subscript%28dynamicmember_%29-5twll.md): Accesses an entity property by name, for comparison with a known value.
- [subscript(dynamicMember:)](anyappentity/subscript%28dynamicmember_%29-yuv.md): Accesses a nested entity property by name.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [IntentValueConvertible](https://developer.apple.com/documentation/appintents/intentvalueconvertible)
- [IntentValueExpressing](https://developer.apple.com/documentation/appintents/intentvalueexpressing)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Intermediate types

- [AnyAppIntent](anyappintent.md): A type-erased, intermediate representation of an app intent for testing purposes.
- [AnyEntityQuery](anyentityquery.md): A type-erased, intermediate representation of your entity query for testing purposes.
- [AnyAppEnum](anyappenum.md): A type-erased representation of an app enumeration that provides dynamic enumeration value access.
- [AnyTransientAppEntity](anytransientappentity.md): A type-erased representation of a transient app entity that provides dynamic property access.
