> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/resultsobserver/init(fetchdescriptor:sectionby:modelcontainer:isolation:)-7wa5c](https://developer.apple.com/documentation/swiftdata/resultsobserver/init(fetchdescriptor:sectionby:modelcontainer:isolation:)-7wa5c)

# init(fetchDescriptor:sectionBy:modelContainer:isolation:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a new observer with the given fetch descriptor, a String section key path, and a model container.

## Declaration

```swift
convenience init(fetchDescriptor: FetchDescriptor<Element> = FetchDescriptor<Element>(), sectionBy: KeyPath<Element, String>, modelContainer: ModelContainer, isolation: isolated (any Actor)? = #isolation) throws
```

## Parameters

- `fetchDescriptor`: The descriptor defining the fetch criteria.
- `sectionBy`: A key path on the element type that returns the section name.
- `modelContainer`: The model container from which a new context will be created.

<a id="discussion"></a>

## Discussion

A new `ModelContext` is created from the provided container.

> **Throws**

> An error if the initial fetch fails.

## See Also

### Creating a results observer with a fetch descriptor

- [init(fetchDescriptor:modelContext:isolation:)](init%28fetchdescriptor_modelcontext_isolation_%29.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `Never`. Creates a new unsectioned observer with the given fetch descriptor and model context.
- [init(fetchDescriptor:sectionBy:modelContext:isolation:)](init%28fetchdescriptor_sectionby_modelcontext_isolation_%29-7ms14.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with the given fetch descriptor, a String section key path, and a model context.
- [init(fetchDescriptor:sectionBy:modelContext:isolation:)](init%28fetchdescriptor_sectionby_modelcontext_isolation_%29-9kg1q.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with the given fetch descriptor, an optional String section key path, and a model context.
- [init(fetchDescriptor:modelContainer:isolation:)](init%28fetchdescriptor_modelcontainer_isolation_%29.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `Never`. Creates a new unsectioned observer with the given fetch descriptor and model container.
- [init(fetchDescriptor:sectionBy:modelContainer:isolation:)](init%28fetchdescriptor_sectionby_modelcontainer_isolation_%29-4tuzk.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with the given fetch descriptor, an optional String section key path, and a model container.
