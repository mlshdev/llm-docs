> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiview/updateproperties()

# updateProperties() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the view’s content and styling properties before layout.

## Declaration

```swift
func updateProperties()
```

## Mentioned In

- [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md)

<a id="Overview"></a>

## Overview

Override this method to configure content and styling in your view subclass. Don’t call this method directly; instead, call [setNeedsUpdateProperties()](setneedsupdateproperties%28%29.md) to schedule an update.

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md).

## See Also

### Observing data in views

- [layoutSubviews()](layoutsubviews%28%29.md): Lays out subviews.
- [updateConstraints()](updateconstraints%28%29.md): Updates constraints for the view.
- [draw(\_:)](draw%28__%29.md): Draws the view’s image within the passed-in rectangle.

# updateProperties (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the view’s content and styling properties before layout.

## Declaration

```objectivec
- (void) updateProperties;
```

## Mentioned In

- [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md)

<a id="Overview"></a>

## Overview

Override this method to configure content and styling in your view subclass. Don’t call this method directly; instead, call [setNeedsUpdateProperties](setneedsupdateproperties%28%29.md) to schedule an update.

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md).

## See Also

### Observing data in views

- [layoutSubviews](layoutsubviews%28%29.md): Lays out subviews.
- [updateConstraints](updateconstraints%28%29.md): Updates constraints for the view.
- [drawRect:](draw%28__%29.md): Draws the view’s image within the passed-in rectangle.
