> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfree/issmsenabled](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/issmsenabled)

# isSMSEnabled (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Return YES if the device has SMS enabled.

## Declaration

```swift
var isSMSEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Returns YES if the device has SMS enabled (by responding to a CMGF command). NO if the device has not set an SMS mode or doesn’t support SMS.

# SMSEnabled (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Return YES if the device has SMS enabled.

## Declaration

```objectivec
@property (readonly, getter=isSMSEnabled) BOOL SMSEnabled;
```

<a id="Discussion"></a>

## Discussion

Returns YES if the device has SMS enabled (by responding to a CMGF command). NO if the device has not set an SMS mode or doesn’t support SMS.
