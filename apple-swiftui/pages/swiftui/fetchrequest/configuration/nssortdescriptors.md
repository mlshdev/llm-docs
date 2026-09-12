> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/fetchrequest/configuration/nssortdescriptors](https://developer.apple.com/documentation/swiftui/fetchrequest/configuration/nssortdescriptors)

# nsSortDescriptors

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The request’s sort descriptors, accessed as reference types.

## Declaration

```swift
@MainActor @preconcurrency var nsSortDescriptors: [NSSortDescriptor]
```

<a id="discussion"></a>

## Discussion

Set this configuration value to cause a [FetchRequest](../../fetchrequest.md) to execute a fetch with a new collection of [NSSortDescriptor](https://developer.apple.com/documentation/foundation/nssortdescriptor) instances. If you want to use [SortDescriptor](https://developer.apple.com/documentation/foundation/sortdescriptor) instances, set [sortDescriptors](sortdescriptors.md) instead.

Access this value of a [FetchRequest.Configuration](../configuration.md) structure for a given request by using the [nsSortDescriptors](../../fetchedresults/nssortdescriptors.md) property on the associated [FetchedResults](../../fetchedresults.md) instance, either directly or through a [Binding](../../binding.md).

## See Also

### Setting sort descriptors

- [sortDescriptors](sortdescriptors.md): Conforms when `Result` inherits `NSManagedObject`. The request’s sort descriptors, accessed as value types.
