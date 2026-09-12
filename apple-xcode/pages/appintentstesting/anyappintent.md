> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/anyappintent](https://developer.apple.com/documentation/appintentstesting/anyappintent)

# AnyAppIntent

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type-erased, intermediate representation of an app intent for testing purposes.

## Declaration

```swift
@dynamicMemberLookup struct AnyAppIntent
```

<a id="overview"></a>

## Overview

The [AnyAppIntent](anyappintent.md) structure resolves to your actual app intent type and gives you access to its parameters and results at runtime, enabling you to test your app intent code as shown in the following example:

```swift
// Getting an intent definition and creating an instance.
let definitions = IntentDefinitions(
    bundleIdentifier: "com.example.app"
)
var intent = definitions.intents["CreateNote"]
    .makeIntent()

// Setting any intent parameters.
intent.title = "Meeting Notes"
intent.priority = 5
intent.isUrgent = true

// Reading parameters, when needed.
let title: String? = try intent.title

// Performing the intent.
let result = try await intent.run()

// Adding your verification code.
// ...
```

## Topics

### Identifying the intent

- [bundleIdentifier](anyappintent/bundleidentifier.md): The bundle identifier of the app that contains this intent.
- [identifier](anyappintent/identifier.md): The unique identifier for the intent type.

### Performing the intent

- [run()](anyappintent/run%28%29.md): Performs the intent in the current test session.

### Subscripts

- [subscript(dynamicMember:)](anyappintent/subscript%28dynamicmember_%29-127ab.md): Accesses an intent parameter by name, for comparison with a known value.
- [subscript(dynamicMember:)](anyappintent/subscript%28dynamicmember_%29-7agfn.md): Accesses a nested entity property by name.
- [subscript(dynamicMember:)](anyappintent/subscript%28dynamicmember_%29-8l8h0.md): Accesses an intent parameter by name, without casting.

### Default Implementations

- [CustomStringConvertible Implementations](anyappintent/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Intermediate types

- [AnyAppEntity](anyappentity.md): A type-erased, intermediate representation of your app entity for testing purposes.
- [AnyEntityQuery](anyentityquery.md): A type-erased, intermediate representation of your entity query for testing purposes.
- [AnyAppEnum](anyappenum.md): A type-erased representation of an app enumeration that provides dynamic enumeration value access.
- [AnyTransientAppEntity](anytransientappentity.md): A type-erased representation of a transient app entity that provides dynamic property access.
