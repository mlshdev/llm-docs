> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/caseiterable](https://developer.apple.com/documentation/swift/caseiterable)

# CaseIterable

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that provides a collection of all of its values.

## Declaration

```swift
protocol CaseIterable
```

<a id="overview"></a>

## Overview

Types that conform to the `CaseIterable` protocol are typically enumerations without associated values. When using a `CaseIterable` type, you can access a collection of all of the type’s cases by using the type’s `allCases` property.

For example, the `CompassDirection` enumeration declared in this example conforms to `CaseIterable`. You access the number of cases and the cases themselves through `CompassDirection.allCases`.

```swift
enum CompassDirection: CaseIterable {
    case north, south, east, west
}

print("There are \(CompassDirection.allCases.count) directions.")
// Prints "There are 4 directions."
let caseList = CompassDirection.allCases
                               .map({ "\($0)" })
                               .joined(separator: ", ")
// caseList == "north, south, east, west"
```

<a id="Conforming-to-the-CaseIterable-Protocol"></a>

## Conforming to the CaseIterable Protocol

The compiler can automatically provide an implementation of the `CaseIterable` requirements for any enumeration without associated values or `@available` attributes on its cases. The synthesized `allCases` collection provides the cases in order of their declaration.

You can take advantage of this compiler support when defining your own custom enumeration by declaring conformance to `CaseIterable` in the enumeration’s original declaration. The `CompassDirection` example above demonstrates this automatic implementation.

## Topics

### Accessing Cases

- [allCases](caseiterable/allcases-swift.type.property.md): A collection of all values of this type.
- [AllCases](caseiterable/allcases-swift.associatedtype.md): A type that can represent a collection of all values of this type.

## See Also

### Raw Representation

- [RawRepresentable](rawrepresentable.md): A type that can be converted to and from an associated raw value.
