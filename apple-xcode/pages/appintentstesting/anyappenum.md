> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/anyappenum](https://developer.apple.com/documentation/appintentstesting/anyappenum)

# AnyAppEnum

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type-erased representation of an app enumeration that provides dynamic enumeration value access.

## Declaration

```swift
struct AnyAppEnum
```

<a id="overview"></a>

## Overview

Use `AnyAppEnum` to work with enumerations when you don’t know the specific enumeration type at compile time. At compile, the [AnyAppEnum](anyappenum.md) structure resolves to your app enum type and gives you access to its value as shown in the following example:

```swift
let definitions = IntentDefinitions(
    bundleIdentifier: "com.apple.example"
)
let colorEnum = definitions.enums["Color"]
let priorityEnum = definitions.enums["Priority"]

// Creating enumeration cases.
let redCase = colorEnum.makeCase("red")
let highPriority = priorityEnum.makeCase("high")

// Accessing enumeration properties.
let rawValue = redCase.rawValue  // "red"

// Converting raw values in a type-safe way.
let colorName = try redCase.as(String.self)
let priorityLevel = try highPriority.as(String.self)
```

## Topics

### Creating an enum

- [init(typeIdentifier:rawValue:)](anyappenum/init%28typeidentifier_rawvalue_%29.md): Creates a new instance with the specified enumeration identifier and raw value.
- [init(typeIdentifier:value:)](anyappenum/init%28typeidentifier_value_%29.md): Creates an enumeration with a typed raw value.
- [typeIdentifier](anyappenum/typeidentifier.md): The enumeration’s type identifier.
- [rawValue](anyappenum/rawvalue.md): The raw value of the selected enumeration option.

### Converting enum values

- [as(\_:)](anyappenum/as%28__%29.md): Casts the raw value to the specified type.

### Default Implementations

- [CustomStringConvertible Implementations](anyappenum/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
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
- [AnyTransientAppEntity](anytransientappentity.md): A type-erased representation of a transient app entity that provides dynamic property access.
