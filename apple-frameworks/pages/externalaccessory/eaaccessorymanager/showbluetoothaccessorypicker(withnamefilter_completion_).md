> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eaaccessorymanager/showbluetoothaccessorypicker(withnamefilter:completion:)](https://developer.apple.com/documentation/externalaccessory/eaaccessorymanager/showbluetoothaccessorypicker(withnamefilter:completion:))

# showBluetoothAccessoryPicker(withNameFilter:completion:) (Swift)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+

Displays an alert that allows the user to pair the device with a Bluetooth accessory.

## Declaration

```swift
func showBluetoothAccessoryPicker(withNameFilter predicate: NSPredicate?, completion: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func showBluetoothAccessoryPicker(withNameFilter predicate: NSPredicate?) async throws
```

## Parameters

- `predicate`: The predicate is evaluated using the name of the Bluetooth accessory. The picker displays only devices with names that match the predicate. If you specify `nil`, this method displays all discovered accessories.
- `completion`: A completion block to execute when the picker is dismissed. Use this block to track any errors that might occur during the pairing process.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func showBluetoothAccessoryPicker(withNameFilter predicate: NSPredicate?) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

On iOS devices, this method synchronously displays an alert containing the list of Bluetooth accessories that have been discovered by the current device and that match the specified filter (if any). The user can select an accessory from this list and pair the device to it. Pairing an accessory updates the accessory manager’s list of connected accessories and generates a corresponding connection notification. On Apple silicon, this method displays an alert to let the user know that the Bluetooth accessory picker is unavailable.

> **Note**

>  The picker displays only Bluetooth devices that include an iAP over Bluetooth unique ID in their extended inquiry response.

## See Also

### Presenting the Bluetooth Picker

- [EABluetoothAccessoryPickerCompletion](../eabluetoothaccessorypickercompletion.md): The completion block for the Bluetooth picker.
- [EABluetoothAccessoryPickerError](../eabluetoothaccessorypickererror.md): Error codes returned by the Bluetooth accessory picker.
- [EABluetoothAccessoryPickerError.Code](../eabluetoothaccessorypickererror/code.md): The error codes that may be passed in an error object for the Bluetooth picker completion block.
- [EABluetoothAccessoryPickerErrorDomain](../eabluetoothaccessorypickererrordomain.md): The domain for errors passed to a Bluetooth picker completion block.

# showBluetoothAccessoryPickerWithNameFilter:completion: (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+

Displays an alert that allows the user to pair the device with a Bluetooth accessory.

## Declaration

```objectivec
- (void) showBluetoothAccessoryPickerWithNameFilter:(NSPredicate *) predicate completion:(EABluetoothAccessoryPickerCompletion) completion;
```

## Parameters

- `predicate`: The predicate is evaluated using the name of the Bluetooth accessory. The picker displays only devices with names that match the predicate. If you specify `nil`, this method displays all discovered accessories.
- `completion`: A completion block to execute when the picker is dismissed. Use this block to track any errors that might occur during the pairing process.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func showBluetoothAccessoryPicker(withNameFilter predicate: NSPredicate?) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

On iOS devices, this method synchronously displays an alert containing the list of Bluetooth accessories that have been discovered by the current device and that match the specified filter (if any). The user can select an accessory from this list and pair the device to it. Pairing an accessory updates the accessory manager’s list of connected accessories and generates a corresponding connection notification. On Apple silicon, this method displays an alert to let the user know that the Bluetooth accessory picker is unavailable.

> **Note**

>  The picker displays only Bluetooth devices that include an iAP over Bluetooth unique ID in their extended inquiry response.

## See Also

### Presenting the Bluetooth Picker

- [EABluetoothAccessoryPickerCompletion](../eabluetoothaccessorypickercompletion.md): The completion block for the Bluetooth picker.
- [EABluetoothAccessoryPickerErrorCode](../eabluetoothaccessorypickererror/code.md): The error codes that may be passed in an error object for the Bluetooth picker completion block.
- [EABluetoothAccessoryPickerErrorDomain](../eabluetoothaccessorypickererrordomain.md): The domain for errors passed to a Bluetooth picker completion block.
