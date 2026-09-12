> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilityrotorcontent](https://developer.apple.com/documentation/swiftui/accessibilityrotorcontent)

# AccessibilityRotorContent

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Content within an accessibility rotor.

## Declaration

```swift
@MainActor @preconcurrency protocol AccessibilityRotorContent
```

<a id="overview"></a>

## Overview

Generally generated from control flow constructs like `ForEach` and `if`, and `AccessibilityRotorEntry`.

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

```swift
struct MyCustomType: Transition {
    // `@preconcurrency @MainActor` isolation by default
}
```

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

```swift
extension MyCustomType: Transition {
    // `nonisolated` by default
}
```

## Topics

### Supporting types

- [body](accessibilityrotorcontent/body-swift.property.md): The internal content of this `AccessibilityRotorContent`.
- [Body](accessibilityrotorcontent/body-swift.associatedtype.md): The type for the internal content of this `AccessibilityRotorContent`.

## Relationships

### Conforming Types

- [AccessibilityRotorEntry](accessibilityrotorentry.md)
- [ForEach](foreach.md)
- [Group](group.md)
- [TupleContent](tuplecontent.md)

## See Also

### Creating rotors

- [AccessibilityRotorContentBuilder](accessibilityrotorcontentbuilder.md): Result builder you use to generate rotor entry content.
- [AccessibilityRotorEntry](accessibilityrotorentry.md): Conforms when `ID` conforms to `Copyable`, `Escapable`, and `Hashable`. A struct representing an entry in an Accessibility Rotor.
