> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/fetchrequest/init(sortdescriptors:predicate:animation:)](https://developer.apple.com/documentation/swiftui/fetchrequest/init(sortdescriptors:predicate:animation:))

# init(sortDescriptors:predicate:animation:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a fetch request based on a predicate and reference type sort parameters.

## Declaration

```swift
@MainActor @preconcurrency init(sortDescriptors: [NSSortDescriptor], predicate: NSPredicate? = nil, animation: Animation? = nil)
```

## Parameters

- `sortDescriptors`: An array of sort descriptors that define the sort order of the fetched results.
- `predicate`: An [NSPredicate](https://developer.apple.com/documentation/foundation/nspredicate) instance that defines logical conditions used to filter the fetched results.
- `animation`: The animation to use for user interface changes that result from changes to the fetched results.

<a id="discussion"></a>

## Discussion

The request gets the entity type from the `Result` instance by calling that managed object’s [entity()](https://developer.apple.com/documentation/coredata/nsmanagedobject/entity%28%29) type method. If you need to specify the entity type explicitly, use the [init(entity:sortDescriptors:predicate:animation:)](init%28entity_sortdescriptors_predicate_animation_%29.md) initializer instead. If you need more control over the fetch request configuration, use [init(fetchRequest:animation:)](init%28fetchrequest_animation_%29.md).

## See Also

### Creating a fetch request

- [init(entity:sortDescriptors:predicate:animation:)](init%28entity_sortdescriptors_predicate_animation_%29.md): Conforms when `Result` conforms to `NSFetchRequestResult`. Creates a fetch request for a specified entity description, based on a predicate and sort parameters.
