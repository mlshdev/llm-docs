> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/symmetricdifference(_:)-81pzi](https://developer.apple.com/documentation/swift/setalgebra/symmetricdifference(_:)-81pzi)

# symmetricDifference(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new option set with the elements contained in this set or in the given set, but not in both.

## Declaration

```swift
func symmetricDifference(_ other: Self) -> Self
```

## Parameters

- `other`: An option set.

<a id="return-value"></a>

## Return Value

A new option set with only the elements contained in either this set or `other`, but not in both.
