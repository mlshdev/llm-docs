> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/name](https://developer.apple.com/documentation/corebluetooth/cbperipheral/name)

# name (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the peripheral.

## Declaration

```swift
var name: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to retrieve a human-readable name of the peripheral. A peripheral may have two different name types: one that the device advertises and another that the device publishes in its database as its Bluetooth low energy Generic Access Profile (GAP) device name. If a peripheral has both types of names, this property returns its GAP device name.

## Topics

### Related Documentation

- [peripheralDidUpdateName(\_:)](../cbperipheraldelegate/peripheraldidupdatename%28__%29.md): Tells the delegate that a peripheral’s name changed.

## See Also

### Identifying a Peripheral

- [delegate](delegate.md): The delegate object specified to receive peripheral events.

# name (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the peripheral.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Use this property to retrieve a human-readable name of the peripheral. A peripheral may have two different name types: one that the device advertises and another that the device publishes in its database as its Bluetooth low energy Generic Access Profile (GAP) device name. If a peripheral has both types of names, this property returns its GAP device name.

## Topics

### Related Documentation

- [peripheralDidUpdateName:](../cbperipheraldelegate/peripheraldidupdatename%28__%29.md): Tells the delegate that a peripheral’s name changed.

## See Also

### Identifying a Peripheral

- [delegate](delegate.md): The delegate object specified to receive peripheral events.
