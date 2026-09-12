> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayoutmanager](https://developer.apple.com/documentation/quartzcore/calayoutmanager)

# CALayoutManager (Swift)

**Framework:** Core Animation  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.1+ · macOS

Methods that allow an object to manage the layout of a layer and its sublayers.

## Declaration

```swift
protocol CALayoutManager : NSObjectProtocol
```

## Topics

### Managing Layout

- [invalidateLayout(of:)](calayoutmanager/invalidatelayout%28of_%29.md): Invalidates the layout of a layer so it knows to refresh its content on the next frame.
- [layoutSublayers(of:)](calayoutmanager/layoutsublayers%28of_%29.md): Override to customize layout of sublayers whenever the layer needs redrawing.
- [preferredSize(of:)](calayoutmanager/preferredsize%28of_%29.md): Override to customize layer size.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [CAConstraintLayoutManager](caconstraintlayoutmanager.md)

## See Also

### Layer Basics

- [CALayer](calayer.md): An object that manages image-based content and allows you to perform animations on that content.
- [CALayerDelegate](calayerdelegate.md): Methods your app can implement to respond to layer-related events.
- [CAConstraint](caconstraint.md): A representation of a single layout constraint between two layers.
- [CAConstraintLayoutManager](caconstraintlayoutmanager.md): An object that provides a constraint-based layout manager.
- [CAAction](caaction.md): An interface that allows instances to respond to actions triggered by a Core Animation layer change.

# CALayoutManager (Objective-C)

**Framework:** Core Animation  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.1+ · macOS

Methods that allow an object to manage the layout of a layer and its sublayers.

## Declaration

```objectivec
@protocol CALayoutManager <NSObject>
```

## Topics

### Managing Layout

- [invalidateLayoutOfLayer:](calayoutmanager/invalidatelayout%28of_%29.md): Invalidates the layout of a layer so it knows to refresh its content on the next frame.
- [layoutSublayersOfLayer:](calayoutmanager/layoutsublayers%28of_%29.md): Override to customize layout of sublayers whenever the layer needs redrawing.
- [preferredSizeOfLayer:](calayoutmanager/preferredsize%28of_%29.md): Override to customize layer size.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [CAConstraintLayoutManager](caconstraintlayoutmanager.md)

## See Also

### Layer Basics

- [CALayer](calayer.md): An object that manages image-based content and allows you to perform animations on that content.
- [CALayerDelegate](calayerdelegate.md): Methods your app can implement to respond to layer-related events.
- [CAConstraint](caconstraint.md): A representation of a single layout constraint between two layers.
- [CAConstraintLayoutManager](caconstraintlayoutmanager.md): An object that provides a constraint-based layout manager.
- [CAAction](caaction.md): An interface that allows instances to respond to actions triggered by a Core Animation layer change.
