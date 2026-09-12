> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanager/delegate](https://developer.apple.com/documentation/corebluetooth/cbcentralmanager/delegate)

# delegate (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate object that you want to receive central manager events.

## Declaration

```swift
weak var delegate: (any CBCentralManagerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

For information about how to implement your central manager delegate, see [CBCentralManagerDelegate](../cbcentralmanagerdelegate.md).

# delegate (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate object that you want to receive central manager events.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CBCentralManagerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

For information about how to implement your central manager delegate, see [CBCentralManagerDelegate](../cbcentralmanagerdelegate.md).
