> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevice/currentcalllist()](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/currentcalllist())

# currentCallList() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Requests that the Bluetooth audio gateway send the delegate a list of calls that are active, on hold, or being set up.

## Declaration

```swift
func currentCallList()
```

<a id="Discussion"></a>

## Discussion

The [handsFree(\_:currentCall:)](../iobluetoothhandsfreedevicedelegate/handsfree%28__currentcall_%29.md) function of the delegate is called once for each current call.

## See Also

### Requesting Status Information

- [subscriberNumber()](subscribernumber%28%29.md): Requests that the Bluetooth audio gateway send the subscriber number to the delegate.

# currentCallList (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Requests that the Bluetooth audio gateway send the delegate a list of calls that are active, on hold, or being set up.

## Declaration

```objectivec
- (void) currentCallList;
```

<a id="Discussion"></a>

## Discussion

The [handsFree:currentCall:](../iobluetoothhandsfreedevicedelegate/handsfree%28__currentcall_%29.md) function of the delegate is called once for each current call.

## See Also

### Requesting Status Information

- [subscriberNumber](subscribernumber%28%29.md): Requests that the Bluetooth audio gateway send the subscriber number to the delegate.
