> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historyobserver/eventcounter](https://developer.apple.com/documentation/swiftdata/historyobserver/eventcounter)

# eventCounter

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A counter that increments each time the observer detects relevant changes.

## Declaration

```swift
final var eventCounter: Int { get }
```

<a id="discussion"></a>

## Discussion

The observer increments this value when it processes a remote change notification that contains transactions matching its criteria. You can observe this property from a SwiftUI view to trigger a UI update.

## See Also

### Accessing observer properties

- [modelContainer](modelcontainer.md): The model container whose data stores this observer monitors for changes.
- [observedModels](observedmodels.md): The model types that the observer filters for when evaluating history transactions.
- [authors](authors.md): The transaction authors that the observer filters for when evaluating history transactions.
