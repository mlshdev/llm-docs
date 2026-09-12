> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/contentupdates-swift.struct](https://developer.apple.com/documentation/activitykit/activity/contentupdates-swift.struct)

# Activity.ContentUpdates

**Framework:** ActivityKit  
**Kind:** Structure  
**Availability:** iOS 16.2+ · iPadOS 16.2+

A structure that offers functionality to observe changes to the dynamic content of a Live Activity.

## Declaration

```swift
struct ContentUpdates
```

## Topics

### Structures

- [Activity.ContentUpdates.Iterator](contentupdates-swift.struct/iterator.md): An iterator for accessing individual data entries from the series.

### Instance Methods

- [makeAsyncIterator()](contentupdates-swift.struct/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces results from this asynchronous sequence.

### Type Aliases

- [Activity.ContentUpdates.Element](contentupdates-swift.struct/element.md): The type of element this asynchronous sequence produces.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Observing Live Activity content changes

- [contentUpdates](contentupdates-swift.property.md): An asynchronous sequence you use to observe changes to the dynamic content of a Live Activity.
