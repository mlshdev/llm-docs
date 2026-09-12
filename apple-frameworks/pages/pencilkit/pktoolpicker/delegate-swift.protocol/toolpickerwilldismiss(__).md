> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpicker/delegate-swift.protocol/toolpickerwilldismiss(_:)](https://developer.apple.com/documentation/pencilkit/pktoolpicker/delegate-swift.protocol/toolpickerwilldismiss(_:))

# toolPickerWillDismiss(\_:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

This is called when the user dismisses the tool picker using a built-in control. This is **not** called when the tool picker hides from a responder change or other programatic request. By default, using the dismissal control on the tool picker causes the tool picker to resign the first responder. The delegate may override that default behavior, taking responsibility for the dismissal of the picker, by returning true from this method.

## Declaration

```swift
optional func toolPickerWillDismiss(_ toolPicker: PKToolPicker) -> Bool
```

# toolPickerWillDismiss: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

This is called when the user dismisses the tool picker using a built-in control. This is **not** called when the tool picker hides from a responder change or other programatic request. By default, using the dismissal control on the tool picker causes the tool picker to resign the first responder. The delegate may override that default behavior, taking responsibility for the dismissal of the picker, by returning true from this method.

## Declaration

```objectivec
- (BOOL) toolPickerWillDismiss:(PKToolPicker *) toolPicker;
```
