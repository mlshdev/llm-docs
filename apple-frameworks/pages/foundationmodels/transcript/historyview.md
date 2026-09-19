> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/historyview

# Transcript.HistoryView

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A mutable view into the conversational entries of a transcript.

## Declaration

```swift
struct HistoryView
```

## Topics

### Instance Methods

- [append(\_:)](historyview/append%28__%29.md): Adds an entry to the end of the history view.
- [append(contentsOf:)](historyview/append%28contentsof_%29.md): Adds the entries of a sequence to the end of the history view.

### Subscripts

- [subscript(\_:)](historyview/subscript%28__%29.md): Accesses the subsequence of entries within the specified bounds.

### Type Aliases

- [Transcript.HistoryView.Element](historyview/element.md): The type of entry the view contains.
- [Transcript.HistoryView.SubSequence](historyview/subsequence.md): The type that represents a contiguous subrange of the view’s entries.

### Default Implementations

- [ExpressibleByArrayLiteral Implementations](historyview/expressiblebyarrayliteral-implementations.md)
- [MutableCollection Implementations](historyview/mutablecollection-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [RangeReplaceableCollection](https://developer.apple.com/documentation/swift/rangereplaceablecollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Accessing the transcript history

- [history](history.md): The transcript entries excluding the leading instructions entry, if present.
