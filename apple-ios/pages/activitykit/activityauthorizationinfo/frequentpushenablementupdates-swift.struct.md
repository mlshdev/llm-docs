> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activityauthorizationinfo/frequentpushenablementupdates-swift.struct](https://developer.apple.com/documentation/activitykit/activityauthorizationinfo/frequentpushenablementupdates-swift.struct)

# ActivityAuthorizationInfo.FrequentPushEnablementUpdates

**Framework:** ActivityKit  
**Kind:** Structure  
**Availability:** iOS 16.2+ · iPadOS 16.2+

A structure that can observe whether you can update Live Activities with frequent ActivityKit push notifications.

## Declaration

```swift
struct FrequentPushEnablementUpdates
```

## Topics

### Creating an iterator

- [makeAsyncIterator()](frequentpushenablementupdates-swift.struct/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces results from this asynchronous sequence.
- [ActivityAuthorizationInfo.FrequentPushEnablementUpdates.Iterator](frequentpushenablementupdates-swift.struct/iterator.md): An iterator for accessing individual data entries from the series.
- [ActivityAuthorizationInfo.FrequentPushEnablementUpdates.Element](frequentpushenablementupdates-swift.struct/element.md): The type of element this asynchronous sequence produces.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Observing availability of frequent ActivityKit push notifications

- [frequentPushesEnabled](frequentpushesenabled.md): A Boolean value that indicates whether a person permitted you to update Live Activities with frequent ActivityKit push notifications.
- [frequentPushEnablementUpdates](frequentpushenablementupdates-swift.property.md): An asynchronous sequence you use to observe whether a person permitted you to update Live Activities with frequent ActivityKit push notifications.
