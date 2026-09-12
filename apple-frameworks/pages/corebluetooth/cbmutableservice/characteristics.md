> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmutableservice/characteristics](https://developer.apple.com/documentation/corebluetooth/cbmutableservice/characteristics)

# characteristics (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of characteristics of a service.

## Declaration

```swift
var characteristics: [CBCharacteristic]? { get set }
```

<a id="Discussion"></a>

## Discussion

An array containing [CBCharacteristic](../cbcharacteristic.md) objects that represent a service’s characteristics. Characteristics provide further details about a peripheral’s service. For example, a heart rate service may contain one characteristic that describes the intended body location of the device’s heart rate sensor, while another characteristic transmits heart rate measurement data.

## See Also

### Managing a Mutable Service

- [includedServices](includedservices.md): A list of included services.

# characteristics (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of characteristics of a service.

## Declaration

```objectivec
@property (retain, readwrite, nullable) NSArray<CBCharacteristic *> * characteristics;
```

<a id="Discussion"></a>

## Discussion

An array containing [CBCharacteristic](../cbcharacteristic.md) objects that represent a service’s characteristics. Characteristics provide further details about a peripheral’s service. For example, a heart rate service may contain one characteristic that describes the intended body location of the device’s heart rate sensor, while another characteristic transmits heart rate measurement data.

## See Also

### Managing a Mutable Service

- [includedServices](includedservices.md): A list of included services.
