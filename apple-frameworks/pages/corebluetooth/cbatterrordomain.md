> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbatterrordomain](https://developer.apple.com/documentation/corebluetooth/cbatterrordomain)

# CBATTErrorDomain (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The domain for Core Bluetooth ATT errors.

## Declaration

```swift
let CBATTErrorDomain: String
```

<a id="Discussion"></a>

## Discussion

This value identifies Core Bluetooth Attribute Protocol (ATT) errors when used as the [domain](../foundation/nserror/domain.md) of an [NSError](../foundation/nserror.md) instance.

## See Also

### Errors

- [CBError](cberror-swift.struct.md): An error that Core Bluetooth returns during Bluetooth transactions.
- [CBErrorDomain](cberrordomain.md): The domain for Core Bluetooth errors.
- [CBError.Code](cberror-swift.struct/code.md): The codes for errors that Core Bluetooth returns during Bluetooth transactions.
- [CBATTError](cbatterror-swift.struct.md): An error that Core Bluetooth returns while using Attribute Protocol (ATT).
- [CBATTError.Code](cbatterror-swift.struct/code.md): The possible errors returned by a GATT server (a remote peripheral) during Bluetooth low energy ATT transactions.
- [CBATTError](cbatterror-swift.struct.md): An error that Core Bluetooth returns while using Attribute Protocol (ATT).

# CBATTErrorDomain (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The domain for Core Bluetooth ATT errors.

## Declaration

```objectivec
extern NSString * const CBATTErrorDomain;
```

<a id="Discussion"></a>

## Discussion

This value identifies Core Bluetooth Attribute Protocol (ATT) errors when used as the [domain](../foundation/nserror/domain.md) of an [NSError](../foundation/nserror.md) instance.

## See Also

### Errors

- [CBErrorDomain](cberrordomain.md): The domain for Core Bluetooth errors.
- [CBError](cberror-swift.struct/code.md): The codes for errors that Core Bluetooth returns during Bluetooth transactions.
- [CBATTError](cbatterror-swift.struct/code.md): The possible errors returned by a GATT server (a remote peripheral) during Bluetooth low energy ATT transactions.
