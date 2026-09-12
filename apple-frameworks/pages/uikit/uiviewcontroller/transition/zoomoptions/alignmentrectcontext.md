> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/transition/zoomoptions/alignmentrectcontext](https://developer.apple.com/documentation/uikit/uiviewcontroller/transition/zoomoptions/alignmentrectcontext)

# UIViewController.Transition.ZoomOptions.AlignmentRectContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An object that contains a zoom transition’s starting and ending views.

## Declaration

```swift
class AlignmentRectContext
```

## Topics

### Accessing views

- [sourceView](alignmentrectcontext/sourceview.md): The zoomed-out view, for example a thumbnail image.
- [zoomedViewController](alignmentrectcontext/zoomedviewcontroller.md): The zoomed in view.

## Relationships

### Inherits From

- [NSObject](../../../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../../../objectivec/nsobjectprotocol.md)

## See Also

### Setting options

- [alignmentRectProvider](alignmentrectprovider.md): A closure that returns the alignment rectangle for the starting and ending views.
- [dimmingColor](dimmingcolor.md): The dimming color.
- [dimmingVisualEffect](dimmingvisualeffect.md): The dimming visual effect.

# UIZoomTransitionAlignmentRectContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An object that contains a zoom transition’s starting and ending views.

## Declaration

```objectivec
@interface UIZoomTransitionAlignmentRectContext : NSObject
```

## Topics

### Accessing views

- [sourceView](alignmentrectcontext/sourceview.md): The zoomed-out view, for example a thumbnail image.
- [zoomedViewController](alignmentrectcontext/zoomedviewcontroller.md): The zoomed in view.

## Relationships

### Inherits From

- [NSObject](../../../../objectivec/nsobject-swift.class.md)

## See Also

### Setting options

- [alignmentRectProvider](../../../uizoomtransitionoptions/alignmentrectprovider.md): A block that returns the alignment rectangle for the starting and ending views.
- [dimmingColor](dimmingcolor.md): The dimming color.
- [dimmingVisualEffect](dimmingvisualeffect.md): The dimming visual effect.
