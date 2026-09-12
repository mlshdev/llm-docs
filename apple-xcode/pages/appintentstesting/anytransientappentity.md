> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/anytransientappentity](https://developer.apple.com/documentation/appintentstesting/anytransientappentity)

# AnyTransientAppEntity

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type-erased representation of a transient app entity that provides dynamic property access.

## Declaration

```swift
@dynamicMemberLookup struct AnyTransientAppEntity
```

<a id="overview"></a>

## Overview

Use `AnyTransientAppEntity` to work with transient entities when you don’t know the specific entity type at compile time.

```swift
// Getting transient entity definitions.
let definitions = IntentDefinitions(bundleIdentifier: "com.apple.example")
let sessionEntity = definitions.transientEntities["UserSessionEntity"]

// Creating a transient entity with properties.
var entity = sessionEntity.withProperties(
    name: "John Doe",
    age: 30
)

// Accessing properties with type safety.
let userName: String? = try entity.name
let userAge: Int? = try entity.age

// Accessing nested properties (requires try).
if try entity.profile.name == "John Doe" {
    print("User found")
}
```

## Topics

### Identifying the entity type

- [entityType](anytransientappentity/entitytype.md): The type of transient app entity represented by this identifier.

### Instance Methods

- [exported(as:)](anytransientappentity/exported%28as_%29-2rmw6.md): Exports this transient entity as a transferable intent value type.
- [exported(as:)](anytransientappentity/exported%28as_%29-7mrbg.md): Exports this transient entity’s content as an `IntentFile`.
- [exported(as:)](anytransientappentity/exported%28as_%29-8zhnu.md): Exports this transient entity as a system intent value type.

### Subscripts

- [subscript(dynamicMember:)](anytransientappentity/subscript%28dynamicmember_%29-5ygut.md): Accesses an entity property by name, without casting.
- [subscript(dynamicMember:)](anytransientappentity/subscript%28dynamicmember_%29-63vyv.md): Accesses a nested entity property by name.
- [subscript(dynamicMember:)](anytransientappentity/subscript%28dynamicmember_%29-8pfwv.md): Accesses an entity property by name, for comparison with a known value.

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
- [AnyAppEntity](anyappentity.md): A type-erased, intermediate representation of your app entity for testing purposes.
- [AnyEntityQuery](anyentityquery.md): A type-erased, intermediate representation of your entity query for testing purposes.
- [AnyAppEnum](anyappenum.md): A type-erased representation of an app enumeration that provides dynamic enumeration value access.
