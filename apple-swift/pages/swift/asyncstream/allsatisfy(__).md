> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncstream/allsatisfy(_:)](https://developer.apple.com/documentation/swift/asyncstream/allsatisfy(_:))

# allSatisfy(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether all elements produced by the asynchronous sequence satisfy the given predicate.

## Declaration

```swift
func allSatisfy(_ predicate: (Self.Element) async throws -> Bool) async rethrows -> Bool
```

## Parameters

- `predicate`: A closure that takes an element of the asynchronous sequence as its argument and returns a Boolean value that indicates whether the passed element satisfies a condition.

<a id="return-value"></a>

## Return Value

`true` if the sequence contains only elements that satisfy `predicate`; otherwise, `false`.

<a id="discussion"></a>

## Discussion

In this example, an asynchronous sequence called `Counter` produces `Int` values from `1` to `10`. The `allSatisfy(_:)` method checks to see whether all elements produced by the sequence are less than `10`.

```swift
let allLessThanTen = await Counter(howHigh: 10)
    .allSatisfy { $0 < 10 }
print(allLessThanTen)
// Prints "false"
```

The predicate executes each time the asynchronous sequence produces an element, until either the predicate returns `false` or the sequence ends.

If the asynchronous sequence is empty, this method returns `true`.

## See Also

### Finding Elements

- [contains(\_:)](contains%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value that indicates whether the asynchronous sequence contains the given element.
- [contains(where:)](contains%28where_%29.md): Returns a Boolean value that indicates whether the asynchronous sequence contains an element that satisfies the given predicate.
- [first(where:)](first%28where_%29.md): Returns the first element of the sequence that satisfies the given predicate.
- [min()](min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in an asynchronous sequence of comparable elements.
- [min(by:)](min%28by_%29.md): Returns the minimum element in the asynchronous sequence, using the given predicate as the comparison between elements.
- [max()](max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in an asynchronous sequence of comparable elements.
- [max(by:)](max%28by_%29.md): Returns the maximum element in the asynchronous sequence, using the given predicate as the comparison between elements.
