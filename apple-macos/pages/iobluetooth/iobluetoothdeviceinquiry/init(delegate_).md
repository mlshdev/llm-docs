> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquiry/init(delegate:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/init(delegate:))

# init(delegate:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Initializes an alloc’d inquiry object, and sets the delegate object, as if -setDelegate: were called on it.

## Declaration

```swift
init!(delegate: Any!)
```

## Parameters

- `delegate`: A delegate object that wishes to receive messages from the inquiry object. Delegate methods are listed below, under IOBluetoothDeviceInquiryDelegate.

<a id="return-value"></a>

## Return Value

A pointer to the initialized IOBluetoothDeviceInquiry object.

# initWithDelegate: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Initializes an alloc’d inquiry object, and sets the delegate object, as if -setDelegate: were called on it.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id) delegate;
```

## Parameters

- `delegate`: A delegate object that wishes to receive messages from the inquiry object. Delegate methods are listed below, under IOBluetoothDeviceInquiryDelegate.

<a id="return-value"></a>

## Return Value

A pointer to the initialized IOBluetoothDeviceInquiry object.
