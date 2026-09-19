> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/addressstring

# addressString (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Get a string representation of the Bluetooth device address for the target device. The format of the string is the same as returned by IOBluetoothNSStringFromDeviceAddress().

## Declaration

```swift
var addressString: String! { get }
```

<a id="Discussion"></a>

## Discussion

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

# addressString (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Get a string representation of the Bluetooth device address for the target device. The format of the string is the same as returned by IOBluetoothNSStringFromDeviceAddress().

## Declaration

```objectivec
@property (readonly) NSString * addressString;
```

<a id="Discussion"></a>

## Discussion

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

## See Also

### Related Documentation

- [getAddressString](getaddressstring.md): Deprecated. Get a string representation of the Bluetooth device address for the target device. The format of the string is the same as returned by IOBluetoothNSStringFromDeviceAddress().
