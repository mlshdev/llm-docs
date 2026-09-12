> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/resultsobserver](https://developer.apple.com/documentation/swiftdata/resultsobserver)

# ResultsObserver

**Framework:** SwiftData  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Observes and tracks changes to a collection of persistent models in a model context.

## Declaration

```swift
final class ResultsObserver<Element, SectionTitle> where Element : PersistentModel, SectionTitle : Hashable
```

<a id="overview"></a>

## Overview

`ResultsObserver` automatically monitors changes to models that match specified fetch criteria, providing real-time updates when the underlying data changes. The observer maintains a collection of fetched results, making it ideal for keeping user interfaces synchronized with persistent data.

The observer responds to changes from multiple sources:

- Local changes made within the same model context
- Remote changes from other contexts within the same container
- External changes from other processes or CloudKit sync

You can configure the observer using either a complete `FetchDescriptor` or individual filter predicates and sort descriptors. The observer is `Observable`, allowing SwiftUI views to automatically update when results change.

Use `Never` as the `SectionTitle` type parameter when no sectioning is needed:

```swift
let observer = try ResultsObserver<Book, Never>(
    filterBy: #Predicate { $0.isPublished },
    sortBy: [SortDescriptor(\.title)],
    modelContext: context
)
```

Use a concrete type (e.g. `String`) when sectioning by a key path of that type:

```swift
let observer = try ResultsObserver<Book, String>(
    sectionBy: \.genre,
    modelContext: context
)
```

## Topics

### Creating a results observer with a fetch descriptor

- [init(fetchDescriptor:modelContext:isolation:)](resultsobserver/init%28fetchdescriptor_modelcontext_isolation_%29.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `Never`. Creates a new unsectioned observer with the given fetch descriptor and model context.
- [init(fetchDescriptor:sectionBy:modelContext:isolation:)](resultsobserver/init%28fetchdescriptor_sectionby_modelcontext_isolation_%29-7ms14.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with the given fetch descriptor, a String section key path, and a model context.
- [init(fetchDescriptor:sectionBy:modelContext:isolation:)](resultsobserver/init%28fetchdescriptor_sectionby_modelcontext_isolation_%29-9kg1q.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with the given fetch descriptor, an optional String section key path, and a model context.
- [init(fetchDescriptor:modelContainer:isolation:)](resultsobserver/init%28fetchdescriptor_modelcontainer_isolation_%29.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `Never`. Creates a new unsectioned observer with the given fetch descriptor and model container.
- [init(fetchDescriptor:sectionBy:modelContainer:isolation:)](resultsobserver/init%28fetchdescriptor_sectionby_modelcontainer_isolation_%29-4tuzk.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with the given fetch descriptor, an optional String section key path, and a model container.
- [init(fetchDescriptor:sectionBy:modelContainer:isolation:)](resultsobserver/init%28fetchdescriptor_sectionby_modelcontainer_isolation_%29-7wa5c.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with the given fetch descriptor, a String section key path, and a model container.

### Creating a results observer with a predicate

- [init(filterBy:sortBy:modelContext:isolation:)](resultsobserver/init%28filterby_sortby_modelcontext_isolation_%29.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `Never`. Creates a new unsectioned observer with individual filter and sort criteria and a model context.
- [init(filterBy:sortBy:sectionBy:modelContext:isolation:)](resultsobserver/init%28filterby_sortby_sectionby_modelcontext_isolation_%29-4ainb.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with individual filter and sort criteria, an optional String section key path, and a model context.
- [init(filterBy:sortBy:sectionBy:modelContext:isolation:)](resultsobserver/init%28filterby_sortby_sectionby_modelcontext_isolation_%29-gsuz.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with individual filter and sort criteria, a String section key path, and a model context.
- [init(filterBy:sortBy:modelContainer:isolation:)](resultsobserver/init%28filterby_sortby_modelcontainer_isolation_%29.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `Never`. Creates a new unsectioned observer with individual filter and sort criteria and a model container.
- [init(filterBy:sortBy:sectionBy:modelContainer:isolation:)](resultsobserver/init%28filterby_sortby_sectionby_modelcontainer_isolation_%29-5ufvn.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with individual filter and sort criteria, a String section key path, and a model container.
- [init(filterBy:sortBy:sectionBy:modelContainer:isolation:)](resultsobserver/init%28filterby_sortby_sectionby_modelcontainer_isolation_%29-9lfy0.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with individual filter and sort criteria, an optional String section key path, and a model container.

### Accessing observer properties

- [fetchDescriptor](resultsobserver/fetchdescriptor.md): The fetch descriptor used to query the model context.
- [filterBy](resultsobserver/filterby.md): The predicate used to filter which models are included in the results.
- [modelContext](resultsobserver/modelcontext.md): The model context from which models are fetched.
- [sortBy](resultsobserver/sortby.md): The sort descriptors used to order the results.
- [sectionBy](resultsobserver/sectionby.md): The key path on the element used to determine section grouping.
- [sections](resultsobserver/sections.md): The sections computed from the current results, grouped by [sectionBy](resultsobserver/sectionby.md).

### Accessing observer results

- [results](resultsobserver/results.md): The current collection of fetched models matching the fetch criteria.
- [element(at:)](resultsobserver/element%28at_%29.md): Returns the element at the given index path in the sectioned results.
- [indexPath(for:)](resultsobserver/indexpath%28for_%29.md): Returns the index path of the given element within the sectioned results.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)

## See Also

### Data store observation

- [HistoryObserver](historyobserver.md): Monitors a model container’s data stores for remote changes and notifies when new history transactions are available.
