> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/resultsobserver/init(filterby:sortby:sectionby:modelcontext:isolation:)-gsuz](https://developer.apple.com/documentation/swiftdata/resultsobserver/init(filterby:sortby:sectionby:modelcontext:isolation:)-gsuz)

# init(filterBy:sortBy:sectionBy:modelContext:isolation:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a new observer with individual filter and sort criteria, a String section key path, and a model context.

## Declaration

```swift
convenience init(filterBy: Predicate<Element>? = nil, sortBy: [SortDescriptor<Element>]? = nil, sectionBy: KeyPath<Element, String>, modelContext: ModelContext, isolation: isolated (any Actor)? = #isolation) throws
```

## Parameters

- `filterBy`: An optional predicate to filter the results.
- `sortBy`: An optional array of sort descriptors to order the results.
- `sectionBy`: A key path on the element type that returns the section name.
- `modelContext`: The model context to fetch from and observe for changes.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the initial fetch fails.

## See Also

### Creating a results observer with a predicate

- [init(filterBy:sortBy:modelContext:isolation:)](init%28filterby_sortby_modelcontext_isolation_%29.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `Never`. Creates a new unsectioned observer with individual filter and sort criteria and a model context.
- [init(filterBy:sortBy:sectionBy:modelContext:isolation:)](init%28filterby_sortby_sectionby_modelcontext_isolation_%29-4ainb.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with individual filter and sort criteria, an optional String section key path, and a model context.
- [init(filterBy:sortBy:modelContainer:isolation:)](init%28filterby_sortby_modelcontainer_isolation_%29.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `Never`. Creates a new unsectioned observer with individual filter and sort criteria and a model container.
- [init(filterBy:sortBy:sectionBy:modelContainer:isolation:)](init%28filterby_sortby_sectionby_modelcontainer_isolation_%29-5ufvn.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with individual filter and sort criteria, a String section key path, and a model container.
- [init(filterBy:sortBy:sectionBy:modelContainer:isolation:)](init%28filterby_sortby_sectionby_modelcontainer_isolation_%29-9lfy0.md): Conforms when `Element` conforms to `PersistentModel` and `SectionTitle` is `String`. Creates a new observer with individual filter and sort criteria, an optional String section key path, and a model container.
