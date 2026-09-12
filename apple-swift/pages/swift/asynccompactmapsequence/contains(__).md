> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asynccompactmapsequence/contains(_:)](https://developer.apple.com/documentation/swift/asynccompactmapsequence/contains(_:))

# contains(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the asynchronous sequence contains the given element.

## Declaration

```swift
func contains(_ search: Self.Element) async rethrows -> Bool
```

## Parameters

- `search`: The element to find in the asynchronous sequence.

<a id="return-value"></a>

## Return Value

`true` if the method found the element in the asynchronous sequence; otherwise, `false`.

<a id="discussion"></a>

## Discussion

In this example, an asynchronous sequence called `Counter` produces `Int` values from `1` to `10`. The `contains(_:)` method checks to see whether the sequence produces the value `5`:

```swift
let containsFive = await Counter(howHigh: 10)
    .contains(5)
print(containsFive)
// Prints "true"
```
