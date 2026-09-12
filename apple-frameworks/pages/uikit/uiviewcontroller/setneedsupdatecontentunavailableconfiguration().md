> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/setneedsupdatecontentunavailableconfiguration()](https://developer.apple.com/documentation/uikit/uiviewcontroller/setneedsupdatecontentunavailableconfiguration())

# setNeedsUpdateContentUnavailableConfiguration() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Requests that the system update the content-unavailable configuration for the latest state.

## Declaration

```swift
func setNeedsUpdateContentUnavailableConfiguration()
```

## See Also

### Indicating missing content

- [contentUnavailableConfiguration](contentunavailableconfiguration-4b95e.md): The current content-unavailable configuration of the view controller.
- [contentUnavailableConfigurationState](contentunavailableconfigurationstate-7sczw.md): The current configuration state of the content-unavailable view.
- [updateContentUnavailableConfiguration(using:)](updatecontentunavailableconfiguration%28using_%29.md): Updates the content-unavailable configuration for the provided state.
- [UIContentUnavailableConfiguration](../uicontentunavailableconfiguration-swift.struct.md): A content configuration for a content-unavailable view.

# setNeedsUpdateContentUnavailableConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Requests that the system update the content-unavailable configuration for the latest state.

## Declaration

```objectivec
- (void) setNeedsUpdateContentUnavailableConfiguration;
```

## See Also

### Indicating missing content

- [contentUnavailableConfiguration](contentunavailableconfiguration-6kqfk.md): Setting a content unavailable configuration replaces the existing content unavailable view of the view controller with a new content unavailable view instance from the configuration, or directly applies the configuration to the existing content unavailable view if the configuration is compatible with the existing content unavailable view type. The default value is nil.
- [contentUnavailableConfigurationState](contentunavailableconfigurationstate-9bvga.md): Returns the current content unavailable configuration state for the view. To add your own custom state(s), override the getter and call super to obtain an instance with the system properties set, then set your own custom states as desired.
- [updateContentUnavailableConfigurationUsingState:](updatecontentunavailableconfigurationusingstate_.md): Updates the content-unavailable configuration for the provided state.
- [UIContentUnavailableConfiguration](../uicontentunavailableconfiguration-c.class.md): A content configuration for a content-unavailable view.
