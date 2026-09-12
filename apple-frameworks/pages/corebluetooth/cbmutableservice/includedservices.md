> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmutableservice/includedservices](https://developer.apple.com/documentation/corebluetooth/cbmutableservice/includedservices)

# includedServices (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of included services.

## Declaration

```swift
var includedServices: [CBService]? { get set }
```

<a id="Discussion"></a>

## Discussion

A service of a peripheral may contain a reference to other services that are available on the peripheral. These other services are the included services of the service.

## See Also

### Managing a Mutable Service

- [characteristics](characteristics.md): A list of characteristics of a service.

# includedServices (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of included services.

## Declaration

```objectivec
@property (retain, readwrite, nullable) NSArray<CBService *> * includedServices;
```

<a id="Discussion"></a>

## Discussion

A service of a peripheral may contain a reference to other services that are available on the peripheral. These other services are the included services of the service.

## See Also

### Managing a Mutable Service

- [characteristics](characteristics.md): A list of characteristics of a service.
