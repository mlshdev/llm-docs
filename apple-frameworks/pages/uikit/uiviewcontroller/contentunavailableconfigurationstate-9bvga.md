> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/contentunavailableconfigurationstate-9bvga](https://developer.apple.com/documentation/uikit/uiviewcontroller/contentunavailableconfigurationstate-9bvga)

# contentUnavailableConfigurationState

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the current content unavailable configuration state for the view. To add your own custom state(s), override the getter and call super to obtain an instance with the system properties set, then set your own custom states as desired.

## Declaration

```objectivec
@property (nonatomic, readonly) UIContentUnavailableConfigurationState * contentUnavailableConfigurationState;
```

## See Also

### Indicating missing content

- [contentUnavailableConfiguration](contentunavailableconfiguration-6kqfk.md): Setting a content unavailable configuration replaces the existing content unavailable view of the view controller with a new content unavailable view instance from the configuration, or directly applies the configuration to the existing content unavailable view if the configuration is compatible with the existing content unavailable view type. The default value is nil.
- [setNeedsUpdateContentUnavailableConfiguration](setneedsupdatecontentunavailableconfiguration%28%29.md): Requests that the system update the content-unavailable configuration for the latest state.
- [updateContentUnavailableConfigurationUsingState:](updatecontentunavailableconfigurationusingstate_.md): Updates the content-unavailable configuration for the provided state.
- [UIContentUnavailableConfiguration](../uicontentunavailableconfiguration-c.class.md): A content configuration for a content-unavailable view.
