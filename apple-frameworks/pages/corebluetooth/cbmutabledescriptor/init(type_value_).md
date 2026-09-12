> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmutabledescriptor/init(type:value:)](https://developer.apple.com/documentation/corebluetooth/cbmutabledescriptor/init(type:value:))

# init(type:value:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+

Creates a mutable descriptor with a specified value.

## Declaration

```swift
init(type UUID: CBUUID, value: Any?)
```

## Parameters

- `UUID`: A 128-bit UUID that identifies the characteristic. You must use only one of the two currently supported descriptor types: [CBUUIDCharacteristicUserDescriptionString](../cbuuidcharacteristicuserdescriptionstring.md) or [CBUUIDCharacteristicFormatString](../cbuuidcharacteristicformatstring.md). For more details about these descriptor types, see [CBUUID](../cbuuid.md).
- `value`: The descriptor value to cache. You must provide a non-`nil` value. Once published, you can’t update the value dynamically.

<a id="return-value"></a>

## Return Value

A newly initialized mutable descriptor.

<a id="Discussion"></a>

## Discussion

The value type of `value` depends on the type of descriptor:

- The value type of [CBUUIDCharacteristicUserDescriptionString](../cbuuidcharacteristicuserdescriptionstring.md) is a string you use to provide a human-readable description of the characteristic’s value.
- The value type of a [CBUUIDCharacteristicFormatString](../cbuuidcharacteristicformatstring.md) is an [NSData](../../foundation/nsdata.md) object that you use to specify how to format the characteristic’s value for presentation purposes.

If you want to create a local characteristic format descriptor, the descriptor’s value must conform to the attribute value of the characteristic format descriptor as defined in the Bluetooth 4.0 specification, Volume 3, Part G, Section 3.3.3.5.

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

# initWithType:value: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+

Creates a mutable descriptor with a specified value.

## Declaration

```objectivec
- (instancetype) initWithType:(CBUUID *) UUID value:(id) value;
```

## Parameters

- `UUID`: A 128-bit UUID that identifies the characteristic. You must use only one of the two currently supported descriptor types: [CBUUIDCharacteristicUserDescriptionString](../cbuuidcharacteristicuserdescriptionstring.md) or [CBUUIDCharacteristicFormatString](../cbuuidcharacteristicformatstring.md). For more details about these descriptor types, see [CBUUID](../cbuuid.md).
- `value`: The descriptor value to cache. You must provide a non-`nil` value. Once published, you can’t update the value dynamically.

<a id="return-value"></a>

## Return Value

A newly initialized mutable descriptor.

<a id="Discussion"></a>

## Discussion

The value type of `value` depends on the type of descriptor:

- The value type of [CBUUIDCharacteristicUserDescriptionString](../cbuuidcharacteristicuserdescriptionstring.md) is a string you use to provide a human-readable description of the characteristic’s value.
- The value type of a [CBUUIDCharacteristicFormatString](../cbuuidcharacteristicformatstring.md) is an [NSData](../../foundation/nsdata.md) object that you use to specify how to format the characteristic’s value for presentation purposes.

If you want to create a local characteristic format descriptor, the descriptor’s value must conform to the attribute value of the characteristic format descriptor as defined in the Bluetooth 4.0 specification, Volume 3, Part G, Section 3.3.3.5.

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).
