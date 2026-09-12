> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazyfiltersequence/joined()-2q2lq](https://developer.apple.com/documentation/swift/lazyfiltersequence/joined()-2q2lq)

# joined()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a lazy sequence that concatenates the elements of this sequence of sequences.

## Declaration

```swift
func joined() -> LazySequence<FlattenSequence<Self.Elements>>
```
