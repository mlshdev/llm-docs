> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/transition/zoomsourceviewprovidercontext](https://developer.apple.com/documentation/uikit/uiviewcontroller/transition/zoomsourceviewprovidercontext)

# UIViewController.Transition.ZoomSourceViewProviderContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A context object that contains references to the view controllers from a zoom transition.

## Declaration

```swift
class ZoomSourceViewProviderContext
```

## Topics

### Accessing the view controllers

- [sourceViewController](zoomsourceviewprovidercontext/sourceviewcontroller.md): The view controller that presents the zoomed view.
- [zoomedViewController](zoomsourceviewprovidercontext/zoomedviewcontroller.md): The view controller for the presented view.

## Relationships

### Inherits From

- [NSObject](../../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../../objectivec/nsobjectprotocol.md)

## See Also

### Creating zoom transitions

- [zoom(options:sourceViewProvider:)](zoom%28options_sourceviewprovider_%29.md): Creates a zoom transition from the view that the source provider specifies.
- [UIViewController.Transition.ZoomOptions](zoomoptions.md): Options for a zoom transition.

# UIZoomTransitionSourceViewProviderContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A context object that contains references to the view controllers from a zoom transition.

## Declaration

```objectivec
@interface UIZoomTransitionSourceViewProviderContext : NSObject
```

## Topics

### Accessing the view controllers

- [sourceViewController](zoomsourceviewprovidercontext/sourceviewcontroller.md): The view controller that presents the zoomed view.
- [zoomedViewController](zoomsourceviewprovidercontext/zoomedviewcontroller.md): The view controller for the presented view.

## Relationships

### Inherits From

- [NSObject](../../../objectivec/nsobject-swift.class.md)

## See Also

### Creating zoom transitions

- [zoomWithOptions:sourceViewProvider:](../../uiviewcontrollertransition/zoomwithoptions_sourceviewprovider_.md): Creates a zoom transition from the view specified by the source provider.
- [UIZoomTransitionOptions](zoomoptions.md): Options for a zoom transition.
