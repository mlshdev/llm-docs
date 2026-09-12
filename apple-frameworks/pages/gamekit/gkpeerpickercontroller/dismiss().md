> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkpeerpickercontroller/dismiss()](https://developer.apple.com/documentation/gamekit/gkpeerpickercontroller/dismiss())

# dismiss() (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0)

Hides the peer picker dialog.

> Use MCBrowserViewController from the MultipeerConnectivity framework.

## Declaration

```swift
func dismiss()
```

<a id="Discussion"></a>

## Discussion

The controller’s delegate is responsible for dismissing the peer picker when it is no longer needed.

On iOS 3.1 or later, the peer picker is retained when it is shown, and autoreleased when it is dismissed.

## See Also

### Displaying the Picker Dialog

- [show()](show%28%29.md): Deprecated. Displays the peer picker dialog to the user.
- [isVisible](isvisible.md): Deprecated. A Boolean value that indicates whether the picker dialog is visible.

# dismiss (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Hides the peer picker dialog.

> Use MCBrowserViewController from the MultipeerConnectivity framework.

## Declaration

```objectivec
- (void) dismiss;
```

<a id="Discussion"></a>

## Discussion

The controller’s delegate is responsible for dismissing the peer picker when it is no longer needed.

On iOS 3.1 or later, the peer picker is retained when it is shown, and autoreleased when it is dismissed.

## See Also

### Displaying the Picker Dialog

- [show](show%28%29.md): Deprecated. Displays the peer picker dialog to the user.
- [visible](isvisible.md): Deprecated. A Boolean value that indicates whether the picker dialog is visible.
