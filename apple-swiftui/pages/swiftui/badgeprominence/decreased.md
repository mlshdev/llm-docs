> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/badgeprominence/decreased](https://developer.apple.com/documentation/swiftui/badgeprominence/decreased)

# decreased

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The lowest level of prominence for a badge.

## Declaration

```swift
static let decreased: BadgeProminence
```

<a id="discussion"></a>

## Discussion

This level or prominence should be used for badges that display a value of passive information that requires no user action, such as total number of messages or content.

In lists on iOS and macOS, this results in badge labels being displayed without any extra decoration. On iOS, this looks the same as `.standard`.

```swift
List(folders) { folder in
    Text(folder.name)
        .badge(folder.numberOfItems)
}
.badgeProminence(.decreased)
```

## See Also

### Getting background prominence

- [standard](standard.md): The standard level of prominence for a badge.
- [increased](increased.md): The highest level of prominence for a badge.
