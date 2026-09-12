> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/transition/zoomoptions](https://developer.apple.com/documentation/uikit/uiviewcontroller/transition/zoomoptions)

# UIViewController.Transition.ZoomOptions (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Options for a zoom transition.

## Declaration

```swift
class ZoomOptions
```

## Topics

### Setting options

- [alignmentRectProvider](zoomoptions/alignmentrectprovider.md): A closure that returns the alignment rectangle for the starting and ending views.
- [UIViewController.Transition.ZoomOptions.AlignmentRectContext](zoomoptions/alignmentrectcontext.md): An object that contains a zoom transition’s starting and ending views.
- [dimmingColor](zoomoptions/dimmingcolor.md): The dimming color.
- [dimmingVisualEffect](zoomoptions/dimmingvisualeffect.md): The dimming visual effect.

### Accessing the animation state

- [interactiveDismissShouldBegin](zoomoptions/interactivedismissshouldbegin.md): A closure that determines whether an interactive dismissal can begin.
- [UIViewController.Transition.ZoomOptions.InteractionContext](zoomoptions/interactioncontext.md): Data you can use to determine whether an interactive dismissal can begin.

## Relationships

### Inherits From

- [NSObject](../../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../../../foundation/nscopying.md)
- [NSObjectProtocol](../../../objectivec/nsobjectprotocol.md)

## See Also

### Creating zoom transitions

- [zoom(options:sourceViewProvider:)](zoom%28options_sourceviewprovider_%29.md): Creates a zoom transition from the view that the source provider specifies.
- [UIViewController.Transition.ZoomSourceViewProviderContext](zoomsourceviewprovidercontext.md): A context object that contains references to the view controllers from a zoom transition.

# UIZoomTransitionOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Options for a zoom transition.

## Declaration

```objectivec
@interface UIZoomTransitionOptions : NSObject
```

## Topics

### Setting options

- [alignmentRectProvider](../../uizoomtransitionoptions/alignmentrectprovider.md): A block that returns the alignment rectangle for the starting and ending views.
- [UIZoomTransitionAlignmentRectContext](zoomoptions/alignmentrectcontext.md): An object that contains a zoom transition’s starting and ending views.
- [dimmingColor](zoomoptions/dimmingcolor.md): The dimming color.
- [dimmingVisualEffect](zoomoptions/dimmingvisualeffect.md): The dimming visual effect.

### Accessing the animation state

- [interactiveDismissShouldBegin](zoomoptions/interactivedismissshouldbegin.md): A closure that determines whether an interactive dismissal can begin.
- [UIZoomTransitionInteractionContext](zoomoptions/interactioncontext.md): Data you can use to determine whether an interactive dismissal can begin.

## Relationships

### Inherits From

- [NSObject](../../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../../foundation/nscopying.md)

## See Also

### Creating zoom transitions

- [zoomWithOptions:sourceViewProvider:](../../uiviewcontrollertransition/zoomwithoptions_sourceviewprovider_.md): Creates a zoom transition from the view specified by the source provider.
- [UIZoomTransitionSourceViewProviderContext](zoomsourceviewprovidercontext.md): A context object that contains references to the view controllers from a zoom transition.
