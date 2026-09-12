> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationsplitviewvisibility/automatic](https://developer.apple.com/documentation/swiftui/navigationsplitviewvisibility/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Use the default leading column visibility for the current device.

## Declaration

```swift
static var automatic: NavigationSplitViewVisibility { get }
```

<a id="discussion"></a>

## Discussion

This computed property returns one of the three concrete cases: [detailOnly](detailonly.md), [doubleColumn](doublecolumn.md), or [all](all.md).

## See Also

### Getting visibilities

- [all](all.md): Show all the columns of a three-column navigation split view.
- [doubleColumn](doublecolumn.md): Show the content column and detail area of a three-column navigation split view, or the sidebar column and detail area of a two-column navigation split view.
- [detailOnly](detailonly.md): Hide the leading two columns of a three-column navigation split view, so that just the detail area shows.
