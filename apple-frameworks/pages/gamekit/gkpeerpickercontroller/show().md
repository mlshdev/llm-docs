> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkpeerpickercontroller/show()](https://developer.apple.com/documentation/gamekit/gkpeerpickercontroller/show())

# show() (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0)

Displays the peer picker dialog to the user.

> Use MCBrowserViewController from the MultipeerConnectivity framework.

## Declaration

```swift
func show()
```

<a id="Discussion"></a>

## Discussion

On iOS 3.1 or later, the peer picker is retained when it is shown, and autoreleased when it is dismissed.

## See Also

### Displaying the Picker Dialog

- [dismiss()](dismiss%28%29.md): Deprecated. Hides the peer picker dialog.
- [isVisible](isvisible.md): Deprecated. A Boolean value that indicates whether the picker dialog is visible.

# show (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Displays the peer picker dialog to the user.

> Use MCBrowserViewController from the MultipeerConnectivity framework.

## Declaration

```objectivec
- (void) show;
```

<a id="Discussion"></a>

## Discussion

On iOS 3.1 or later, the peer picker is retained when it is shown, and autoreleased when it is dismissed.

## See Also

### Displaying the Picker Dialog

- [dismiss](dismiss%28%29.md): Deprecated. Hides the peer picker dialog.
- [visible](isvisible.md): Deprecated. A Boolean value that indicates whether the picker dialog is visible.
