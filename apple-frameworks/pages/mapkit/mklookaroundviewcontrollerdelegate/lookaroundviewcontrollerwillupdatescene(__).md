> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerwillupdatescene(_:)

# lookAroundViewControllerWillUpdateScene(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Tells the delegate that the scene is about to update.

## Declaration

```swift
optional func lookAroundViewControllerWillUpdateScene(_ viewController: MKLookAroundViewController)
```

## Parameters

- `viewController`: The [MKLookAroundViewController](../mklookaroundviewcontroller.md).

## See Also

### Responding to scene changes

- [lookAroundViewControllerDidUpdateScene(\_:)](lookaroundviewcontrollerdidupdatescene%28__%29.md): Tells the delegate that the scene updated.

# lookAroundViewControllerWillUpdateScene: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Tells the delegate that the scene is about to update.

## Declaration

```objectivec
- (void) lookAroundViewControllerWillUpdateScene:(MKLookAroundViewController *) viewController;
```

## Parameters

- `viewController`: The [MKLookAroundViewController](../mklookaroundviewcontroller.md).

## See Also

### Responding to scene changes

- [lookAroundViewControllerDidUpdateScene:](lookaroundviewcontrollerdidupdatescene%28__%29.md): Tells the delegate that the scene updated.
