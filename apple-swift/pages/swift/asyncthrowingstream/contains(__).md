> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingstream/contains(_:)](https://developer.apple.com/documentation/swift/asyncthrowingstream/contains(_:))

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

## See Also

### Finding Elements

- [contains(where:)](contains%28where_%29.md): Returns a Boolean value that indicates whether the asynchronous sequence contains an element that satisfies the given predicate.
- [allSatisfy(\_:)](allsatisfy%28__%29.md): Returns a Boolean value that indicates whether all elements produced by the asynchronous sequence satisfy the given predicate.
- [first(where:)](first%28where_%29.md): Returns the first element of the sequence that satisfies the given predicate.
- [min()](min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in an asynchronous sequence of comparable elements.
- [min(by:)](min%28by_%29.md): Returns the minimum element in the asynchronous sequence, using the given predicate as the comparison between elements.
- [max()](max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in an asynchronous sequence of comparable elements.
- [max(by:)](max%28by_%29.md): Returns the maximum element in the asynchronous sequence, using the given predicate as the comparison between elements.
