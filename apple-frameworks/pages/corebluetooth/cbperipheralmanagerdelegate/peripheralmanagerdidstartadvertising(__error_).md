> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanagerdidstartadvertising(_:error:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanagerdidstartadvertising(_:error:))

# peripheralManagerDidStartAdvertising(\_:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate the peripheral manager started advertising the local peripheral device’s data.

## Declaration

```swift
optional func peripheralManagerDidStartAdvertising(_ peripheral: CBPeripheralManager, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral manager that is starting advertising.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth calls this method when your app calls the [startAdvertising(\_:)](../cbperipheralmanager/startadvertising%28__%29.md) method to advertise the local peripheral device’s data. If successful, the `error` parameter is `nil`. If a problem prevents advertising the data, the `error` parameter returns the cause of the failure.

# peripheralManagerDidStartAdvertising:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate the peripheral manager started advertising the local peripheral device’s data.

## Declaration

```objectivec
- (void) peripheralManagerDidStartAdvertising:(CBPeripheralManager *) peripheral error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral manager that is starting advertising.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth calls this method when your app calls the [startAdvertising:](../cbperipheralmanager/startadvertising%28__%29.md) method to advertise the local peripheral device’s data. If successful, the `error` parameter is `nil`. If a problem prevents advertising the data, the `error` parameter returns the cause of the failure.
