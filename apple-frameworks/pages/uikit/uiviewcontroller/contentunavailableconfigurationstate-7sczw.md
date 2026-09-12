> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/contentunavailableconfigurationstate-7sczw](https://developer.apple.com/documentation/uikit/uiviewcontroller/contentunavailableconfigurationstate-7sczw)

# contentUnavailableConfigurationState

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

The current configuration state of the content-unavailable view.

## Declaration

```swift
@MainActor @objc(_bridgedContentUnavailableConfigurationState) @preconcurrency dynamic var contentUnavailableConfigurationState: UIContentUnavailableConfigurationState { get }
```

<a id="Discussion"></a>

## Discussion

You can customize the configuration state by overriding this property in your subclass. Obtain the system instance from the superclass, and customize the state as appropriate.

## See Also

### Indicating missing content

- [contentUnavailableConfiguration](contentunavailableconfiguration-4b95e.md): The current content-unavailable configuration of the view controller.
- [setNeedsUpdateContentUnavailableConfiguration()](setneedsupdatecontentunavailableconfiguration%28%29.md): Requests that the system update the content-unavailable configuration for the latest state.
- [updateContentUnavailableConfiguration(using:)](updatecontentunavailableconfiguration%28using_%29.md): Updates the content-unavailable configuration for the provided state.
- [UIContentUnavailableConfiguration](../uicontentunavailableconfiguration-swift.struct.md): A content configuration for a content-unavailable view.
