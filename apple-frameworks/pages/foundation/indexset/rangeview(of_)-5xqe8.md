> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/indexset/rangeview(of:)-5xqe8](https://developer.apple.com/documentation/foundation/indexset/rangeview(of:)-5xqe8)

# rangeView(of:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a `Range`-based view of `self`.

## Declaration

```swift
func rangeView(of range: Range<IndexSet.Element>) -> IndexSet.RangeView
```

## Parameters

- `range`: A subrange of `self` to view.

## See Also

### Getting a Range-Based View

- [rangeView](rangeview-swift.property.md): Returns a `Range`-based view of the entire contents of `self`.
- [IndexSet.RangeView](rangeview-swift.struct.md): A view of the contents of an IndexSet, organized by range.
