> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklookaroundviewcontroller/delegate](https://developer.apple.com/documentation/mapkit/mklookaroundviewcontroller/delegate)

# delegate (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object you provide to receive events related to the user’s interaction with the LookAround view controller.

## Declaration

```swift
@IBOutlet weak var delegate: (any MKLookAroundViewControllerDelegate)? { get set }
```

## See Also

### Interacting with the controller

- [MKLookAroundViewControllerDelegate](../mklookaroundviewcontrollerdelegate.md): Methods you implement to respond to changes in the LookAround view controller.

# delegate (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object you provide to receive events related to the user’s interaction with the LookAround view controller.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<MKLookAroundViewControllerDelegate> delegate;
```

## See Also

### Interacting with the controller

- [MKLookAroundViewControllerDelegate](../mklookaroundviewcontrollerdelegate.md): Methods you implement to respond to changes in the LookAround view controller.
