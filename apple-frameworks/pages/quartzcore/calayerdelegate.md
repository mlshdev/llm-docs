> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayerdelegate](https://developer.apple.com/documentation/quartzcore/calayerdelegate)

# CALayerDelegate (Swift)

**Framework:** Core Animation  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Methods your app can implement to respond to layer-related events.

## Declaration

```swift
protocol CALayerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You can implement the methods of this protocol to provide the layer’s content, handle the layout of sublayers, and provide custom animation actions to perform. The object that implements this protocol must be assigned to the [delegate](calayer/delegate.md) property of the layer object.

## Topics

### Providing the Layer’s Content

- [display(\_:)](calayerdelegate/display%28__%29.md): Tells the delegate to implement the display process.
- [draw(\_:in:)](calayerdelegate/draw%28__in_%29.md): Tells the delegate to implement the display process using the layer’s context.
- [layerWillDraw(\_:)](calayerdelegate/layerwilldraw%28__%29.md): Notifies the delegate of an imminent draw.

### Laying Out Sublayers

- [layoutSublayers(of:)](calayerdelegate/layoutsublayers%28of_%29.md): Tells the delegate a layer’s bounds have changed.

### Providing a Layer’s Actions

- [action(for:forKey:)](calayerdelegate/action%28for_forkey_%29.md): Returns the default action of the [action(forKey:)](calayer/action%28forkey_%29.md) method.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Layer Basics

- [CALayer](calayer.md): An object that manages image-based content and allows you to perform animations on that content.
- [CAConstraint](caconstraint.md): A representation of a single layout constraint between two layers.
- [CALayoutManager](calayoutmanager.md): Methods that allow an object to manage the layout of a layer and its sublayers.
- [CAConstraintLayoutManager](caconstraintlayoutmanager.md): An object that provides a constraint-based layout manager.
- [CAAction](caaction.md): An interface that allows instances to respond to actions triggered by a Core Animation layer change.

# CALayerDelegate (Objective-C)

**Framework:** Core Animation  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Methods your app can implement to respond to layer-related events.

## Declaration

```objectivec
@protocol CALayerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

You can implement the methods of this protocol to provide the layer’s content, handle the layout of sublayers, and provide custom animation actions to perform. The object that implements this protocol must be assigned to the [delegate](calayer/delegate.md) property of the layer object.

## Topics

### Providing the Layer’s Content

- [displayLayer:](calayerdelegate/display%28__%29.md): Tells the delegate to implement the display process.
- [drawLayer:inContext:](calayerdelegate/draw%28__in_%29.md): Tells the delegate to implement the display process using the layer’s context.
- [layerWillDraw:](calayerdelegate/layerwilldraw%28__%29.md): Notifies the delegate of an imminent draw.

### Laying Out Sublayers

- [layoutSublayersOfLayer:](calayerdelegate/layoutsublayers%28of_%29.md): Tells the delegate a layer’s bounds have changed.

### Providing a Layer’s Actions

- [actionForLayer:forKey:](calayerdelegate/action%28for_forkey_%29.md): Returns the default action of the [actionForKey:](calayer/action%28forkey_%29.md) method.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Layer Basics

- [CALayer](calayer.md): An object that manages image-based content and allows you to perform animations on that content.
- [CAConstraint](caconstraint.md): A representation of a single layout constraint between two layers.
- [CALayoutManager](calayoutmanager.md): Methods that allow an object to manage the layout of a layer and its sublayers.
- [CAConstraintLayoutManager](caconstraintlayoutmanager.md): An object that provides a constraint-based layout manager.
- [CAAction](caaction.md): An interface that allows instances to respond to actions triggered by a Core Animation layer change.
