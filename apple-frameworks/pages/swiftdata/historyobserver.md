> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historyobserver](https://developer.apple.com/documentation/swiftdata/historyobserver)

# HistoryObserver

**Framework:** SwiftData  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Monitors a model container’s data stores for remote changes and notifies when new history transactions are available.

## Declaration

```swift
final class HistoryObserver
```

<a id="overview"></a>

## Overview

`HistoryObserver` automatically listens for `ModelContainer/remoteChange` notifications and determines whether the incoming changes are relevant based on the models you specify at initialization. When relevant changes are detected, the observer updates its [eventCounter](historyobserver/eventcounter.md) property.

Use `HistoryObserver` as an `@Observable` object and react to changes in [eventCounter](historyobserver/eventcounter.md) from a SwiftUI view or other observer.

The observer tracks its position in each data store’s transaction history using `historyTokens`, enabling incremental processing of only new transactions since the last check.

You can scope the observer to specific model types using the `observedModels` parameter. When provided with a non-empty array, the observer filters incoming transactions to only those containing changes for the specified types (and optionally their related models). When the array is empty (the default), the observer responds to any history change in the container.

Example usage:

```swift
let observer = try HistoryObserver(
    observedModels: [Trip.self],
    modelContainer: container
)
```

## Topics

### Creating a history observer

- [init(historyTokens:observedModels:authors:modelContainer:isolation:)](historyobserver/init%28historytokens_observedmodels_authors_modelcontainer_isolation_%29.md): Creates a history observer that reports changes through its observable [eventCounter](historyobserver/eventcounter.md) property.

### Accessing observer properties

- [eventCounter](historyobserver/eventcounter.md): A counter that increments each time the observer detects relevant changes.
- [modelContainer](historyobserver/modelcontainer.md): The model container whose data stores this observer monitors for changes.
- [observedModels](historyobserver/observedmodels.md): The model types that the observer filters for when evaluating history transactions.
- [authors](historyobserver/authors.md): The transaction authors that the observer filters for when evaluating history transactions.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data store observation

- [ResultsObserver](resultsobserver.md): Observes and tracks changes to a collection of persistent models in a model context.
