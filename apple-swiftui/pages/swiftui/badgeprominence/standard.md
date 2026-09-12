> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/badgeprominence/standard](https://developer.apple.com/documentation/swiftui/badgeprominence/standard)

# standard

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The standard level of prominence for a badge.

## Declaration

```swift
static let standard: BadgeProminence
```

<a id="discussion"></a>

## Discussion

This level of prominence should be used for badges that display a value that suggests user action, such as a count of unread messages or new invitations.

In lists on macOS, this results in a badge label on a grayscale platter; and in lists on iOS, this prominence of badge has no platter.

```swift
List(mailboxes) { mailbox in
    Text(mailbox.name)
        .badge(mailbox.numberOfUnreadMessages)
}
.badgeProminence(.standard)
```

## See Also

### Getting background prominence

- [increased](increased.md): The highest level of prominence for a badge.
- [decreased](decreased.md): The lowest level of prominence for a badge.
