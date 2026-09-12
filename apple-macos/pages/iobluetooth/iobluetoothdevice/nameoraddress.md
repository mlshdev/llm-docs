> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/nameoraddress](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/nameoraddress)

# nameOrAddress (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Get the human readable name of the remote device. If the name is not present, it will return a string containing the device’s address.

## Declaration

```swift
var nameOrAddress: String! { get }
```

<a id="Discussion"></a>

## Discussion

If a remote name request has been successfully completed, the device name will be returned. If not, a string containg the device address in the format of “XX-XX-XX-XX-XX-XX” will be returned.

# nameOrAddress (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Get the human readable name of the remote device. If the name is not present, it will return a string containing the device’s address.

## Declaration

```objectivec
@property (readonly) NSString * nameOrAddress;
```

<a id="Discussion"></a>

## Discussion

If a remote name request has been successfully completed, the device name will be returned. If not, a string containg the device address in the format of “XX-XX-XX-XX-XX-XX” will be returned.

## See Also

### Related Documentation

- [getNameOrAddress](getnameoraddress.md): Deprecated. Get the human readable name of the remote device. If the name is not present, it will return a string containing the device’s address.
