> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/badgeprominence/increased](https://developer.apple.com/documentation/swiftui/badgeprominence/increased)

# increased

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The highest level of prominence for a badge.

## Declaration

```swift
static let increased: BadgeProminence
```

<a id="discussion"></a>

## Discussion

This level of prominence should be used for badges that display a value that requires user action, such as number of updates or account errors.

In lists on iOS and macOS, this results in badge labels being displayed on a red platter.

```swift
ForEach(accounts) { account in
    Text(account.userName)
        .badge(account.setupErrors)
        .badgeProminence(.increased)
}
```

## See Also

### Getting background prominence

- [standard](standard.md): The standard level of prominence for a badge.
- [decreased](decreased.md): The lowest level of prominence for a badge.
