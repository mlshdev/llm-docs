> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklookaroundviewcontrollerdelegate](https://developer.apple.com/documentation/mapkit/mklookaroundviewcontrollerdelegate)

# MKLookAroundViewControllerDelegate (Swift)

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Methods you implement to respond to changes in the LookAround view controller.

## Declaration

```swift
protocol MKLookAroundViewControllerDelegate : NSObjectProtocol
```

## Topics

### Responding to scene changes

- [lookAroundViewControllerWillUpdateScene(\_:)](mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerwillupdatescene%28__%29.md): Tells the delegate that the scene is about to update.
- [lookAroundViewControllerDidUpdateScene(\_:)](mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerdidupdatescene%28__%29.md): Tells the delegate that the scene updated.

### Entering and exiting full-screen modes

- [lookAroundViewControllerWillPresentFullScreen(\_:)](mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerwillpresentfullscreen%28__%29.md): Tells the delegate when the view controller is about to enter full-screen mode.
- [lookAroundViewControllerDidPresentFullScreen(\_:)](mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerdidpresentfullscreen%28__%29.md): Tells the delegate when the view controller enters full-screen mode.
- [lookAroundViewControllerWillDismissFullScreen(\_:)](mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerwilldismissfullscreen%28__%29.md): Tells the delegate when the view controller is about to exit full-screen mode.
- [lookAroundViewControllerDidDismissFullScreen(\_:)](mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerdiddismissfullscreen%28__%29.md): Tells the delegate when the view controller exits full-screen mode.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Interacting with the controller

- [delegate](mklookaroundviewcontroller/delegate.md): An object you provide to receive events related to the user’s interaction with the LookAround view controller.

# MKLookAroundViewControllerDelegate (Objective-C)

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Methods you implement to respond to changes in the LookAround view controller.

## Declaration

```objectivec
@protocol MKLookAroundViewControllerDelegate <NSObject>
```

## Topics

### Responding to scene changes

- [lookAroundViewControllerWillUpdateScene:](mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerwillupdatescene%28__%29.md): Tells the delegate that the scene is about to update.
- [lookAroundViewControllerDidUpdateScene:](mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerdidupdatescene%28__%29.md): Tells the delegate that the scene updated.

### Entering and exiting full-screen modes

- [lookAroundViewControllerWillPresentFullScreen:](mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerwillpresentfullscreen%28__%29.md): Tells the delegate when the view controller is about to enter full-screen mode.
- [lookAroundViewControllerDidPresentFullScreen:](mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerdidpresentfullscreen%28__%29.md): Tells the delegate when the view controller enters full-screen mode.
- [lookAroundViewControllerWillDismissFullScreen:](mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerwilldismissfullscreen%28__%29.md): Tells the delegate when the view controller is about to exit full-screen mode.
- [lookAroundViewControllerDidDismissFullScreen:](mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerdiddismissfullscreen%28__%29.md): Tells the delegate when the view controller exits full-screen mode.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Interacting with the controller

- [delegate](mklookaroundviewcontroller/delegate.md): An object you provide to receive events related to the user’s interaction with the LookAround view controller.
