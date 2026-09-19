> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamekit/gkpeerpickercontroller/delegate

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
