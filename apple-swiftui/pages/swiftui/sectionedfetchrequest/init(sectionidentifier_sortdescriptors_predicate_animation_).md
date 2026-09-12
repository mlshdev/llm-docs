> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sectionedfetchrequest/init(sectionidentifier:sortdescriptors:predicate:animation:)](https://developer.apple.com/documentation/swiftui/sectionedfetchrequest/init(sectionidentifier:sortdescriptors:predicate:animation:))

# init(sectionIdentifier:sortDescriptors:predicate:animation:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a sectioned fetch request based on a section identifier, a predicate, and reference type sort parameters.

## Declaration

```swift
@MainActor @preconcurrency init(sectionIdentifier: KeyPath<Result, SectionIdentifier>, sortDescriptors: [NSSortDescriptor], predicate: NSPredicate? = nil, animation: Animation? = nil)
```

## Parameters

- `sectionIdentifier`: A key path that SwiftUI applies to the `Result` type to get an object’s section identifier.
- `sortDescriptors`: An array of sort descriptors that define the sort order of the fetched results.
- `predicate`: An [NSPredicate](https://developer.apple.com/documentation/foundation/nspredicate) instance that defines logical conditions used to filter the fetched results.
- `animation`: The animation to use for user interface changes that result from changes to the fetched results.

<a id="discussion"></a>

## Discussion

The request gets the entity type from the `Result` instance by calling that managed object’s [entity()](https://developer.apple.com/documentation/coredata/nsmanagedobject/entity%28%29) type method. If you need to specify the entity type explicitly, use the [init(entity:sectionIdentifier:sortDescriptors:predicate:animation:)](init%28entity_sectionidentifier_sortdescriptors_predicate_animation_%29.md) initializer instead. If you need more control over the fetch request configuration, use [init(fetchRequest:sectionIdentifier:animation:)](init%28fetchrequest_sectionidentifier_animation_%29.md). For value type sort descriptors, use [init(sectionIdentifier:sortDescriptors:predicate:animation:)](init%28sectionidentifier_sortdescriptors_predicate_animation_%29.md).

## See Also

### Creating a fetch request

- [init(entity:sectionIdentifier:sortDescriptors:predicate:animation:)](init%28entity_sectionidentifier_sortdescriptors_predicate_animation_%29.md): Conforms when `SectionIdentifier` conforms to `Hashable` and `Result` conforms to `NSFetchRequestResult`. Creates a sectioned fetch request for a specified entity description, based on a section identifier, a predicate, and sort parameters.
