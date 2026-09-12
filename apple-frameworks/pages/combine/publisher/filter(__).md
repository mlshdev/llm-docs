> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/filter(_:)](https://developer.apple.com/documentation/combine/publisher/filter(_:))

# filter(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Republishes all elements that match a provided closure.

## Declaration

```swift
func filter(_ isIncluded: @escaping (Self.Output) -> Bool) -> Publishers.Filter<Self>
```

## Parameters

- `isIncluded`: A closure that takes one element and returns a Boolean value indicating whether to republish the element.

<a id="return-value"></a>

## Return Value

A publisher that republishes all elements that satisfy the closure.

## Mentioned In

- [Receiving and Handling Events with Combine](../receiving-and-handling-events-with-combine.md)
- [Routing Notifications to Combine Subscribers](../routing-notifications-to-combine-subscribers.md)

<a id="discussion"></a>

## Discussion

Combine’s [filter(\_:)](filter%28__%29.md) operator performs an operation similar to that of [filter(\_:)](https://developer.apple.com/documentation/swift/sequence/filter%28_:%29-8li9y) in the Swift Standard Library: it uses a closure to test each element to determine whether to republish the element to the downstream subscriber.

The following example, uses a filter operation that receives an `Int` and only republishes a value if it’s even.

```swift
let numbers: [Int] = [1, 2, 3, 4, 5]
cancellable = numbers.publisher
    .filter { $0 % 2 == 0 }
    .sink { print("\($0)", terminator: " ") }

// Prints: "2 4"
```

## See Also

### Filtering elements

- [tryFilter(\_:)](tryfilter%28__%29.md): Republishes all elements that match a provided error-throwing closure.
- [compactMap(\_:)](compactmap%28__%29.md): Calls a closure with each received element and publishes any returned optional that has a value.
- [tryCompactMap(\_:)](trycompactmap%28__%29.md): Calls an error-throwing closure with each received element and publishes any returned optional that has a value.
- [removeDuplicates()](removeduplicates%28%29.md): Conforms when `Output` conforms to `Equatable`. Publishes only elements that don’t match the previous element.
- [removeDuplicates(by:)](removeduplicates%28by_%29.md): Publishes only elements that don’t match the previous element, as evaluated by a provided closure.
- [tryRemoveDuplicates(by:)](tryremoveduplicates%28by_%29.md): Publishes only elements that don’t match the previous element, as evaluated by a provided error-throwing closure.
- [replaceEmpty(with:)](replaceempty%28with_%29.md): Replaces an empty stream with the provided element.
- [replaceError(with:)](replaceerror%28with_%29.md): Replaces any errors in the stream with the provided element.
