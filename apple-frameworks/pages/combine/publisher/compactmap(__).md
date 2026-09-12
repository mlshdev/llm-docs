> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/compactmap(_:)](https://developer.apple.com/documentation/combine/publisher/compactmap(_:))

# compactMap(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Calls a closure with each received element and publishes any returned optional that has a value.

## Declaration

```swift
func compactMap<T>(_ transform: @escaping (Self.Output) -> T?) -> Publishers.CompactMap<Self, T>
```

## Parameters

- `transform`: A closure that receives a value and returns an optional value.

<a id="return-value"></a>

## Return Value

Any non-`nil` optional results of the calling the supplied closure.

<a id="discussion"></a>

## Discussion

Combine’s [compactMap(\_:)](compactmap%28__%29.md) operator performs a function similar to that of [compactMap(\_:)](https://developer.apple.com/documentation/swift/sequence/compactmap%28_:%29) in the Swift standard library: the [compactMap(\_:)](compactmap%28__%29.md) operator in Combine removes `nil` elements in a publisher’s stream and republishes non-`nil` elements to the downstream subscriber.

The example below uses a range of numbers as the source for a collection based publisher. The [compactMap(\_:)](compactmap%28__%29.md) operator consumes each element from the `numbers` publisher attempting to access the dictionary using the element as the key. If the example’s dictionary returns a `nil`, due to a non-existent key, [compactMap(\_:)](compactmap%28__%29.md) filters out the `nil` (missing) elements.

```swift
let numbers = (0...5)
let romanNumeralDict: [Int : String] =
    [1: "I", 2: "II", 3: "III", 5: "V"]

cancellable = numbers.publisher
    .compactMap { romanNumeralDict[$0] }
    .sink { print("\($0)", terminator: " ") }

// Prints: "I II III V"
```

## See Also

### Filtering elements

- [filter(\_:)](filter%28__%29.md): Republishes all elements that match a provided closure.
- [tryFilter(\_:)](tryfilter%28__%29.md): Republishes all elements that match a provided error-throwing closure.
- [tryCompactMap(\_:)](trycompactmap%28__%29.md): Calls an error-throwing closure with each received element and publishes any returned optional that has a value.
- [removeDuplicates()](removeduplicates%28%29.md): Conforms when `Output` conforms to `Equatable`. Publishes only elements that don’t match the previous element.
- [removeDuplicates(by:)](removeduplicates%28by_%29.md): Publishes only elements that don’t match the previous element, as evaluated by a provided closure.
- [tryRemoveDuplicates(by:)](tryremoveduplicates%28by_%29.md): Publishes only elements that don’t match the previous element, as evaluated by a provided error-throwing closure.
- [replaceEmpty(with:)](replaceempty%28with_%29.md): Replaces an empty stream with the provided element.
- [replaceError(with:)](replaceerror%28with_%29.md): Replaces any errors in the stream with the provided element.
