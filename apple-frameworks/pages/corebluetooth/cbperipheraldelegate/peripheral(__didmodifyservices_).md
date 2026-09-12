> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didmodifyservices:)](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didmodifyservices:))

# peripheral(\_:didModifyServices:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a peripheral’s services changed.

## Declaration

```swift
optional func peripheral(_ peripheral: CBPeripheral, didModifyServices invalidatedServices: [CBService])
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `invalidatedServices`: A list of services invalidated by this change.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method whenever one or more services of a peripheral change. A peripheral’s services have changed if:

- The peripheral removes a service from its database.
- The peripheral adds a new service to its database.
- The peripheral adds back a previously-removed service, but at a different location in the database.

The `invalidatedServices` parameter includes any changed services that you previously discovered; you can no longer use these services. You can use the [discoverServices(\_:)](../cbperipheral/discoverservices%28__%29.md) method to discover any new services that the peripheral added to its database. Use this same method to find out whether any of the invalidated services that you were using (and want to continue using) now have a different location in the peripheral’s database.

## See Also

### Monitoring Changes to a Peripheral’s Name or Services

- [peripheralDidUpdateName(\_:)](peripheraldidupdatename%28__%29.md): Tells the delegate that a peripheral’s name changed.

# peripheral:didModifyServices: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a peripheral’s services changed.

## Declaration

```objectivec
- (void) peripheral:(CBPeripheral *) peripheral didModifyServices:(NSArray<CBService *> *) invalidatedServices;
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `invalidatedServices`: A list of services invalidated by this change.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method whenever one or more services of a peripheral change. A peripheral’s services have changed if:

- The peripheral removes a service from its database.
- The peripheral adds a new service to its database.
- The peripheral adds back a previously-removed service, but at a different location in the database.

The `invalidatedServices` parameter includes any changed services that you previously discovered; you can no longer use these services. You can use the [discoverServices:](../cbperipheral/discoverservices%28__%29.md) method to discover any new services that the peripheral added to its database. Use this same method to find out whether any of the invalidated services that you were using (and want to continue using) now have a different location in the peripheral’s database.

## See Also

### Monitoring Changes to a Peripheral’s Name or Services

- [peripheralDidUpdateName:](peripheraldidupdatename%28__%29.md): Tells the delegate that a peripheral’s name changed.
