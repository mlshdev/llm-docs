> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/ancsauthorized](https://developer.apple.com/documentation/corebluetooth/cbperipheral/ancsauthorized)

# ancsAuthorized (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates if the remote device has authorization to receive data over ANCS protocol.

## Declaration

```swift
var ancsAuthorized: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this value is [false](https://developer.apple.com/documentation/swift/false), a user authorization sets this value to [true](https://developer.apple.com/documentation/swift/true), which results in a call to the delegate’s [centralManager(\_:didUpdateANCSAuthorizationFor:)](../cbcentralmanagerdelegate/centralmanager%28__didupdateancsauthorizationfor_%29.md) method.

# ancsAuthorized (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates if the remote device has authorization to receive data over ANCS protocol.

## Declaration

```objectivec
@property (readonly) BOOL ancsAuthorized;
```

<a id="Discussion"></a>

## Discussion

If this value is [false](https://developer.apple.com/documentation/swift/false), a user authorization sets this value to [true](https://developer.apple.com/documentation/swift/true), which results in a call to the delegate’s [centralManager:didUpdateANCSAuthorizationForPeripheral:](../cbcentralmanagerdelegate/centralmanager%28__didupdateancsauthorizationfor_%29.md) method.
