> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/accessibilitylargecontentviewerenabled](https://developer.apple.com/documentation/swiftui/environmentvalues/accessibilitylargecontentviewerenabled)

# accessibilityLargeContentViewerEnabled

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Whether the Large Content Viewer is enabled.

## Declaration

```swift
var accessibilityLargeContentViewerEnabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

The system can automatically provide a large content view with [accessibilityShowsLargeContentViewer()](../view/accessibilityshowslargecontentviewer%28%29.md) or you can provide your own with [accessibilityShowsLargeContentViewer(\_:)](../view/accessibilityshowslargecontentviewer%28__%29.md).

While it is not necessary to check this value before adding a large content view, it may be helpful if you need to adjust the behavior of a gesture. For example, a button with a long press handler might increase its long press duration so the user can read the text in the large content viewer first.

## See Also

### Enlarging content

- [accessibilityShowsLargeContentViewer()](../view/accessibilityshowslargecontentviewer%28%29.md): Adds a default large content view to be shown by the large content viewer.
- [accessibilityShowsLargeContentViewer(\_:)](../view/accessibilityshowslargecontentviewer%28__%29.md): Adds a custom large content view to be shown by the large content viewer.
