> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/contentstateupdates-swift.struct/makeasynciterator()](https://developer.apple.com/documentation/activitykit/activity/contentstateupdates-swift.struct/makeasynciterator())

# makeAsyncIterator()

**Framework:** ActivityKit  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.2) · iPadOS 16.1+ (deprecated in 16.2)

Creates the asynchronous iterator that produces results from this asynchronous sequence.

> Use \`ContentUpdates\` instead

## Declaration

```swift
func makeAsyncIterator() -> Activity<Attributes>.ContentStateUpdates.Iterator
```

## See Also

### Creating an iterator

- [Activity.ContentStateUpdates.Iterator](iterator.md): Deprecated. An iterator for accessing individual data entries from the series.
- [Activity.ContentStateUpdates.Element](element.md): Deprecated. The type of element this asynchronous sequence produces.
