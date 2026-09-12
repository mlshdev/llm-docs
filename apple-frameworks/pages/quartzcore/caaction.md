> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caaction](https://developer.apple.com/documentation/quartzcore/caaction)

# CAAction (Swift)

**Framework:** Core Animation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An interface that allows instances to respond to actions triggered by a Core Animation layer change.

## Declaration

```swift
protocol CAAction
```

<a id="overview"></a>

## Overview

When queried with an action identifier (a key path, an external action name, or a predefined action identifier) a layer returns the appropriate action object–which must implement the [CAAction](caaction.md) protocol–and sends it a [run(forKey:object:arguments:)](caaction/run%28forkey_object_arguments_%29.md) message.

## Topics

### Responding to an action

- [run(forKey:object:arguments:)](caaction/run%28forkey_object_arguments_%29.md): Called to trigger the action specified by the identifier.

## Relationships

### Conforming Types

- [CAAnimation](caanimation.md)
- [CAAnimationGroup](caanimationgroup.md)
- [CABasicAnimation](cabasicanimation.md)
- [CAKeyframeAnimation](cakeyframeanimation.md)
- [CAPropertyAnimation](capropertyanimation.md)
- [CASpringAnimation](caspringanimation.md)
- [CATransition](catransition.md)

## See Also

### Layer Basics

- [CALayer](calayer.md): An object that manages image-based content and allows you to perform animations on that content.
- [CALayerDelegate](calayerdelegate.md): Methods your app can implement to respond to layer-related events.
- [CAConstraint](caconstraint.md): A representation of a single layout constraint between two layers.
- [CALayoutManager](calayoutmanager.md): Methods that allow an object to manage the layout of a layer and its sublayers.
- [CAConstraintLayoutManager](caconstraintlayoutmanager.md): An object that provides a constraint-based layout manager.

# CAAction (Objective-C)

**Framework:** Core Animation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An interface that allows instances to respond to actions triggered by a Core Animation layer change.

## Declaration

```objectivec
@protocol CAAction
```

<a id="overview"></a>

## Overview

When queried with an action identifier (a key path, an external action name, or a predefined action identifier) a layer returns the appropriate action object–which must implement the [CAAction](caaction.md) protocol–and sends it a [runActionForKey:object:arguments:](caaction/run%28forkey_object_arguments_%29.md) message.

## Topics

### Responding to an action

- [runActionForKey:object:arguments:](caaction/run%28forkey_object_arguments_%29.md): Called to trigger the action specified by the identifier.

## Relationships

### Conforming Types

- [CAAnimation](caanimation.md)

## See Also

### Layer Basics

- [CALayer](calayer.md): An object that manages image-based content and allows you to perform animations on that content.
- [CALayerDelegate](calayerdelegate.md): Methods your app can implement to respond to layer-related events.
- [CAConstraint](caconstraint.md): A representation of a single layout constraint between two layers.
- [CALayoutManager](calayoutmanager.md): Methods that allow an object to manage the layout of a layer and its sublayers.
- [CAConstraintLayoutManager](caconstraintlayoutmanager.md): An object that provides a constraint-based layout manager.
