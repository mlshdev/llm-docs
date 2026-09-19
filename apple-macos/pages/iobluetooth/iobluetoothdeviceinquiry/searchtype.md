> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/searchtype

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
