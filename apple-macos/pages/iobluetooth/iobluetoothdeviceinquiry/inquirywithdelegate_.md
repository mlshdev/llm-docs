> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquiry/inquirywithdelegate:](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/inquirywithdelegate:)

# inquiryWithDelegate:

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Class method to create an inquiry object.

## Declaration

```objectivec
+ (instancetype) inquiryWithDelegate:(id) delegate;
```

## Parameters

- `delegate`: A delegate object that wishes to receive messages from the inquiry object. Delegate methods are listed below, under IOBluetoothDeviceInquiryDelegate.

<a id="return-value"></a>

## Return Value

A pointer to the created IOBluetoothDeviceInquiry object.

<a id="Discussion"></a>

## Discussion

The inquiry is NOT automatically started. You musts call -start on it to start the search for in-range devices.
