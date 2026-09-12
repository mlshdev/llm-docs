> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/utf8view/subscript(_:)-6nubh](https://developer.apple.com/documentation/swift/string/utf8view/subscript(_:)-6nubh)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the code unit at the given position.

## Declaration

```swift
subscript(i: String.UTF8View.Index) -> UTF8.CodeUnit { get }
```

## Parameters

- `i`: A valid index of the view. `i` must be less than the view’s end index.

<a id="overview"></a>

## Overview

The following example uses the subscript to print the value of a string’s first UTF-8 code unit.

```swift
let greeting = "Hello, friend!"
let i = greeting.utf8.startIndex
print("First character's UTF-8 code unit: \(greeting.utf8[i])")
// Prints "First character's UTF-8 code unit: 72"
```
