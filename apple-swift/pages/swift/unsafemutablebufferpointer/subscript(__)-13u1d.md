> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer/subscript(_:)-13u1d](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/subscript(_:)-13u1d)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses a contiguous subrange of the buffer’s elements.

## Declaration

```swift
subscript(bounds: Range<Int>) -> Slice<UnsafeMutableBufferPointer<Element>> { get nonmutating set }
```

## Parameters

- `bounds`: A range of the buffer’s indices. The bounds of the range must be valid indices of the buffer.

<a id="overview"></a>

## Overview

The accessed slice uses the same indices for the same elements as the original buffer uses. Always use the slice’s `startIndex` property instead of assuming that its indices start at a particular value.

This example demonstrates getting a slice from a buffer of strings, finding the index of one of the strings in the slice, and then using that index in the original buffer.

```swift
var streets = ["Adams", "Bryant", "Channing", "Douglas", "Evarts"]
streets.withUnsafeMutableBufferPointer { buffer in
    let streetSlice = buffer[2..<buffer.endIndex]
    print(Array(streetSlice))
    // Prints "["Channing", "Douglas", "Evarts"]"
    let index = streetSlice.firstIndex(of: "Evarts")    // 4
    buffer[index!] = "Eustace"
}
print(streets.last!)
// Prints "Eustace"
```

> **Note**

> Bounds checks for `bounds` are performed only in debug mode.
