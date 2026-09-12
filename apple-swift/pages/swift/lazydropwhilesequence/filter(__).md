> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazydropwhilesequence/filter(_:)](https://developer.apple.com/documentation/swift/lazydropwhilesequence/filter(_:))

# filter(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the elements of `self` that satisfy `isIncluded`.

## Declaration

```swift
func filter(_ isIncluded: @escaping (Self.Elements.Element) -> Bool) -> LazyFilterSequence<Self.Elements>
```

<a id="discussion"></a>

## Discussion

> **Note**

> The elements of the result are computed on-demand, as the result is used. No buffering storage is allocated and each traversal step invokes `predicate` on one or more underlying elements.
