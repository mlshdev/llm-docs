> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkpeerpickercontroller/delegate](https://developer.apple.com/documentation/gamekit/gkpeerpickercontroller/delegate)

# delegate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0)

The delegate of the peer picker controller.

> No longer supported

## Declaration

```swift
weak var delegate: (any GKPeerPickerControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [GKPeerPickerControllerDelegate](../gkpeerpickercontrollerdelegate.md) formal protocol.

# delegate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The delegate of the peer picker controller.

> No longer supported

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<GKPeerPickerControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [GKPeerPickerControllerDelegate](../gkpeerpickercontrollerdelegate.md) formal protocol.
