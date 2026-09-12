> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/transition](https://developer.apple.com/documentation/uikit/uiviewcontroller/transition)

# UIViewController.Transition (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An object that defines the transition animation when switching to a new view controller.

## Declaration

```swift
class Transition
```

## Topics

### Creating zoom transitions

- [zoom(options:sourceViewProvider:)](transition/zoom%28options_sourceviewprovider_%29.md): Creates a zoom transition from the view that the source provider specifies.
- [UIViewController.Transition.ZoomOptions](transition/zoomoptions.md): Options for a zoom transition.
- [UIViewController.Transition.ZoomSourceViewProviderContext](transition/zoomsourceviewprovidercontext.md): A context object that contains references to the view controllers from a zoom transition.

### Accessing transitions

- [coverVertical](transition/coververtical.md): A transition where the new view slides up from the bottom of the screen.
- [crossDissolve](transition/crossdissolve.md): A transition where the current view fades out while the new view fades in at the same time.
- [flipHorizontal](transition/fliphorizontal.md): A transition where the current view flips horizontally to reveal the new view.
- [partialCurl](transition/partialcurl.md): A transition where one corner of the current view curls up, revealing the new view underneath.

### Type Methods

- [zoom(options:sourceBarButtonItemProvider:)](transition/zoom%28options_sourcebarbuttonitemprovider_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Working with transitions

- [preferredTransition](preferredtransition.md): An object that defines the transition animation when switching to the view controller.

# UIViewControllerTransition (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An object that defines the transition animation when switching to a new view controller.

## Declaration

```objectivec
@interface UIViewControllerTransition : NSObject
```

## Topics

### Creating zoom transitions

- [zoomWithOptions:sourceViewProvider:](../uiviewcontrollertransition/zoomwithoptions_sourceviewprovider_.md): Creates a zoom transition from the view specified by the source provider.
- [UIZoomTransitionOptions](transition/zoomoptions.md): Options for a zoom transition.
- [UIZoomTransitionSourceViewProviderContext](transition/zoomsourceviewprovidercontext.md): A context object that contains references to the view controllers from a zoom transition.

### Accessing transitions

- [coverVerticalTransition](../uiviewcontrollertransition/coververticaltransition.md): A transition where the new view slides up from the bottom of the screen.
- [crossDissolveTransition](../uiviewcontrollertransition/crossdissolvetransition.md): A transition where the current view fades out while the new view fades in at the same time.
- [flipHorizontalTransition](../uiviewcontrollertransition/fliphorizontaltransition.md): A transition where the current view flips horizontally to reveal the new view.
- [partialCurlTransition](../uiviewcontrollertransition/partialcurltransition.md): A transition where one corner of the current view curls up, revealing the new view underneath.

### Type Methods

- [zoomWithOptions:sourceBarButtonItemProvider:](../uiviewcontrollertransition/zoomwithoptions_sourcebarbuttonitemprovider_.md): Zoom from the `UIBarButtonItem` provided by the `sourceBarButtonItemProvider` to the presented or pushed view controller’s view.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Working with transitions

- [preferredTransition](preferredtransition.md): An object that defines the transition animation when switching to the view controller.
