> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransition](https://developer.apple.com/documentation/quartzcore/catransition)

# CATransition (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An object that provides an animated transition between a layer’s states.

## Declaration

```swift
class CATransition
```

<a id="overview"></a>

## Overview

You can transition between a layer’s states by creating and adding a [CATransition](catransition.md) object to it. The default transition is a cross fade, but you can specify different effects from a set of predefined transitions.

The following code shows how you can transition between the two states of a [CATextLayer](catextlayer.md) named `transitioningLayer`. When the layer is first created, its [backgroundColor](calayer/backgroundcolor.md) is set to red and its [string](catextlayer/string.md) property is set to `Red`. When the `runTransition()` function is called, a new [CATransition](catransition.md) object is created and added to `transitioningLayer`, and the state of the layer is changed so that its background color is blue and its rendered text reads `Blue`.

The end result is that the push transition animates the red state from left to right with the blue state entering the scene from the left.

```swift
let transitioningLayer = CATextLayer()
     
override func viewDidLoad() {
    super.viewDidLoad()
    transitioningLayer.frame = CGRect(x: 10, y: 10,
                                      width: 320, height: 160)
    
    view.layer.addSublayer(transitioningLayer)
    
    // Initial "red" state
    transitioningLayer.backgroundColor = UIColor.red.cgColor
    transitioningLayer.string = "Red"
}
      
   
func runTransition() {
    let transition = CATransition()
    transition.duration = 2
    
    transition.type = kCATransitionPush
    
    transitioningLayer.add(transition,
                           forKey: "transition")
    
    // Transition to "blue" state
    transitioningLayer.backgroundColor = UIColor.blue.cgColor
    transitioningLayer.string = "Blue"
}
```

## Topics

### Transition start and end point

- [startProgress](catransition/startprogress.md): Indicates the start point of the receiver as a fraction of the entire transition.
- [endProgress](catransition/endprogress.md): Indicates the end point of the receiver as a fraction of the entire transition.

### Transition Properties

- [type](catransition/type.md): Specifies the predefined transition type.
- [subtype](catransition/subtype.md): Specifies an optional subtype that indicates the direction for the predefined motion-based transitions.

### Custom transition filter

- [filter](catransition/filter.md): An optional Core Image filter object that provides the transition.

### Constants

- [Common Transition Types](common-transition-types.md): These constants specify the transition types that can be used with the [type](catransition/type.md) property.
- [Common Transition Subtypes](common-transition-subtypes.md): These constants specify the direction of motion-based transitions. They are used with the [subtype](catransition/subtype.md) property.

## Relationships

### Inherits From

- [CAAnimation](caanimation.md)

### Conforms To

- [CAAction](caaction.md)
- [CAMediaTiming](camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Animation

- [CAAnimation](caanimation.md): The abstract superclass for animations in Core Animation.
- [CAAnimationDelegate](caanimationdelegate.md): Methods your app can implement to respond when animations start and stop.
- [CAPropertyAnimation](capropertyanimation.md): An abstract subclass for creating animations that manipulate the value of layer properties.
- [CABasicAnimation](cabasicanimation.md): An object that provides basic, single-keyframe animation capabilities for a layer property.
- [CAKeyframeAnimation](cakeyframeanimation.md): An object that provides keyframe animation capabilities for a layer object.
- [CASpringAnimation](caspringanimation.md): An animation that applies a spring-like force to a layer’s properties.
- [CAValueFunction](cavaluefunction.md): An object that provides a flexible method of defining animated transformations.

# CATransition (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An object that provides an animated transition between a layer’s states.

## Declaration

```objectivec
@interface CATransition : CAAnimation
```

<a id="overview"></a>

## Overview

You can transition between a layer’s states by creating and adding a [CATransition](catransition.md) object to it. The default transition is a cross fade, but you can specify different effects from a set of predefined transitions.

The following code shows how you can transition between the two states of a [CATextLayer](catextlayer.md) named `transitioningLayer`. When the layer is first created, its [backgroundColor](calayer/backgroundcolor.md) is set to red and its [string](catextlayer/string.md) property is set to `Red`. When the `runTransition()` function is called, a new [CATransition](catransition.md) object is created and added to `transitioningLayer`, and the state of the layer is changed so that its background color is blue and its rendered text reads `Blue`.

The end result is that the push transition animates the red state from left to right with the blue state entering the scene from the left.

```swift
let transitioningLayer = CATextLayer()
     
override func viewDidLoad() {
    super.viewDidLoad()
    transitioningLayer.frame = CGRect(x: 10, y: 10,
                                      width: 320, height: 160)
    
    view.layer.addSublayer(transitioningLayer)
    
    // Initial "red" state
    transitioningLayer.backgroundColor = UIColor.red.cgColor
    transitioningLayer.string = "Red"
}
      
   
func runTransition() {
    let transition = CATransition()
    transition.duration = 2
    
    transition.type = kCATransitionPush
    
    transitioningLayer.add(transition,
                           forKey: "transition")
    
    // Transition to "blue" state
    transitioningLayer.backgroundColor = UIColor.blue.cgColor
    transitioningLayer.string = "Blue"
}
```

## Topics

### Transition start and end point

- [startProgress](catransition/startprogress.md): Indicates the start point of the receiver as a fraction of the entire transition.
- [endProgress](catransition/endprogress.md): Indicates the end point of the receiver as a fraction of the entire transition.

### Transition Properties

- [type](catransition/type.md): Specifies the predefined transition type.
- [subtype](catransition/subtype.md): Specifies an optional subtype that indicates the direction for the predefined motion-based transitions.

### Custom transition filter

- [filter](catransition/filter.md): An optional Core Image filter object that provides the transition.

### Constants

- [Common Transition Types](common-transition-types.md): These constants specify the transition types that can be used with the [type](catransition/type.md) property.
- [Common Transition Subtypes](common-transition-subtypes.md): These constants specify the direction of motion-based transitions. They are used with the [subtype](catransition/subtype.md) property.

## Relationships

### Inherits From

- [CAAnimation](caanimation.md)

## See Also

### Animation

- [CAAnimation](caanimation.md): The abstract superclass for animations in Core Animation.
- [CAAnimationDelegate](caanimationdelegate.md): Methods your app can implement to respond when animations start and stop.
- [CAPropertyAnimation](capropertyanimation.md): An abstract subclass for creating animations that manipulate the value of layer properties.
- [CABasicAnimation](cabasicanimation.md): An object that provides basic, single-keyframe animation capabilities for a layer property.
- [CAKeyframeAnimation](cakeyframeanimation.md): An object that provides keyframe animation capabilities for a layer object.
- [CASpringAnimation](caspringanimation.md): An animation that applies a spring-like force to a layer’s properties.
- [CAValueFunction](cavaluefunction.md): An object that provides a flexible method of defining animated transformations.
