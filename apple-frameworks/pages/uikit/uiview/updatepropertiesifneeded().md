> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/updatepropertiesifneeded()](https://developer.apple.com/documentation/uikit/uiview/updatepropertiesifneeded())

# updatePropertiesIfNeeded() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Forces an immediate properties update for this view (and its view controller, if applicable) and any subviews, including any view controllers or views in its subtree.

## Declaration

```swift
func updatePropertiesIfNeeded()
```

## See Also

### Views

- [updateProperties()](updateproperties%28%29.md): Configures the view’s content and styling properties before layout.
- [setNeedsUpdateProperties()](setneedsupdateproperties%28%29.md): Call to manually request a properties update for the view. Multiple requests may be coalesced into a single update alongside the next layout pass.
- [layoutSubviews()](layoutsubviews%28%29.md): Lays out subviews.
- [updateConstraints()](updateconstraints%28%29.md): Updates constraints for the view.
- [draw(\_:)](draw%28__%29.md): Draws the view’s image within the passed-in rectangle.
- [UIView.Invalidations.Properties](invalidations/properties.md)

# updatePropertiesIfNeeded (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Forces an immediate properties update for this view (and its view controller, if applicable) and any subviews, including any view controllers or views in its subtree.

## Declaration

```objectivec
- (void) updatePropertiesIfNeeded;
```

## See Also

### Views

- [updateProperties](updateproperties%28%29.md): Configures the view’s content and styling properties before layout.
- [setNeedsUpdateProperties](setneedsupdateproperties%28%29.md): Call to manually request a properties update for the view. Multiple requests may be coalesced into a single update alongside the next layout pass.
- [layoutSubviews](layoutsubviews%28%29.md): Lays out subviews.
- [updateConstraints](updateconstraints%28%29.md): Updates constraints for the view.
- [drawRect:](draw%28__%29.md): Draws the view’s image within the passed-in rectangle.
