> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/append(copying:)-3aouw](https://developer.apple.com/documentation/swift/uniquearray/append(copying:)-3aouw)

# append(copying:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Copies the elements of a span to the end of this array.

## Declaration

```swift
mutating func append(copying newElements: Span<Element>)
```

## Parameters

- `newElements`: A span whose contents to copy into the array.

<a id="discussion"></a>

## Discussion

If the array does not have sufficient capacity to hold enough elements, then this reallocates the array’s storage to extend its capacity, using a geometric growth rate.

> **Complexity**

> O(`newElements.count`) when amortized over many invocations on the same array.
