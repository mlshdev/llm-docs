> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothservicebrowsercontroller/init(_:)](https://developer.apple.com/documentation/iobluetoothui/iobluetoothservicebrowsercontroller/init(_:))

# init(\_:) (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Initializer  
**Availability:** macOS 10.2+

Allocator work Bluetooth Service Browser window controller.

## Declaration

```swift
init!(_ inOptions: IOBluetoothServiceBrowserControllerOptions)
```

## Parameters

- `inOptions`: Bit field for options to set in the newly allocated controller. Currently no options are available.

<a id="return-value"></a>

## Return Value

A new instance of the IOBluetoothServiceBrowserController Controller, nil if unsuccessful.

# serviceBrowserController: (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Type Method  
**Availability:** macOS 10.2+

Allocator work Bluetooth Service Browser window controller.

## Declaration

```objectivec
+ (IOBluetoothServiceBrowserController *) serviceBrowserController:(IOBluetoothServiceBrowserControllerOptions) inOptions;
```

## Parameters

- `inOptions`: Bit field for options to set in the newly allocated controller. Currently no options are available.

<a id="return-value"></a>

## Return Value

A new instance of the IOBluetoothServiceBrowserController Controller, nil if unsuccessful.
