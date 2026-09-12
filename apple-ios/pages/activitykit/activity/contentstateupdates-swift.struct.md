> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/contentstateupdates-swift.struct](https://developer.apple.com/documentation/activitykit/activity/contentstateupdates-swift.struct)

# Activity.ContentStateUpdates

**Framework:** ActivityKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ (deprecated in 16.2) · iPadOS 16.1+ (deprecated in 16.2)

A structure that offers functionality to observe changes to the dynamic content of a Live Activity.

> Use \`ContentUpdates\` instead

## Declaration

```swift
struct ContentStateUpdates
```

## Topics

### Creating an iterator

- [makeAsyncIterator()](contentstateupdates-swift.struct/makeasynciterator%28%29.md): Deprecated. Creates the asynchronous iterator that produces results from this asynchronous sequence.
- [Activity.ContentStateUpdates.Iterator](contentstateupdates-swift.struct/iterator.md): Deprecated. An iterator for accessing individual data entries from the series.
- [Activity.ContentStateUpdates.Element](contentstateupdates-swift.struct/element.md): Deprecated. The type of element this asynchronous sequence produces.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Deprecated

- [request(attributes:contentState:pushType:)](request%28attributes_contentstate_pushtype_%29.md): Deprecated. Requests and starts a Live Activity.
- [update(using:)](update%28using_%29.md): Deprecated. Updates the dynamic content of the Live Activity.
- [update(using:alertConfiguration:)](update%28using_alertconfiguration_%29.md): Deprecated. Updates the dynamic content of a Live Activity and alerts a person about the Live Activity update.
- [end(using:dismissalPolicy:)](end%28using_dismissalpolicy_%29.md): Deprecated. Ends an active Live Activity.
- [contentState](contentstate-swift.property.md): Deprecated. The dynamic content of a Live Activity.
- [contentStateUpdates](contentstateupdates-swift.property.md): Deprecated. An asynchronous sequence you use to observe changes to the dynamic content of a Live Activity.
