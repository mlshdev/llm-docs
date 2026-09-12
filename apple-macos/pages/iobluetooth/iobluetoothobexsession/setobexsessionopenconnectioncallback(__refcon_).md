> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothobexsession/setobexsessionopenconnectioncallback(_:refcon:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/setobexsessionopenconnectioncallback(_:refcon:))

# setOBEXSessionOpenConnectionCallback(\_:refCon:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

For C API support. Allows you to set the callback to be invoked when the OBEX connection is actually opened.

## Declaration

```swift
func setOBEXSessionOpenConnectionCallback(_ inCallback: IOBluetoothOBEXSessionOpenConnectionCallback!, refCon inUserRefCon: UnsafeMutableRawPointer!)
```

## Parameters

- `inCallback`: Function to call on the target.
- `inUserRefCon`: User’s reference constant, will be returned on the callback.

# setOBEXSessionOpenConnectionCallback:refCon: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

For C API support. Allows you to set the callback to be invoked when the OBEX connection is actually opened.

## Declaration

```objectivec
- (void) setOBEXSessionOpenConnectionCallback:(IOBluetoothOBEXSessionOpenConnectionCallback) inCallback refCon:(void *) inUserRefCon;
```

## Parameters

- `inCallback`: Function to call on the target.
- `inUserRefCon`: User’s reference constant, will be returned on the callback.
