> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncstream/compactmap(_:)-7mgjd](https://developer.apple.com/documentation/swift/asyncstream/compactmap(_:)-7mgjd)

# compactMap(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements, omitting results that don’t return a value.

## Declaration

```swift
@preconcurrency func compactMap<ElementOfResult>(_ transform: @escaping @Sendable (Self.Element) async -> ElementOfResult?) -> AsyncCompactMapSequence<Self, ElementOfResult>
```

## Parameters

- `transform`: A mapping closure. `transform` accepts an element of this sequence as its parameter and returns a transformed value of the same or of a different type.

<a id="return-value"></a>

## Return Value

An asynchronous sequence that contains, in order, the non-`nil` elements produced by the `transform` closure.

<a id="discussion"></a>

## Discussion

Use the `compactMap(_:)` method to transform every element received from a base asynchronous sequence, while also discarding any `nil` results from the closure. Typically, you use this to transform from one type of element to another.

In this example, an asynchronous sequence called `Counter` produces `Int` values from `1` to `5`. The closure provided to the `compactMap(_:)` method takes each `Int` and looks up a corresponding `String` from a `romanNumeralDict` dictionary. Because there is no key for `4`, the closure returns `nil` in this case, which `compactMap(_:)` omits from the transformed asynchronous sequence.

```swift
let romanNumeralDict: [Int: String] =
    [1: "I", 2: "II", 3: "III", 5: "V"]
    
let stream = Counter(howHigh: 5)
    .compactMap { romanNumeralDict[$0] }
for await numeral in stream {
    print(numeral, terminator: " ")
}
// Prints "I II III V "
```

## See Also

### Transforming a Sequence

- [map(\_:)](map%28__%29-58nsf.md): Creates an asynchronous sequence that maps the given error-throwing closure over the asynchronous sequence’s elements.
- [map(\_:)](map%28__%29-4a4la.md): Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements.
- [compactMap(\_:)](compactmap%28__%29-944op.md): Creates an asynchronous sequence that maps an error-throwing closure over the base sequence’s elements, omitting results that don’t return a value.
- [flatMap(\_:)](flatmap%28__%29-vhhr.md): Creates an asynchronous sequence that concatenates the results of calling the given error-throwing transformation with each element of this sequence.
- [reduce(\_:\_:)](reduce%28____%29.md): Returns the result of combining the elements of the asynchronous sequence using the given closure.
- [reduce(into:\_:)](reduce%28into___%29.md): Returns the result of combining the elements of the asynchronous sequence using the given closure, given a mutable initial value.
