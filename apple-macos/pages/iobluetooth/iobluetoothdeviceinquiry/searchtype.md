> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquiry/searchtype](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/searchtype)

# searchType (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Set the devices that are found.

## Declaration

```swift
var searchType: IOBluetoothDeviceSearchTypes { get set }
```

## Parameters

- `searchType`: Bluetooth versions the search will discover.

<a id="Discussion"></a>

## Discussion

A default of kIOBluetoothDeviceSearchClassic is used, unless a different value is specified using this method.

# searchType (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Set the devices that are found.

## Declaration

```objectivec
@property (assign) IOBluetoothDeviceSearchTypes searchType;
```

## Parameters

- `searchType`: Bluetooth versions the search will discover.

<a id="Discussion"></a>

## Discussion

A default of kIOBluetoothDeviceSearchClassic is used, unless a different value is specified using this method.
