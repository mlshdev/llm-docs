> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationsplitviewstyle/prominentdetail](https://developer.apple.com/documentation/swiftui/navigationsplitviewstyle/prominentdetail)

# prominentDetail

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A navigation split style that attempts to maintain the size of the detail content when hiding or showing the leading columns.

## Declaration

```swift
@MainActor @preconcurrency static var prominentDetail: ProminentDetailNavigationSplitViewStyle { get }
```

## See Also

### Creating built-in styles

- [automatic](automatic.md): Conforms when `Self` is `AutomaticNavigationSplitViewStyle`. A navigation split style that resolves its appearance automatically based on the current context.
- [balanced](balanced.md): Conforms when `Self` is `BalancedNavigationSplitViewStyle`. A navigation split style that reduces the size of the detail content to make room when showing the leading column or columns.
