> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/replacesubrange(_:with:)-21ouz](https://developer.apple.com/documentation/foundation/data/replacesubrange(_:with:)-21ouz)

# replaceSubrange(\_:with:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces a region of bytes in the data with new bytes from a collection.

## Declaration

```swift
mutating func replaceSubrange(_ subrange: Range<Data.Index>, with newElements: some ContiguousBytes & Collection<UInt8>)
```

## Parameters

- `subrange`: The range in the data to replace.
- `newElements`: The replacement bytes.

<a id="discussion"></a>

## Discussion

This will resize the data if required, to fit the entire contents of `newElements`.

> **Precondition**

> The bounds of `subrange` must be valid indices of the collection.
