> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/activitykit/activity/contentstateupdates-swift.struct/element

# Activity.ContentStateUpdates.Element

**Framework:** ActivityKit  
**Kind:** Type Alias  
**Availability:** iOS 16.1+ (deprecated in 16.2) · iPadOS 16.1+ (deprecated in 16.2)

The type of element this asynchronous sequence produces.

> Use \`ContentUpdates\` instead

## Declaration

```swift
typealias Element = Activity<Attributes>.ContentState
```

## See Also

### Creating an iterator

- [makeAsyncIterator()](makeasynciterator%28%29.md): Deprecated. Creates the asynchronous iterator that produces results from this asynchronous sequence.
- [Activity.ContentStateUpdates.Iterator](iterator.md): Deprecated. An iterator for accessing individual data entries from the series.
