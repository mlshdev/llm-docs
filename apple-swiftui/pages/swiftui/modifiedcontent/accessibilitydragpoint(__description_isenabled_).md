> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibilitydragpoint(_:description:isenabled:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilitydragpoint(_:description:isenabled:))

# accessibilityDragPoint(\_:description:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The point an assistive technology should use to begin a drag interaction.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityDragPoint(_ point: UnitPoint, description: LocalizedStringResource, isEnabled: Bool) -> ModifiedContent<Content, Modifier>
```

## Parameters

- `point`: The point the assistive technology will begin a drag interaction.
- `description`: The description of the drag interaction.
- `isEnabled`: If true the accessibility drag point is applied; otherwise the accessibility drag point is unchanged.

<a id="discussion"></a>

## Discussion

Use this modifier when you need to provide a description to users when prompted begin a drag interaction.

```swift
struct FileView: View {
    var filename: String

    var body: some View {
        FileIcon(filename: filename)
            .accessibilityDragPoint(
                .center, description: Text("Move \(filename)"))
    }
}
```

By default, if an accessible view or its subtree has drag and/or drop interactions, they will be automatically exposed by assistive technologies. However, if there is more than one such interaction, each drag or drop should have a description to disambiguate it and give a good user experience.

> **Note**

> An accessibility element can have multiple points for a drag, provided they have different descriptions.
