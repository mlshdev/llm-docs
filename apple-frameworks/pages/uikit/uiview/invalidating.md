> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/invalidating](https://developer.apple.com/documentation/uikit/uiview/invalidating)

# UIView.Invalidating

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS · Swift 5.1+

A property wrapper that notifies the system that a property value change has invalidated an aspect of the containing view.

## Declaration

```swift
@propertyWrapper struct Invalidating<Value, InvalidationType> where Value : Equatable, InvalidationType : UIViewInvalidating
```

<a id="overview"></a>

## Overview

Use this wrapper when a change in the property value invalidates the display, layout, configuration, constraints, or intrinsic sizing of a view. This wrapper performs any actions necessary to notify the system that your view is invalid and requires an update. The actions depend on the invalidation types you specify. For more information on available invalidation types, see [UIViewInvalidating](../uiviewinvalidating.md).

The following example uses the [UIView.Invalidating](invalidating.md) wrapper with the `display` type on the property `badgeColor` and the `display` and `layout` type on the property `badgePosition`.

```swift
class MyView: UIView {
    @Invalidating(.display) var badgeColor: UIColor
    
    @Invalidating(.display, .layout) var badgePosition: UIRectEdge
}

```

When you change the badge color, the property wrapper calls [setNeedsDisplay()](setneedsdisplay%28%29.md), causing the system to redraw the view. When you change the badge position, the property wrapper also calls [setNeedsLayout()](setneedslayout%28%29.md), causing the system to update the view’s subviews before it redraws.

Functions such as [setNeedsDisplay()](setneedsdisplay%28%29.md) and [setNeedsLayout()](setneedslayout%28%29.md) perform changes on the next update cycle. You can make changes to multiple properties and views before any of those views update. Consolidating the updates to one update cycle is usually better for performance.

> **Note**

>  You only use [UIView.Invalidating](invalidating.md) on subclasses of [UIView](../uiview.md).

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

### Updating the view when property values change

- [UIViewInvalidating](../uiviewinvalidating.md): Implements a type of invalidation that can occur on a view that requires an update.
