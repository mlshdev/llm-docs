> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/fetchedresults/nssortdescriptors](https://developer.apple.com/documentation/swiftui/fetchedresults/nssortdescriptors)

# nsSortDescriptors

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The request’s sort descriptors, accessed as reference types.

## Declaration

```swift
@MainActor @preconcurrency var nsSortDescriptors: [NSSortDescriptor] { get nonmutating set }
```

<a id="discussion"></a>

## Discussion

Set this value to cause the associated [FetchRequest](../fetchrequest.md) to execute a fetch with a new collection of [NSSortDescriptor](https://developer.apple.com/documentation/foundation/nssortdescriptor) instances. The order of managed objects stored in the results collection may change as a result.

If you want to use [SortDescriptor](https://developer.apple.com/documentation/foundation/sortdescriptor) instances, set [sortDescriptors](sortdescriptors.md) instead.

## See Also

### Configuring the associated fetch request

- [nsPredicate](nspredicate.md): The request’s predicate.
- [sortDescriptors](sortdescriptors.md): Conforms when `Result` inherits `NSManagedObject`. The request’s sort descriptors, accessed as value types.
