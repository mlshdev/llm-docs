> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerdiddismissfullscreen(_:)](https://developer.apple.com/documentation/mapkit/mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerdiddismissfullscreen(_:))

# lookAroundViewControllerDidDismissFullScreen(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Tells the delegate when the view controller exits full-screen mode.

## Declaration

```swift
optional func lookAroundViewControllerDidDismissFullScreen(_ viewController: MKLookAroundViewController)
```

## Parameters

- `viewController`: The [MKLookAroundViewController](../mklookaroundviewcontroller.md).

## See Also

### Entering and exiting full-screen modes

- [lookAroundViewControllerWillPresentFullScreen(\_:)](lookaroundviewcontrollerwillpresentfullscreen%28__%29.md): Tells the delegate when the view controller is about to enter full-screen mode.
- [lookAroundViewControllerDidPresentFullScreen(\_:)](lookaroundviewcontrollerdidpresentfullscreen%28__%29.md): Tells the delegate when the view controller enters full-screen mode.
- [lookAroundViewControllerWillDismissFullScreen(\_:)](lookaroundviewcontrollerwilldismissfullscreen%28__%29.md): Tells the delegate when the view controller is about to exit full-screen mode.

# lookAroundViewControllerDidDismissFullScreen: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Tells the delegate when the view controller exits full-screen mode.

## Declaration

```objectivec
- (void) lookAroundViewControllerDidDismissFullScreen:(MKLookAroundViewController *) viewController;
```

## Parameters

- `viewController`: The [MKLookAroundViewController](../mklookaroundviewcontroller.md).

## See Also

### Entering and exiting full-screen modes

- [lookAroundViewControllerWillPresentFullScreen:](lookaroundviewcontrollerwillpresentfullscreen%28__%29.md): Tells the delegate when the view controller is about to enter full-screen mode.
- [lookAroundViewControllerDidPresentFullScreen:](lookaroundviewcontrollerdidpresentfullscreen%28__%29.md): Tells the delegate when the view controller enters full-screen mode.
- [lookAroundViewControllerWillDismissFullScreen:](lookaroundviewcontrollerwilldismissfullscreen%28__%29.md): Tells the delegate when the view controller is about to exit full-screen mode.
