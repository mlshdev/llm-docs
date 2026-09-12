> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/fetchedresults/nspredicate](https://developer.apple.com/documentation/swiftui/fetchedresults/nspredicate)

# nsPredicate

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The request’s predicate.

## Declaration

```swift
@MainActor @preconcurrency var nsPredicate: NSPredicate? { get nonmutating set }
```

<a id="discussion"></a>

## Discussion

Set this value to cause the associated [FetchRequest](../fetchrequest.md) to execute a fetch with a new predicate, producing an updated collection of results.

## See Also

### Configuring the associated fetch request

- [sortDescriptors](sortdescriptors.md): Conforms when `Result` inherits `NSManagedObject`. The request’s sort descriptors, accessed as value types.
- [nsSortDescriptors](nssortdescriptors.md): The request’s sort descriptors, accessed as reference types.
