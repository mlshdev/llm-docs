> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/invalidating](https://developer.apple.com/documentation/appkit/nsview/invalidating)

# NSView.Invalidating

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 12.0+ · Swift 5.1+

A property wrapper that notifies the system that a property value change has invalidated an aspect of the containing view.

## Declaration

```swift
@propertyWrapper struct Invalidating<Value, InvalidationType> where Value : Equatable, InvalidationType : NSViewInvalidating
```

<a id="overview"></a>

## Overview

Use this wrapper when a change in the property value invalidates the display, layout, configuration, constraints, or intrinsic sizing of a view. This wrapper performs any actions necessary to notify the system that your view is invalid and requires an update. The actions depend on the invalidation types you specify. For more information on available invalidation types, see [NSViewInvalidating](../nsviewinvalidating.md).

The following example uses the [NSView.Invalidating](invalidating.md) wrapper with the `display` type on the property `fillColor` and the `display` and `layout` type on the property `badgePosition`.

```swift
class MyView: NSView {
    @Invalidating(.display) var fillColor: NSColor
    
    @Invalidating(.display, .layout) var badgePosition: NSRectEdge
}
```

When you change the fill color, the property wrapper sets [needsDisplay](needsdisplay.md) to true, causing the system to redraw the view. When you change the badge position, the property wrapper also sets [needsLayout](needslayout.md) to true, causing the system to update the view’s subviews before it redraws.

Functions such as `setNeedsDisplay` and `setNeedsLayout` perform changes on the next update cycle. You can make changes to multiple properties and views before any of those views update. Consolidating the updates to one update cycle is usually better for performance.

> **Note**

>  You only use `NSView.Invalidating` on subclasses of `NSView`.

## Topics

### Creating an Invalidating Property Wrapper

- [init(wrappedValue:\_:)](invalidating/init%28wrappedvalue___%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates an aspect of the containing view.
- [init(wrappedValue:\_:\_:)](invalidating/init%28wrappedvalue_____%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:)](invalidating/init%28wrappedvalue_______%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:)](invalidating/init%28wrappedvalue_________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:)](invalidating/init%28wrappedvalue___________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:)](invalidating/init%28wrappedvalue_____________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:\_:)](invalidating/init%28wrappedvalue_______________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:\_:\_:)](invalidating/init%28wrappedvalue_________________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](invalidating/init%28wrappedvalue___________________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](invalidating/init%28wrappedvalue_____________________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.

## See Also

### Updating the View When Property Values Change

- [NSViewInvalidating](../nsviewinvalidating.md): Implements a type of invalidation that can occur on a view that requires an update.
