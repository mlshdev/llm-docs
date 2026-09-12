> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/resultsobserver/init(fetchdescriptor:sectionby:modelcontext:isolation:)-9kg1q](https://developer.apple.com/documentation/swiftdata/resultsobserver/init(fetchdescriptor:sectionby:modelcontext:isolation:)-9kg1q)

# init(fetchDescriptor:sectionBy:modelContext:isolation:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a new observer with the given fetch descriptor, an optional String section key path, and a model context.

## Declaration

```swift
convenience init(fetchDescriptor: FetchDescriptor<Element> = FetchDescriptor<Element>(), sectionBy: KeyPath<Element, String?>, modelContext: ModelContext, isolation: isolated (any Actor)? = #isolation) throws
```

## Parameters

- `fetchDescriptor`: The descriptor defining the fetch criteria.
- `sectionBy`: A key path on the element type that returns an optional section name.
- `modelContext`: The model context to fetch from and observe for changes.

<a id="discussion"></a>

## Discussion

Use this initializer when the section key path points to an optional `String` property. Elements whose section value is `nil` are grouped into a section with an empty name.

> **Throws**

> An error if the initial fetch fails.

## See Also

### Creating a results observer with a fetch descriptor

- [init(fetchDescriptor:modelContext:isolation:)](init%28fetchdescriptor_modelcontext_isolation_%29.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `Never`. Creates a new unsectioned observer with the given fetch descriptor and model context.
- [init(fetchDescriptor:sectionBy:modelContext:isolation:)](init%28fetchdescriptor_sectionby_modelcontext_isolation_%29-7ms14.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with the given fetch descriptor, a String section key path, and a model context.
- [init(fetchDescriptor:modelContainer:isolation:)](init%28fetchdescriptor_modelcontainer_isolation_%29.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `Never`. Creates a new unsectioned observer with the given fetch descriptor and model container.
- [init(fetchDescriptor:sectionBy:modelContainer:isolation:)](init%28fetchdescriptor_sectionby_modelcontainer_isolation_%29-4tuzk.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with the given fetch descriptor, an optional String section key path, and a model container.
- [init(fetchDescriptor:sectionBy:modelContainer:isolation:)](init%28fetchdescriptor_sectionby_modelcontainer_isolation_%29-7wa5c.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with the given fetch descriptor, a String section key path, and a model container.
