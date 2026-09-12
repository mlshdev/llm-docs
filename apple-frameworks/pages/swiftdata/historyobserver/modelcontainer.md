> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historyobserver/modelcontainer](https://developer.apple.com/documentation/swiftdata/historyobserver/modelcontainer)

# modelContainer

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The model container whose data stores this observer monitors for changes.

## Declaration

```swift
final let modelContainer: ModelContainer
```

## See Also

### Accessing observer properties

- [eventCounter](eventcounter.md): A counter that increments each time the observer detects relevant changes.
- [observedModels](observedmodels.md): The model types that the observer filters for when evaluating history transactions.
- [authors](authors.md): The transaction authors that the observer filters for when evaluating history transactions.
