> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sectionedfetchrequest/configuration/sortdescriptors](https://developer.apple.com/documentation/swiftui/sectionedfetchrequest/configuration/sortdescriptors)

# sortDescriptors

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The request’s sort descriptors, accessed as value types.

## Declaration

```swift
var sortDescriptors: [SortDescriptor<Result>] { get set }
```

<a id="discussion"></a>

## Discussion

Set this configuration value to cause a [SectionedFetchRequest](../../sectionedfetchrequest.md) to execute a fetch with a new collection of [SortDescriptor](https://developer.apple.com/documentation/foundation/sortdescriptor) instances. If you want to use [NSSortDescriptor](https://developer.apple.com/documentation/foundation/nssortdescriptor) instances, set [nsSortDescriptors](nssortdescriptors.md) instead. Use care to coordinate section and sort updates, as described in [SectionedFetchRequest.Configuration](../configuration.md).

Access this value for a given request by using the [sortDescriptors](../../sectionedfetchresults/sortdescriptors.md) property on the associated [SectionedFetchResults](../../sectionedfetchresults.md) instance, either directly or with a [Binding](../../binding.md).

## See Also

### Setting sort descriptors

- [nsSortDescriptors](nssortdescriptors.md): The request’s sort descriptors, accessed as reference types.
