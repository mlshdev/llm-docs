> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevice/subscribernumber()](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/subscribernumber())

# subscriberNumber() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Requests that the Bluetooth audio gateway send the subscriber number to the delegate.

## Declaration

```swift
func subscriberNumber()
```

<a id="Discussion"></a>

## Discussion

The subscriber number is sent to the [handsFree(\_:subscriberNumber:)](../iobluetoothhandsfreedevicedelegate/handsfree%28__subscribernumber_%29.md) function of the delegate.

## See Also

### Requesting Status Information

- [currentCallList()](currentcalllist%28%29.md): Requests that the Bluetooth audio gateway send the delegate a list of calls that are active, on hold, or being set up.

# subscriberNumber (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Requests that the Bluetooth audio gateway send the subscriber number to the delegate.

## Declaration

```objectivec
- (void) subscriberNumber;
```

<a id="Discussion"></a>

## Discussion

The subscriber number is sent to the [handsFree:subscriberNumber:](../iobluetoothhandsfreedevicedelegate/handsfree%28__subscribernumber_%29.md) function of the delegate.

## See Also

### Requesting Status Information

- [currentCallList](currentcalllist%28%29.md): Requests that the Bluetooth audio gateway send the delegate a list of calls that are active, on hold, or being set up.
