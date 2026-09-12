> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/slice/init(base:bounds:)](https://developer.apple.com/documentation/swift/slice/init(base:bounds:))

# init(base:bounds:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a view into the given collection that allows access to elements within the specified range.

## Declaration

```swift
init(base: Base, bounds: Range<Base.Index>)
```

## Parameters

- `base`: The collection to create a view into.
- `bounds`: The range of indices to allow access to in the new slice.

<a id="discussion"></a>

## Discussion

It is unusual to need to call this method directly. Instead, create a slice of a collection by using the collection’s range-based subscript or by using methods that return a subsequence.

```swift
let singleDigits = 0...9
let subSequence = singleDigits.dropFirst(5)
print(Array(subSequence))
// Prints "[5, 6, 7, 8, 9]"
```

In this example, the expression `singleDigits.dropFirst(5))` is equivalent to calling this initializer with `singleDigits` and a range covering the last five items of `singleDigits.indices`.
