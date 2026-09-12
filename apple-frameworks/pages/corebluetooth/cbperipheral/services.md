> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/services](https://developer.apple.com/documentation/corebluetooth/cbperipheral/services)

# services (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of a peripheral’s discovered services.

## Declaration

```swift
var services: [CBService]? { get }
```

<a id="Discussion"></a>

## Discussion

Returns an array of services (represented by [CBService](../cbservice.md) objects) that successful call to the [discoverServices(\_:)](discoverservices%28__%29.md) method discovered. If you haven’t yet called the [discoverServices(\_:)](discoverservices%28__%29.md) method to discover the services of the peripheral, or if there was an error in doing so, the value of this property is `nil`.

## See Also

### Discovering Services

- [discoverServices(\_:)](discoverservices%28__%29.md): Discovers the specified services of the peripheral.
- [discoverIncludedServices(\_:for:)](discoverincludedservices%28__for_%29.md): Discovers the specified included services of a previously-discovered service.

# services (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of a peripheral’s discovered services.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSArray<CBService *> * services;
```

<a id="Discussion"></a>

## Discussion

Returns an array of services (represented by [CBService](../cbservice.md) objects) that successful call to the [discoverServices:](discoverservices%28__%29.md) method discovered. If you haven’t yet called the [discoverServices:](discoverservices%28__%29.md) method to discover the services of the peripheral, or if there was an error in doing so, the value of this property is `nil`.

## See Also

### Discovering Services

- [discoverServices:](discoverservices%28__%29.md): Discovers the specified services of the peripheral.
- [discoverIncludedServices:forService:](discoverincludedservices%28__for_%29.md): Discovers the specified included services of a previously-discovered service.
