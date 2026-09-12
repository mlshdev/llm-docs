> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbservice/characteristics](https://developer.apple.com/documentation/corebluetooth/cbservice/characteristics)

# characteristics (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of characteristics discovered in this service.

## Declaration

```swift
var characteristics: [CBCharacteristic]? { get }
```

<a id="Discussion"></a>

## Discussion

This array contains [CBCharacteristic](../cbcharacteristic.md) objects that represent a service’s characteristics. Characteristics provide further details about a peripheral’s service. For example, a heart rate service may contain one characteristic that describes the intended body location of the device’s heart rate sensor, while another characteristic transmits heart rate measurement data.

## See Also

### Accessing Service Data

- [includedServices](includedservices.md): A list of included services discovered in this service.

# characteristics (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of characteristics discovered in this service.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSArray<CBCharacteristic *> * characteristics;
```

<a id="Discussion"></a>

## Discussion

This array contains [CBCharacteristic](../cbcharacteristic.md) objects that represent a service’s characteristics. Characteristics provide further details about a peripheral’s service. For example, a heart rate service may contain one characteristic that describes the intended body location of the device’s heart rate sensor, while another characteristic transmits heart rate measurement data.

## See Also

### Accessing Service Data

- [includedServices](includedservices.md): A list of included services discovered in this service.
