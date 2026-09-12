> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/assistiveaccessnavigationicon(_:)](https://developer.apple.com/documentation/swiftui/view/assistiveaccessnavigationicon(_:))

# assistiveAccessNavigationIcon(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Configures the view’s icon for purposes of navigation.

## Declaration

```swift
nonisolated func assistiveAccessNavigationIcon(_ icon: Image) -> some View

```

## Parameters

- `icon`: The icon image to display.

<a id="discussion"></a>

## Discussion

In an Assistive Access scene on iOS and iPadOS, the icon is displayed adjacent to the navigation title. Otherwise, the icon is unused.

## See Also

### Using assistive access

- [accessibilityAssistiveAccessEnabled](../environmentvalues/accessibilityassistiveaccessenabled.md): A Boolean value that indicates whether Assistive Access is in use.
- [AssistiveAccess](../assistiveaccess.md): A scene that presents an interface appropriate for Assistive Access on iOS and iPadOS. On other platforms, this scene is unused.
- [assistiveAccessNavigationIcon(systemImage:)](assistiveaccessnavigationicon%28systemimage_%29.md): Configures the view’s icon for purposes of navigation.
