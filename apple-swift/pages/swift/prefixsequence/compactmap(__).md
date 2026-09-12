> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/prefixsequence/compactmap(_:)](https://developer.apple.com/documentation/swift/prefixsequence/compactmap(_:))

# compactMap(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the non-`nil` results of calling the given transformation with each element of this sequence.

## Declaration

```swift
func compactMap<ElementOfResult>(_ transform: (Self.Element) throws -> ElementOfResult?) rethrows -> [ElementOfResult]
```

## Parameters

- `transform`: A closure that accepts an element of this sequence as its argument and returns an optional value.

<a id="return-value"></a>

## Return Value

An array of the non-`nil` results of calling `transform` with each element of the sequence.

<a id="discussion"></a>

## Discussion

Use this method to receive an array of non-optional values when your transformation produces an optional value.

In this example, note the difference in the result of using `map` and `compactMap` with a transformation that returns an optional `Int` value.

```swift
let possibleNumbers = ["1", "2", "three", "///4///", "5"]

let mapped: [Int?] = possibleNumbers.map { str in Int(str) }
// [1, 2, nil, nil, 5]

let compactMapped: [Int] = possibleNumbers.compactMap { str in Int(str) }
// [1, 2, 5]
```

> **Complexity**

> O(*n*), where *n* is the length of this sequence.
