> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/utf16view/subscript(_:)-5ta1h](https://developer.apple.com/documentation/swift/string/utf16view/subscript(_:)-5ta1h)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the code unit at the given position.

## Declaration

```swift
subscript(idx: String.UTF16View.Index) -> UTF16.CodeUnit { get }
```

## Parameters

- `idx`: A valid index of the view. `idx` must be less than the view’s end index.

<a id="overview"></a>

## Overview

The following example uses the subscript to print the value of a string’s first UTF-16 code unit.

```swift
let greeting = "Hello, friend!"
let i = greeting.utf16.startIndex
print("First character's UTF-16 code unit: \(greeting.utf16[i])")
// Prints "First character's UTF-16 code unit: 72"
```
