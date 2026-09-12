> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcontinuitydevicepickerviewcontrollerdelegate/continuitydevicepickerwillbeginpresenting(_:)](https://developer.apple.com/documentation/avkit/avcontinuitydevicepickerviewcontrollerdelegate/continuitydevicepickerwillbeginpresenting(_:))

# continuityDevicePickerWillBeginPresenting(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 17.0+

Informs the delegate that a continuity device picker is about to present its UI so that a person can select and connect a continuity device.

## Declaration

```swift
optional func continuityDevicePickerWillBeginPresenting(_ pickerViewController: AVContinuityDevicePickerViewController)
```

## Parameters

- `pickerViewController`: The continuity device picker that’s informing the delegate.

## See Also

### Responding to continuity device events

- [continuityDevicePickerDidCancel(\_:)](continuitydevicepickerdidcancel%28__%29.md): Informs the delegate when a person declines to select a continuity device by dismissing an app’s continuity device picker.
- [continuityDevicePicker(\_:didConnect:)](continuitydevicepicker%28__didconnect_%29.md): Informs the delegate when a person selects and connects a continuity device to the system with a continuity device picker.
- [continuityDevicePickerDidEndPresenting(\_:)](continuitydevicepickerdidendpresenting%28__%29.md): Informs the delegate that a continuity device picker is no longer presenting its UI to a person.

# continuityDevicePickerWillBeginPresenting: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Informs the delegate that a continuity device picker is about to present its UI so that a person can select and connect a continuity device.

## Declaration

```objectivec
- (void) continuityDevicePickerWillBeginPresenting:(AVContinuityDevicePickerViewController *) pickerViewController;
```

## Parameters

- `pickerViewController`: The continuity device picker that’s informing the delegate.

## See Also

### Responding to continuity device events

- [continuityDevicePickerDidCancel:](continuitydevicepickerdidcancel%28__%29.md): Informs the delegate when a person declines to select a continuity device by dismissing an app’s continuity device picker.
- [continuityDevicePicker:didConnectDevice:](continuitydevicepicker%28__didconnect_%29.md): Informs the delegate when a person selects and connects a continuity device to the system with a continuity device picker.
- [continuityDevicePickerDidEndPresenting:](continuitydevicepickerdidendpresenting%28__%29.md): Informs the delegate that a continuity device picker is no longer presenting its UI to a person.
