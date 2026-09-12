> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/updating-views-automatically-with-observation-tracking-in-appkit](https://developer.apple.com/documentation/appkit/updating-views-automatically-with-observation-tracking-in-appkit)

# Updating views automatically with observation tracking in AppKit (Swift)

**Framework:** AppKit  
**Kind:** Article

Use Swift Observation and automatic tracking to update your views in response to model data updates.

<a id="Overview"></a>

## Overview

Swift [Observation](https://developer.apple.com/documentation/observation) provides the [Observable](https://developer.apple.com/documentation/observation/observable) macro to mark your models for automatic change tracking. When you combine `Observable` models with AppKit, the system automatically watches for property changes and updates your views. You don’t need to manually invalidate anything — AppKit handles it for you.

AppKit provides methods in several objects where automatic observation tracking happens. In a view subclass, [updateConstraints()](nsview/updateconstraints%28%29.md), [layout()](nsview/layout%28%29.md), and [draw(\_:)](nsview/draw%28__%29.md) are examples of methods that automatically track any `Observable` properties you read, and AppKit updates your views when those properties change.

> **Note**

> In macOS 15, the system doesn’t enable automatic observation tracking by default. To enable it, add the [NSObservationTrackingEnabled](https://developer.apple.com/documentation/bundleresources/information-property-list/nsobservationtrackingenabled) key to your app’s information property list and set the key’s value to [true](https://developer.apple.com/documentation/swift/true).

<a id="Update-view-properties-automatically"></a>

### Update view properties automatically

The [viewWillLayout()](nsviewcontroller/viewwilllayout%28%29.md) method automatically tracks `Observable` properties and updates views when they change. For example, to show a message list with a status label that displays unread message information, start by creating an `Observable` model with the properties your view needs:

```swift
@Observable
class MessageModel {
    var showStatus: Bool
    var statusText: String
}
```

Then, use these properties in your view controller’s `viewWillLayout()` method:

```swift
override func viewWillLayout() {
    super.viewWillLayout()
    statusLabel.alphaValue = model.showStatus ? 1.0 : 0.0
    statusLabel.stringValue = model.statusText
}
```

When the view first appears, AppKit runs `viewWillLayout()` and tracks that you read `showStatus` and `statusText`. If either property changes later, AppKit automatically runs `viewWillLayout()` again to update the label.

You can also automatically track changes in a custom view using [layout()](nsview/layout%28%29.md).

<a id="Draw-views-automatically"></a>

### Draw views automatically

AppKit automatically tracks any `Observable` properties you read inside your [draw(\_:)](nsview/draw%28__%29.md) override. When those properties change, AppKit invalidates and redraws the view.

This automatic tracking also covers any methods that [draw(\_:)](nsview/draw%28__%29.md) calls. This means that if you override drawing methods in a cell subclass, such as [drawKnob(\_:)](nsslidercell/drawknob%28__%29.md) and [drawBar(inside:flipped:)](nsslidercell/drawbar%28inside_flipped_%29.md), AppKit also tracks those overrides.

For example, to draw a custom slider cell that responds to model changes, start by creating an `Observable` model with the visual properties your cell needs:

```swift
@Observable
class SliderAppearance {
    var knobColor: NSColor
    var trackColor: NSColor
}
```

Then, override the drawing methods in your [NSSliderCell](nsslidercell.md) subclass and read from the model inside each override:

```swift
class CustomSliderCell: NSSliderCell {
    var appearance: SliderAppearance

    override func drawKnob(_ knobRect: NSRect) {
        appearance.knobColor.setFill()
        NSBezierPath(ovalIn: knobRect).fill()
    }

    override func drawBar(inside rect: NSRect, flipped: Bool) {
        appearance.trackColor.setFill()
        NSBezierPath(roundedRect: rect, xRadius: 2, yRadius: 2).fill()
    }
}
```

When [drawKnob(\_:)](nsslidercell/drawknob%28__%29.md) and [drawBar(inside:flipped:)](nsslidercell/drawbar%28inside_flipped_%29.md) run, AppKit tracks that they read `knobColor` and `trackColor`. If either property changes later, AppKit automatically redraws the slider.

## See Also

### Related Documentation

- [viewWillLayout()](nsviewcontroller/viewwilllayout%28%29.md): Called just before the [layout()](nsview/layout%28%29.md) method of the view controller’s view is called.
- [updateViewConstraints()](nsviewcontroller/updateviewconstraints%28%29.md): Called during Auto Layout constraint updating to enable the view controller to mediate the process.
- [draw(\_:)](nsview/draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [layout()](nsview/layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [updateConstraints()](nsview/updateconstraints%28%29.md): Update constraints for the view.

### Observing data in views

- [layout()](nsview/layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [updateConstraints()](nsview/updateconstraints%28%29.md): Update constraints for the view.
- [updateLayer()](nsview/updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [draw(\_:)](nsview/draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.

# Updating views automatically with observation tracking in AppKit (Objective-C)

**Framework:** AppKit  
**Kind:** Article

Use Swift Observation and automatic tracking to update your views in response to model data updates.

<a id="Overview"></a>

## Overview

Swift [Observation](https://developer.apple.com/documentation/observation) provides the [Observable](https://developer.apple.com/documentation/observation/observable) macro to mark your models for automatic change tracking. When you combine `Observable` models with AppKit, the system automatically watches for property changes and updates your views. You don’t need to manually invalidate anything — AppKit handles it for you.

AppKit provides methods in several objects where automatic observation tracking happens. In a view subclass, [updateConstraints](nsview/updateconstraints%28%29.md), [layout](nsview/layout%28%29.md), and [drawRect:](nsview/draw%28__%29.md) are examples of methods that automatically track any `Observable` properties you read, and AppKit updates your views when those properties change.

> **Note**

> In macOS 15, the system doesn’t enable automatic observation tracking by default. To enable it, add the [NSObservationTrackingEnabled](https://developer.apple.com/documentation/bundleresources/information-property-list/nsobservationtrackingenabled) key to your app’s information property list and set the key’s value to [true](https://developer.apple.com/documentation/swift/true).

<a id="Update-view-properties-automatically"></a>

### Update view properties automatically

The [viewWillLayout](nsviewcontroller/viewwilllayout%28%29.md) method automatically tracks `Observable` properties and updates views when they change. For example, to show a message list with a status label that displays unread message information, start by creating an `Observable` model with the properties your view needs:

```swift
@Observable
class MessageModel {
    var showStatus: Bool
    var statusText: String
}
```

Then, use these properties in your view controller’s `viewWillLayout()` method:

```swift
override func viewWillLayout() {
    super.viewWillLayout()
    statusLabel.alphaValue = model.showStatus ? 1.0 : 0.0
    statusLabel.stringValue = model.statusText
}
```

When the view first appears, AppKit runs `viewWillLayout()` and tracks that you read `showStatus` and `statusText`. If either property changes later, AppKit automatically runs `viewWillLayout()` again to update the label.

You can also automatically track changes in a custom view using [layout](nsview/layout%28%29.md).

<a id="Draw-views-automatically"></a>

### Draw views automatically

AppKit automatically tracks any `Observable` properties you read inside your [drawRect:](nsview/draw%28__%29.md) override. When those properties change, AppKit invalidates and redraws the view.

This automatic tracking also covers any methods that [drawRect:](nsview/draw%28__%29.md) calls. This means that if you override drawing methods in a cell subclass, such as [drawKnob:](nsslidercell/drawknob%28__%29.md) and [drawBarInside:flipped:](nsslidercell/drawbar%28inside_flipped_%29.md), AppKit also tracks those overrides.

For example, to draw a custom slider cell that responds to model changes, start by creating an `Observable` model with the visual properties your cell needs:

```swift
@Observable
class SliderAppearance {
    var knobColor: NSColor
    var trackColor: NSColor
}
```

Then, override the drawing methods in your [NSSliderCell](nsslidercell.md) subclass and read from the model inside each override:

```swift
class CustomSliderCell: NSSliderCell {
    var appearance: SliderAppearance

    override func drawKnob(_ knobRect: NSRect) {
        appearance.knobColor.setFill()
        NSBezierPath(ovalIn: knobRect).fill()
    }

    override func drawBar(inside rect: NSRect, flipped: Bool) {
        appearance.trackColor.setFill()
        NSBezierPath(roundedRect: rect, xRadius: 2, yRadius: 2).fill()
    }
}
```

When [drawKnob:](nsslidercell/drawknob%28__%29.md) and [drawBarInside:flipped:](nsslidercell/drawbar%28inside_flipped_%29.md) run, AppKit tracks that they read `knobColor` and `trackColor`. If either property changes later, AppKit automatically redraws the slider.

## See Also

### Related Documentation

- [viewWillLayout](nsviewcontroller/viewwilllayout%28%29.md): Called just before the [layout](nsview/layout%28%29.md) method of the view controller’s view is called.
- [updateViewConstraints](nsviewcontroller/updateviewconstraints%28%29.md): Called during Auto Layout constraint updating to enable the view controller to mediate the process.
- [drawRect:](nsview/draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [layout](nsview/layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [updateConstraints](nsview/updateconstraints%28%29.md): Update constraints for the view.

### Observing data in views

- [layout](nsview/layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [updateConstraints](nsview/updateconstraints%28%29.md): Update constraints for the view.
- [updateLayer](nsview/updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [drawRect:](nsview/draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
