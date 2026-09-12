> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/unicodescalarview/append(contentsof:)](https://developer.apple.com/documentation/swift/string/unicodescalarview/append(contentsof:))

# append(contentsOf:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Appends the Unicode scalar values in the given sequence to the view.

## Declaration

```swift
mutating func append<S>(contentsOf newElements: S) where S : Sequence, S.Element == Unicode.Scalar
```

## Parameters

- `newElements`: A sequence of Unicode scalar values.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(*n*), where *n* is the length of the resulting view.
