> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/updateproperties()](https://developer.apple.com/documentation/uikit/uiviewcontroller/updateproperties())

# updateProperties() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the view controller’s content and styling properties.

## Declaration

```swift
func updateProperties()
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)
- [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md)

<a id="Overview"></a>

## Overview

Override this method to configure the view’s content and styling in your view controller subclass. Don’t call this method directly; instead, call [setNeedsUpdateProperties()](setneedsupdateproperties%28%29.md) to schedule an update.

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md).

## See Also

### Observing data in view controllers

- [viewWillLayoutSubviews()](viewwilllayoutsubviews%28%29.md): Notifies the view controller that its view is about to lay out its subviews.
- [viewDidLayoutSubviews()](viewdidlayoutsubviews%28%29.md): Notifies the view controller when its view finishes laying out its subviews.
- [updateViewConstraints()](updateviewconstraints%28%29.md): Notifies the view controller when its view needs to update its constraints.
- [updateContentUnavailableConfiguration(using:)](updatecontentunavailableconfiguration%28using_%29.md): Updates the content-unavailable configuration for the provided state.

# updateProperties (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the view controller’s content and styling properties.

## Declaration

```objectivec
- (void) updateProperties;
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)
- [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md)

<a id="Overview"></a>

## Overview

Override this method to configure the view’s content and styling in your view controller subclass. Don’t call this method directly; instead, call [setNeedsUpdateProperties](setneedsupdateproperties%28%29.md) to schedule an update.

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md).

## See Also

### Observing data in view controllers

- [viewWillLayoutSubviews](viewwilllayoutsubviews%28%29.md): Notifies the view controller that its view is about to lay out its subviews.
- [viewDidLayoutSubviews](viewdidlayoutsubviews%28%29.md): Notifies the view controller when its view finishes laying out its subviews.
- [updateViewConstraints](updateviewconstraints%28%29.md): Notifies the view controller when its view needs to update its constraints.
