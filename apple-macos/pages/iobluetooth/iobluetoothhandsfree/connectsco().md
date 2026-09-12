> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfree/connectsco()](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/connectsco())

# connectSCO() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Open a SCO connection with the device

## Declaration

```swift
func connectSCO()
```

<a id="Discussion"></a>

## Discussion

Opens a SCO connection with the device. The device must already have a service level connection or this will return immediately. Delegate methods will be called once the connection is complete of a failure occurs.

# connectSCO (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Open a SCO connection with the device

## Declaration

```objectivec
- (void) connectSCO;
```

<a id="Discussion"></a>

## Discussion

Opens a SCO connection with the device. The device must already have a service level connection or this will return immediately. Delegate methods will be called once the connection is complete of a failure occurs.
