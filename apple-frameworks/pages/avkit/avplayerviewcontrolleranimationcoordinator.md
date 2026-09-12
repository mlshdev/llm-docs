> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrolleranimationcoordinator](https://developer.apple.com/documentation/avkit/avplayerviewcontrolleranimationcoordinator)

# AVPlayerViewControllerAnimationCoordinator (Swift)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** tvOS 11.0+

A protocol that defines the methods to implement to synchronize animations with playback controls’ visibility animation.

## Declaration

```swift
protocol AVPlayerViewControllerAnimationCoordinator : NSObjectProtocol
```

## Topics

### Coordinating Animations

- [addCoordinatedAnimations(\_:completion:)](avplayerviewcontrolleranimationcoordinator/addcoordinatedanimations%28__completion_%29.md): Adds animations to perform alongside the playback controls’ visibility animation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to Transport Bar Changes

- [playerViewController(\_:willTransitionToVisibilityOfTransportBar:with:)](avplayerviewcontrollerdelegate/playerviewcontroller%28__willtransitiontovisibilityoftransportbar_with_%29.md): Tells the delegate when the transport bar’s visibility is about to change.

# AVPlayerViewControllerAnimationCoordinator (Objective-C)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** tvOS 11.0+

A protocol that defines the methods to implement to synchronize animations with playback controls’ visibility animation.

## Declaration

```objectivec
@protocol AVPlayerViewControllerAnimationCoordinator <NSObject>
```

## Topics

### Coordinating Animations

- [addCoordinatedAnimations:completion:](avplayerviewcontrolleranimationcoordinator/addcoordinatedanimations%28__completion_%29.md): Adds animations to perform alongside the playback controls’ visibility animation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to Transport Bar Changes

- [playerViewController:willTransitionToVisibilityOfTransportBar:withAnimationCoordinator:](avplayerviewcontrollerdelegate/playerviewcontroller%28__willtransitiontovisibilityoftransportbar_with_%29.md): Tells the delegate when the transport bar’s visibility is about to change.
