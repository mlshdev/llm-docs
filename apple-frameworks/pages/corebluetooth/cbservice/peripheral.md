> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbservice/peripheral](https://developer.apple.com/documentation/corebluetooth/cbservice/peripheral)

# peripheral (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The peripheral to which this service belongs.

## Declaration

```swift
weak var peripheral: CBPeripheral? { get }
```

## See Also

### Identifying a Service

- [isPrimary](isprimary.md): A Boolean value that indicates whether the type of service is primary or secondary.

# peripheral (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The peripheral to which this service belongs.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) CBPeripheral * peripheral;
```

## See Also

### Identifying a Service

- [isPrimary](isprimary.md): A Boolean value that indicates whether the type of service is primary or secondary.
