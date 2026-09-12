> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbservice/includedservices](https://developer.apple.com/documentation/corebluetooth/cbservice/includedservices)

# includedServices (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of included services discovered in this service.

## Declaration

```swift
var includedServices: [CBService]? { get }
```

<a id="Discussion"></a>

## Discussion

This array contains [CBService](../cbservice.md) objects that represent the included services of a service. A service of a peripheral may contain a reference to other services that are available on the peripheral. These other services are the included services of the service. You discover included services using the [discoverIncludedServices(\_:for:)](../cbperipheral/discoverincludedservices%28__for_%29.md) method of the [CBPeripheral](../cbperipheral.md) class.

## See Also

### Accessing Service Data

- [characteristics](characteristics.md): A list of characteristics discovered in this service.

# includedServices (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of included services discovered in this service.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSArray<CBService *> * includedServices;
```

<a id="Discussion"></a>

## Discussion

This array contains [CBService](../cbservice.md) objects that represent the included services of a service. A service of a peripheral may contain a reference to other services that are available on the peripheral. These other services are the included services of the service. You discover included services using the [discoverIncludedServices:forService:](../cbperipheral/discoverincludedservices%28__for_%29.md) method of the [CBPeripheral](../cbperipheral.md) class.

## See Also

### Accessing Service Data

- [characteristics](characteristics.md): A list of characteristics discovered in this service.
