> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbattrequest/central](https://developer.apple.com/documentation/corebluetooth/cbattrequest/central)

# central (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The remote central device that originated the request.

## Declaration

```swift
var central: CBCentral { get }
```

<a id="Overview"></a>

## Overview

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

## See Also

### Requesting to Read and Write Characteristic Values

- [characteristic](characteristic.md): The characteristic to read or write the value of.
- [value](value.md): The data that the central reads from or writes to the peripheral.
- [offset](offset.md): The zero-based index of the first byte for the read or write request.

# central (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The remote central device that originated the request.

## Declaration

```objectivec
@property (nonatomic, readonly) CBCentral * central;
```

<a id="Overview"></a>

## Overview

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

## See Also

### Requesting to Read and Write Characteristic Values

- [characteristic](characteristic.md): The characteristic to read or write the value of.
- [value](value.md): The data that the central reads from or writes to the peripheral.
- [offset](offset.md): The zero-based index of the first byte for the read or write request.
