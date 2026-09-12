> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquiry/founddevices()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/founddevices())

# foundDevices() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns found IOBluetoothDevice objects as an array.

## Declaration

```swift
func foundDevices() -> [Any]!
```

<a id="return-value"></a>

## Return Value

Returns an NSArray of IOBluetoothDevice objects.

<a id="Discussion"></a>

## Discussion

Will not return nil. If there are no devices found, returns an array with length of 0.

# foundDevices (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns found IOBluetoothDevice objects as an array.

## Declaration

```objectivec
- (NSArray *) foundDevices;
```

<a id="return-value"></a>

## Return Value

Returns an NSArray of IOBluetoothDevice objects.

<a id="Discussion"></a>

## Discussion

Will not return nil. If there are no devices found, returns an array with length of 0.
