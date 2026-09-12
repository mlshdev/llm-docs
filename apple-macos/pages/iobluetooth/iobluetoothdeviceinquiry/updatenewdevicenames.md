> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquiry/updatenewdevicenames](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/updatenewdevicenames)

# updateNewDeviceNames (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Sets whether or not the inquiry object will retrieve the names of devices found during the search.

## Declaration

```swift
var updateNewDeviceNames: Bool { get set }
```

## Parameters

- `inValue`: Pass TRUE if names are to be updated, otherwise pass FALSE.

<a id="Discussion"></a>

## Discussion

The default value for the inquiry object is TRUE, unless this method is used to change it.

# updateNewDeviceNames (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Sets whether or not the inquiry object will retrieve the names of devices found during the search.

## Declaration

```objectivec
@property (assign) BOOL updateNewDeviceNames;
```

## Parameters

- `inValue`: Pass TRUE if names are to be updated, otherwise pass FALSE.

<a id="Discussion"></a>

## Discussion

The default value for the inquiry object is TRUE, unless this method is used to change it.
