> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionjournal/attachments-swift.struct/makeasynciterator()](https://developer.apple.com/documentation/groupactivities/groupsessionjournal/attachments-swift.struct/makeasynciterator())

# makeAsyncIterator()

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates the asynchronous iterator that produces elements of this asynchronous sequence.

## Declaration

```swift
func makeAsyncIterator() -> GroupSessionJournal.Attachments.Iterator
```

<a id="discussion"></a>

## Discussion

-Returns: An instance of the `Iterator` type that produces elements of the asynchronous sequence.

## See Also

### Creating an iterator

- [GroupSessionJournal.Attachments.Iterator](iterator.md): The asynchronous iterator that produces a sequence of attachments.
- [GroupSessionJournal.Attachments.Element](element.md): The type of element this asynchronous sequence produces.
