> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbpeer/identifier](https://developer.apple.com/documentation/corebluetooth/cbpeer/identifier)

# identifier (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The UUID associated with the peer.

## Declaration

```swift
var identifier: UUID { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property represents the unique identifier of the peer. The first time a local manager encounters a peer, the system assigns the peer a UUID, represented by a new [UUID](../../foundation/uuid.md) object. Peers use [UUID](../../foundation/uuid.md) instances to identify themselves, instead of by the [CBUUID](../cbuuid.md) objects that identify a peripheral’s services, characteristics, and descriptors.

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

# identifier (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The UUID associated with the peer.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUUID * identifier;
```

<a id="Discussion"></a>

## Discussion

The value of this property represents the unique identifier of the peer. The first time a local manager encounters a peer, the system assigns the peer a UUID, represented by a new [UUID](../../foundation/uuid.md) object. Peers use [UUID](../../foundation/uuid.md) instances to identify themselves, instead of by the [CBUUID](../cbuuid.md) objects that identify a peripheral’s services, characteristics, and descriptors.

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).
