> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothrfcommchannel/istransmissionpaused()](https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/istransmissionpaused())

# isTransmissionPaused() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns TRUE if flow control is off.

## Declaration

```swift
func isTransmissionPaused() -> Bool
```

<a id="return-value"></a>

## Return Value

TRUE if the action of sending data will block the current thread, FALSE otherwise.

<a id="Discussion"></a>

## Discussion

Returns true if the remote device flow control is stopping out transmission. This is useful because we do not buffer data, we stop the transmitting actor. With this method the transmitter can check if sending data is going to be successful or is going to block.

# isTransmissionPaused (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns TRUE if flow control is off.

## Declaration

```objectivec
- (BOOL) isTransmissionPaused;
```

<a id="return-value"></a>

## Return Value

TRUE if the action of sending data will block the current thread, FALSE otherwise.

<a id="Discussion"></a>

## Discussion

Returns true if the remote device flow control is stopping out transmission. This is useful because we do not buffer data, we stop the transmitting actor. With this method the transmitter can check if sending data is going to be successful or is going to block.
