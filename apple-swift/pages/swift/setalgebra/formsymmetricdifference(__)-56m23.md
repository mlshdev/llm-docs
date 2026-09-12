> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/formsymmetricdifference(_:)-56m23](https://developer.apple.com/documentation/swift/setalgebra/formsymmetricdifference(_:)-56m23)

# formSymmetricDifference(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces this set with a new set containing all elements contained in either this set or the given set, but not in both.

## Declaration

```swift
mutating func formSymmetricDifference(_ other: Self)
```

## Parameters

- `other`: An option set.

<a id="discussion"></a>

## Discussion

This method is implemented as a `^` (bitwise XOR) operation on the two sets’ raw values.
