> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/badgeprominence](https://developer.apple.com/documentation/swiftui/badgeprominence)

# BadgeProminence

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The visual prominence of a badge.

## Declaration

```swift
struct BadgeProminence
```

<a id="overview"></a>

## Overview

Badges can be used for different kinds of information, from the passive number of items in a container to the number of required actions. The prominence of badges in Lists can be adjusted to reflect this and be made to draw more or less attention to themselves.

Badges will default to `standard` prominence unless specified.

The following example shows a [List](list.md) displaying a list of folders with an informational badge with lower prominence, showing the number of items in the folder.

```swift
List(folders) { folder in
    Text(folder.name)
        .badge(folder.numberOfItems)
}
.badgeProminence(.decreased)
```

## Topics

### Getting background prominence

- [standard](badgeprominence/standard.md): The standard level of prominence for a badge.
- [increased](badgeprominence/increased.md): The highest level of prominence for a badge.
- [decreased](badgeprominence/decreased.md): The lowest level of prominence for a badge.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying a badge on a list item

- [badge(\_:)](view/badge%28__%29.md): Generates a badge for the view from a localized string resource.
- [badgeProminence(\_:)](view/badgeprominence%28__%29.md): Specifies the prominence of badges created by this view.
- [badgeProminence](environmentvalues/badgeprominence.md): The prominence to apply to badges associated with this environment.
