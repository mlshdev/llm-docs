> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/uniquearray/append(_:)

# append(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Adds an element to the end of the array.

## Declaration

```swift
mutating func append(_ item: consuming Element)
```

## Parameters

- `item`: The element to append to the collection.

<a id="discussion"></a>

## Discussion

If the array does not have sufficient capacity to hold any more elements, then this reallocates the array’s storage to grow its capacity, using a geometric growth rate.

> **Complexity**

> O(1) as amortized over many invocations on the same array.
