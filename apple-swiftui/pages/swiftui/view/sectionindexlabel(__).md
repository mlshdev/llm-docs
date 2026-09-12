> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/sectionindexlabel(_:)](https://developer.apple.com/documentation/swiftui/view/sectionindexlabel(_:))

# sectionIndexLabel(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Sets the label that is used in a section index to point to this section, typically only a single character long.

## Declaration

```swift
@export(implementation) nonisolated func sectionIndexLabel(_ label: Text?) -> some View

```

## Parameters

- `label`: The label to display in the section index, or `nil` to display no label for this section.

<a id="discussion"></a>

## Discussion

- See also `listSectionIndexVisibility(_:)`

## See Also

### Configuring a section index

- [listSectionIndexVisibility(\_:)](listsectionindexvisibility%28__%29.md): Changes the visibility of the list section index.
