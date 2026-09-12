> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/contentunavailableconfiguration-4b95e](https://developer.apple.com/documentation/uikit/uiviewcontroller/contentunavailableconfiguration-4b95e)

# contentUnavailableConfiguration

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

The current content-unavailable configuration of the view controller.

## Declaration

```swift
@MainActor @preconcurrency var contentUnavailableConfiguration: (any UIContentConfiguration)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to configure a content-unavailable view that the view controller manages. The value of this property is commonly an instance of [UIContentUnavailableConfiguration](../uicontentunavailableconfiguration-swift.struct.md), but you can use other types of content configuration, including a [UIHostingConfiguration](https://developer.apple.com/documentation/swiftui/uihostingconfiguration), to display a SwiftUI view.

## See Also

### Indicating missing content

- [contentUnavailableConfigurationState](contentunavailableconfigurationstate-7sczw.md): The current configuration state of the content-unavailable view.
- [setNeedsUpdateContentUnavailableConfiguration()](setneedsupdatecontentunavailableconfiguration%28%29.md): Requests that the system update the content-unavailable configuration for the latest state.
- [updateContentUnavailableConfiguration(using:)](updatecontentunavailableconfiguration%28using_%29.md): Updates the content-unavailable configuration for the provided state.
- [UIContentUnavailableConfiguration](../uicontentunavailableconfiguration-swift.struct.md): A content configuration for a content-unavailable view.
