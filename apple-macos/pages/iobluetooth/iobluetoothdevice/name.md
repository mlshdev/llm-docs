> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/name](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/name)

# name (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Get the human readable name of the remote device.

## Declaration

```swift
var name: String! { get }
```

<a id="Discussion"></a>

## Discussion

This only returns a value if a remote name request has been performed on the target device. If a successful remote name request has not been completed, nil is returned. To perform a remote name request, call -remoteNameRequest. If a remote name request has been successfully completed, the method -getLastNameUpdate will return the date/time of the last successful request.

# name (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Get the human readable name of the remote device.

## Declaration

```objectivec
@property (copy, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

This only returns a value if a remote name request has been performed on the target device. If a successful remote name request has not been completed, nil is returned. To perform a remote name request, call -remoteNameRequest. If a remote name request has been successfully completed, the method -getLastNameUpdate will return the date/time of the last successful request.

## See Also

### Related Documentation

- [getName](getname.md): Deprecated. Get the human readable name of the remote device.
