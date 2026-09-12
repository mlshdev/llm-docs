> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibilitydroppoint(_:description:isenabled:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilitydroppoint(_:description:isenabled:))

# accessibilityDropPoint(\_:description:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The point an assistive technology should use to end a drag interaction.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityDropPoint(_ point: UnitPoint, description: LocalizedStringResource, isEnabled: Bool) -> ModifiedContent<Content, Modifier>
```

## Parameters

- `point`: The point the assistive technology will perform a drop interaction.
- `description`: The description of the drop interaction.
- `isEnabled`: If true the accessibility drop point is applied; otherwise the accessibility drop point is unchanged.

<a id="discussion"></a>

## Discussion

Use this modifier when you need to provide a description to users when prompted end a drag interaction.

```swift
struct FolderView: View {
    var folderName: String

    var body: some View {
        FolderIcon(folderName: folderName)
            .accessibilityDropPoint(
                .center, description: Text("Move to \(folderName)"))
    }
}
```

By default, if an accessible view or its subtree has drag and/or drop interactions, they will be automatically exposed by assistive technologies. However, if there is more than one such interaction, each drag or drop should have a description to disambiguate it and give a good user experience.

> **Note**

> An accessibility element can have multiple points for a drop, provided they have different descriptions.
