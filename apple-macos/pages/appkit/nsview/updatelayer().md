> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/updatelayer()](https://developer.apple.com/documentation/appkit/nsview/updatelayer())

# updateLayer() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Updates the view’s content by modifying its underlying layer.

## Declaration

```swift
func updateLayer()
```

<a id="Discussion"></a>

## Discussion

You use this method to optimize the rendering of your view in situations where you can represent your views contents entirely using a layer object. If your view’s [wantsUpdateLayer](wantsupdatelayer.md) property is [true](https://developer.apple.com/documentation/swift/true), the view calls this method instead of [draw(\_:)](draw%28__%29.md) during the view update cycle. Custom views can override this method and use it to modify the properties of the underlying layer object. Modifying layer properties is a much more efficient way to update your view than is redrawing its content each time something changes.

When you want to update the contents of your layer, mark the view as dirty by setting its [needsDisplay](needsdisplay.md) property to [true](https://developer.apple.com/documentation/swift/true). Doing so adds the view to the list of views that need to be refreshed during the next update cycle. During that update cycle, this method is called if the [wantsUpdateLayer](wantsupdatelayer.md) property is still [true](https://developer.apple.com/documentation/swift/true).

Your implementation of this method should not call `super`.

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in AppKit](../updating-views-automatically-with-observation-tracking-in-appkit.md).

## See Also

### Related Documentation

- [wantsUpdateLayer](wantsupdatelayer.md): A Boolean value indicating which drawing path the view takes when updating its contents.

### Observing data in views

- [Updating views automatically with observation tracking in AppKit](../updating-views-automatically-with-observation-tracking-in-appkit.md): Use Swift Observation and automatic tracking to update your views in response to model data updates.
- [layout()](layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [updateConstraints()](updateconstraints%28%29.md): Update constraints for the view.
- [draw(\_:)](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.

# updateLayer (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Updates the view’s content by modifying its underlying layer.

## Declaration

```objectivec
- (void) updateLayer;
```

<a id="Discussion"></a>

## Discussion

You use this method to optimize the rendering of your view in situations where you can represent your views contents entirely using a layer object. If your view’s [wantsUpdateLayer](wantsupdatelayer.md) property is [true](https://developer.apple.com/documentation/swift/true), the view calls this method instead of [drawRect:](draw%28__%29.md) during the view update cycle. Custom views can override this method and use it to modify the properties of the underlying layer object. Modifying layer properties is a much more efficient way to update your view than is redrawing its content each time something changes.

When you want to update the contents of your layer, mark the view as dirty by setting its [needsDisplay](needsdisplay.md) property to [true](https://developer.apple.com/documentation/swift/true). Doing so adds the view to the list of views that need to be refreshed during the next update cycle. During that update cycle, this method is called if the [wantsUpdateLayer](wantsupdatelayer.md) property is still [true](https://developer.apple.com/documentation/swift/true).

Your implementation of this method should not call `super`.

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in AppKit](../updating-views-automatically-with-observation-tracking-in-appkit.md).

## See Also

### Related Documentation

- [wantsUpdateLayer](wantsupdatelayer.md): A Boolean value indicating which drawing path the view takes when updating its contents.

### Observing data in views

- [Updating views automatically with observation tracking in AppKit](../updating-views-automatically-with-observation-tracking-in-appkit.md): Use Swift Observation and automatic tracking to update your views in response to model data updates.
- [layout](layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [updateConstraints](updateconstraints%28%29.md): Update constraints for the view.
- [drawRect:](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
