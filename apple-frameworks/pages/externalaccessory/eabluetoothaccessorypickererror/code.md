> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eabluetoothaccessorypickererror/code](https://developer.apple.com/documentation/externalaccessory/eabluetoothaccessorypickererror/code)

# EABluetoothAccessoryPickerError.Code (Swift)

**Framework:** External Accessory  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The error codes that may be passed in an error object for the Bluetooth picker completion block.

## Declaration

```swift
enum Code
```

## Topics

### Error Codes

- [EABluetoothAccessoryPickerError.Code.alreadyConnected](code/alreadyconnected.md): The specified accessory was already connected.
- [EABluetoothAccessoryPickerError.Code.resultNotFound](code/resultnotfound.md): The specified accessory could not be found, perhaps because it was turned off prior to connection.
- [EABluetoothAccessoryPickerError.Code.resultCancelled](code/resultcancelled.md): The user canceled the picker alert.
- [EABluetoothAccessoryPickerError.Code.resultFailed](code/resultfailed.md): Selecting an accessory failed for an unknown reason.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presenting the Bluetooth Picker

- [showBluetoothAccessoryPicker(withNameFilter:completion:)](../eaaccessorymanager/showbluetoothaccessorypicker%28withnamefilter_completion_%29.md): Displays an alert that allows the user to pair the device with a Bluetooth accessory.
- [EABluetoothAccessoryPickerCompletion](../eabluetoothaccessorypickercompletion.md): The completion block for the Bluetooth picker.
- [EABluetoothAccessoryPickerError](../eabluetoothaccessorypickererror.md): Error codes returned by the Bluetooth accessory picker.
- [EABluetoothAccessoryPickerErrorDomain](../eabluetoothaccessorypickererrordomain.md): The domain for errors passed to a Bluetooth picker completion block.

# EABluetoothAccessoryPickerErrorCode (Objective-C)

**Framework:** External Accessory  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The error codes that may be passed in an error object for the Bluetooth picker completion block.

## Declaration

```objectivec
enum EABluetoothAccessoryPickerErrorCode : NSInteger;
```

## Topics

### Error Codes

- [EABluetoothAccessoryPickerAlreadyConnected](code/alreadyconnected.md): The specified accessory was already connected.
- [EABluetoothAccessoryPickerResultNotFound](code/resultnotfound.md): The specified accessory could not be found, perhaps because it was turned off prior to connection.
- [EABluetoothAccessoryPickerResultCancelled](code/resultcancelled.md): The user canceled the picker alert.
- [EABluetoothAccessoryPickerResultFailed](code/resultfailed.md): Selecting an accessory failed for an unknown reason.

## See Also

### Presenting the Bluetooth Picker

- [showBluetoothAccessoryPickerWithNameFilter:completion:](../eaaccessorymanager/showbluetoothaccessorypicker%28withnamefilter_completion_%29.md): Displays an alert that allows the user to pair the device with a Bluetooth accessory.
- [EABluetoothAccessoryPickerCompletion](../eabluetoothaccessorypickercompletion.md): The completion block for the Bluetooth picker.
- [EABluetoothAccessoryPickerErrorDomain](../eabluetoothaccessorypickererrordomain.md): The domain for errors passed to a Bluetooth picker completion block.
