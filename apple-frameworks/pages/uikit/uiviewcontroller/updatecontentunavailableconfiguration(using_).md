> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/updatecontentunavailableconfiguration(using:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/updatecontentunavailableconfiguration(using:))

# updateContentUnavailableConfiguration(using:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

Updates the content-unavailable configuration for the provided state.

## Declaration

```swift
@MainActor @objc(_bridgedUpdateContentUnavailableConfigurationUsingState:) @preconcurrency dynamic func updateContentUnavailableConfiguration(using state: UIContentUnavailableConfigurationState)
```

## Parameters

- `state`: The current configuration state for a content-unavailable view.

<a id="Discussion"></a>

## Discussion

Override this method to update the value of [contentUnavailableConfiguration](contentunavailableconfiguration-4b95e.md) as appropriate for the given state.

Don’t call this method directly. Instead, call [setNeedsUpdateContentUnavailableConfiguration()](setneedsupdatecontentunavailableconfiguration%28%29.md) to tell the system to request an update.

In iOS 18 and later, UIKit supports automatic trait tracking inside this method for traits from this view controller’s `traitCollection` and the `traitCollection` of its [view](view.md). For more information, see [Automatic trait tracking](../automatic-trait-tracking.md).

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md).

## See Also

### Observing data in view controllers

- [updateProperties()](updateproperties%28%29.md): Configures the view controller’s content and styling properties.
- [viewWillLayoutSubviews()](viewwilllayoutsubviews%28%29.md): Notifies the view controller that its view is about to lay out its subviews.
- [viewDidLayoutSubviews()](viewdidlayoutsubviews%28%29.md): Notifies the view controller when its view finishes laying out its subviews.
- [updateViewConstraints()](updateviewconstraints%28%29.md): Notifies the view controller when its view needs to update its constraints.
