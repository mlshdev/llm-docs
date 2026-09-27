> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/activitykit/activity/pushtokenupdates-swift.struct/makeasynciterator()

# makeAsyncIterator()

**Framework:** ActivityKit  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+

Creates the asynchronous iterator that produces results from this asynchronous sequence.

## Declaration

```swift
func makeAsyncIterator() -> Activity<Attributes>.PushTokenUpdates.Iterator
```

## See Also

### Creating an iterator

- [Activity.PushTokenUpdates.Iterator](iterator.md): An iterator for accessing individual data entries from the series.
- [Activity.PushTokenUpdates.Element](element.md): The type of element this asynchronous sequence produces.
