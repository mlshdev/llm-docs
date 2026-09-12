> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/activityupdates-swift.struct](https://developer.apple.com/documentation/activitykit/activity/activityupdates-swift.struct)

# Activity.ActivityUpdates

**Framework:** ActivityKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+

A structure that offers functionality to observe changes to a Live Activity.

## Declaration

```swift
struct ActivityUpdates
```

## Topics

### Creating an iterator

- [makeAsyncIterator()](activityupdates-swift.struct/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces results from this asynchronous sequence.
- [Activity.ActivityUpdates.Iterator](activityupdates-swift.struct/iterator.md): An iterator for accessing individual data entries from the series.
- [Activity.ActivityUpdates.Element](activityupdates-swift.struct/element.md): The type of element this asynchronous sequence produces.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Accessing Live Activities

- [activities](activities.md): An array of your app’s current Live Activities.
- [activityUpdates](activityupdates-swift.type.property.md): An asynchronous sequence you use to observe changes to ongoing Live Activities and to asynchronously access a Live Activity when you start it.
