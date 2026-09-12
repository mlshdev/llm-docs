> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historyobserver/authors](https://developer.apple.com/documentation/swiftdata/historyobserver/authors)

# authors

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The transaction authors that the observer filters for when evaluating history transactions.

## Declaration

```swift
final let authors: Set<String>
```

<a id="discussion"></a>

## Discussion

When non-empty, the observer only reports changes whose transactions were written by one of the specified authors. When empty, the observer treats transactions from any author as relevant.

## See Also

### Accessing observer properties

- [eventCounter](eventcounter.md): A counter that increments each time the observer detects relevant changes.
- [modelContainer](modelcontainer.md): The model container whose data stores this observer monitors for changes.
- [observedModels](observedmodels.md): The model types that the observer filters for when evaluating history transactions.
