> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfree/disconnect()](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/disconnect())

# disconnect() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Disconnect from the device

## Declaration

```swift
func disconnect()
```

<a id="Discussion"></a>

## Discussion

Disconnects from the device, closes the SCO and service level connection if they are connected. Delegate methods will be called once the disconnection is complete.

# disconnect (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Disconnect from the device

## Declaration

```objectivec
- (void) disconnect;
```

<a id="Discussion"></a>

## Discussion

Disconnects from the device, closes the SCO and service level connection if they are connected. Delegate methods will be called once the disconnection is complete.
