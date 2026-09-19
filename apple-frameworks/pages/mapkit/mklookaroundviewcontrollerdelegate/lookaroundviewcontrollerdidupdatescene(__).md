> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mklookaroundviewcontrollerdelegate/lookaroundviewcontrollerdidupdatescene(_:)

# lookAroundViewControllerDidUpdateScene(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Tells the delegate that the scene updated.

## Declaration

```swift
optional func lookAroundViewControllerDidUpdateScene(_ viewController: MKLookAroundViewController)
```

## Parameters

- `viewController`: The [MKLookAroundViewController](../mklookaroundviewcontroller.md).

## See Also

### Responding to scene changes

- [lookAroundViewControllerWillUpdateScene(\_:)](lookaroundviewcontrollerwillupdatescene%28__%29.md): Tells the delegate that the scene is about to update.

# lookAroundViewControllerDidUpdateScene: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Tells the delegate that the scene updated.

## Declaration

```objectivec
- (void) lookAroundViewControllerDidUpdateScene:(MKLookAroundViewController *) viewController;
```

## Parameters

- `viewController`: The [MKLookAroundViewController](../mklookaroundviewcontroller.md).

## See Also

### Responding to scene changes

- [lookAroundViewControllerWillUpdateScene:](lookaroundviewcontrollerwillupdatescene%28__%29.md): Tells the delegate that the scene is about to update.
