> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/enumeratedsequence/index(after:)](https://developer.apple.com/documentation/swift/enumeratedsequence/index(after:))

# index(after:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the position immediately after the given index.

## Declaration

```swift
func index(after index: EnumeratedSequence<Base>.Index) -> EnumeratedSequence<Base>.Index
```

<a id="return-value"></a>

## Return Value

The index value immediately after `i`.

<a id="discussion"></a>

## Discussion

The successor of an index must be well defined. For an index `i` into a collection `c`, calling `c.index(after: i)` returns the same index every time.
