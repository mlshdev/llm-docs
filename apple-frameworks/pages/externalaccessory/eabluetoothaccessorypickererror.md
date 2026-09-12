> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eabluetoothaccessorypickererror](https://developer.apple.com/documentation/externalaccessory/eabluetoothaccessorypickererror)

# EABluetoothAccessoryPickerError

**Framework:** External Accessory  
**Kind:** Structure  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Error codes returned by the Bluetooth accessory picker.

## Declaration

```swift
struct EABluetoothAccessoryPickerError
```

## Topics

### Error Codes

- [alreadyConnected](eabluetoothaccessorypickererror/alreadyconnected.md)
- [resultCancelled](eabluetoothaccessorypickererror/resultcancelled.md)
- [resultFailed](eabluetoothaccessorypickererror/resultfailed.md)
- [resultNotFound](eabluetoothaccessorypickererror/resultnotfound.md)

### Type Properties

- [errorDomain](eabluetoothaccessorypickererror/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presenting the Bluetooth Picker

- [showBluetoothAccessoryPicker(withNameFilter:completion:)](eaaccessorymanager/showbluetoothaccessorypicker%28withnamefilter_completion_%29.md): Displays an alert that allows the user to pair the device with a Bluetooth accessory.
- [EABluetoothAccessoryPickerCompletion](eabluetoothaccessorypickercompletion.md): The completion block for the Bluetooth picker.
- [EABluetoothAccessoryPickerError.Code](eabluetoothaccessorypickererror/code.md): The error codes that may be passed in an error object for the Bluetooth picker completion block.
- [EABluetoothAccessoryPickerErrorDomain](eabluetoothaccessorypickererrordomain.md): The domain for errors passed to a Bluetooth picker completion block.
