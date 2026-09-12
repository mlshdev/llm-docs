> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheraldidupdatename(_:)](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheraldidupdatename(_:))

# peripheralDidUpdateName(\_:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a peripheral’s name changed.

## Declaration

```swift
optional func peripheralDidUpdateName(_ peripheral: CBPeripheral)
```

## Parameters

- `peripheral`: The peripheral providing this information.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method whenever the peripheral’s Generic Access Profile (GAP) device name changes. Since a peripheral device can change its GAP device name, you can implement this method if your app needs to display the current name of the peripheral device.

## See Also

### Monitoring Changes to a Peripheral’s Name or Services

- [peripheral(\_:didModifyServices:)](peripheral%28__didmodifyservices_%29.md): Tells the delegate that a peripheral’s services changed.

# peripheralDidUpdateName: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a peripheral’s name changed.

## Declaration

```objectivec
- (void) peripheralDidUpdateName:(CBPeripheral *) peripheral;
```

## Parameters

- `peripheral`: The peripheral providing this information.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method whenever the peripheral’s Generic Access Profile (GAP) device name changes. Since a peripheral device can change its GAP device name, you can implement this method if your app needs to display the current name of the peripheral device.

## See Also

### Monitoring Changes to a Peripheral’s Name or Services

- [peripheral:didModifyServices:](peripheral%28__didmodifyservices_%29.md): Tells the delegate that a peripheral’s services changed.
