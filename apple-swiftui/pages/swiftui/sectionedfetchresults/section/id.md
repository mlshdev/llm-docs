> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sectionedfetchresults/section/id](https://developer.apple.com/documentation/swiftui/sectionedfetchresults/section/id)

# id

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The value that all entities in the section share for a specified key path.

## Declaration

```swift
@MainActor @preconcurrency let id: SectionIdentifier
```

<a id="discussion"></a>

## Discussion

Specify the key path that the entities share this value with by setting the [SectionedFetchRequest](../../sectionedfetchrequest.md) instance’s `sectionIdentifier` parameter during initialization, or by modifying the corresponding [SectionedFetchResults](../../sectionedfetchresults.md) instance’s [sectionIdentifier](../sectionidentifier.md) property.
