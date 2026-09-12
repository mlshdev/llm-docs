> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/badgeprominence(_:)](https://developer.apple.com/documentation/swiftui/view/badgeprominence(_:))

# badgeProminence(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Specifies the prominence of badges created by this view.

## Declaration

```swift
nonisolated func badgeProminence(_ prominence: BadgeProminence) -> some View

```

## Parameters

- `prominence`: The prominence to apply to badges.

<a id="discussion"></a>

## Discussion

Badges can be used for different kinds of information, from the passive number of items in a container to the number of required actions. The prominence of badges in Lists can be adjusted to reflect this and be made to draw more or less attention to themselves.

Badges will default to `standard` prominence unless specified.

The following example shows a [List](../list.md) displaying a list of folders with an informational badge with lower prominence, showing the number of items in the folder.

```swift
List(folders) { folder in
    Text(folder.name)
        .badge(folder.numberOfItems)
}
.badgeProminence(.decreased)
```

## See Also

### Displaying a badge on a list item

- [badge(\_:)](badge%28__%29.md): Generates a badge for the view from a localized string resource.
- [badgeProminence](../environmentvalues/badgeprominence.md): The prominence to apply to badges associated with this environment.
- [BadgeProminence](../badgeprominence.md): The visual prominence of a badge.
