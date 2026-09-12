> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangeset/contains(_:)](https://developer.apple.com/documentation/swift/rangeset/contains(_:))

# contains(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a Boolean value indicating whether the given value is contained by the ranges in the range set.

## Declaration

```swift
func contains(_ value: Bound) -> Bool
```

## Parameters

- `value`: The value to look for in the range set.

<a id="return-value"></a>

## Return Value

`true` if `value` is contained by a range in the range set; otherwise, `false`.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(log *n*), where *n* is the number of ranges in the range set.
