> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sectionedfetchrequest/configuration/sectionidentifier](https://developer.apple.com/documentation/swiftui/sectionedfetchrequest/configuration/sectionidentifier)

# sectionIdentifier

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The request’s section identifier key path.

## Declaration

```swift
var sectionIdentifier: KeyPath<Result, SectionIdentifier>
```

<a id="discussion"></a>

## Discussion

Set this configuration value to cause a [SectionedFetchRequest](../../sectionedfetchrequest.md) to execute a fetch with a new section identifier. You can’t change the section identifier type without creating a new fetch request. Use care to coordinate section and sort updates, as described in [SectionedFetchRequest.Configuration](../configuration.md).

Access this value for a given request by using the [sectionIdentifier](../../sectionedfetchresults/sectionidentifier.md) property on the associated [SectionedFetchResults](../../sectionedfetchresults.md) instance, either directly or with a [Binding](../../binding.md).
