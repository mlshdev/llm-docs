> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sectionedfetchrequest/init(entity:sectionidentifier:sortdescriptors:predicate:animation:)](https://developer.apple.com/documentation/swiftui/sectionedfetchrequest/init(entity:sectionidentifier:sortdescriptors:predicate:animation:))

# init(entity:sectionIdentifier:sortDescriptors:predicate:animation:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a sectioned fetch request for a specified entity description, based on a section identifier, a predicate, and sort parameters.

## Declaration

```swift
@MainActor @preconcurrency init(entity: NSEntityDescription, sectionIdentifier: KeyPath<Result, SectionIdentifier>, sortDescriptors: [NSSortDescriptor], predicate: NSPredicate? = nil, animation: Animation? = nil)
```

## Parameters

- `entity`: The description of the Core Data entity to fetch.
- `sectionIdentifier`: A key path that SwiftUI applies to the `Result` type to get an object’s section identifier.
- `sortDescriptors`: An array of sort descriptors that define the sort order of the fetched results.
- `predicate`: An [NSPredicate](https://developer.apple.com/documentation/foundation/nspredicate) instance that defines logical conditions used to filter the fetched results.
- `animation`: The animation to use for user interface changes that result from changes to the fetched results.

<a id="discussion"></a>

## Discussion

Use this initializer if you need to explicitly specify the entity type for the request. If you specify a placeholder `Result` type in the request declaration, use the [init(sectionIdentifier:sortDescriptors:predicate:animation:)](init%28sectionidentifier_sortdescriptors_predicate_animation_%29.md) initializer to let the request infer the entity type. If you need more control over the fetch request configuration, use [init(fetchRequest:sectionIdentifier:animation:)](init%28fetchrequest_sectionidentifier_animation_%29.md).

## See Also

### Creating a fetch request

- [init(sectionIdentifier:sortDescriptors:predicate:animation:)](init%28sectionidentifier_sortdescriptors_predicate_animation_%29.md): Conforms when `SectionIdentifier` conforms to `Hashable` and `Result` inherits `NSManagedObject`. Creates a sectioned fetch request based on a section identifier, a predicate, and reference type sort parameters.
