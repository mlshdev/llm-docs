> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbuuid/init(nsuuid:)-2amob](https://developer.apple.com/documentation/corebluetooth/cbuuid/init(nsuuid:)-2amob)

# init(nsuuid:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a Core Bluetooth UUID object from a Foundation UUID object.

## Declaration

```swift
init(nsuuid theUUID: UUID)
```

## Parameters

- `theUUID`: A UUID represented by an [NSUUID](../../foundation/nsuuid.md) object.

<a id="return-value"></a>

## Return Value

A new [CBUUID](../cbuuid.md) object for the specified UUID.

## See Also

### Creating New CBUUID Objects

- [init(string:)](init%28string_%29.md): Creates a Core Bluetooth UUID object from a 16-, 32-, or 128-bit UUID string.
- [init(data:)](init%28data_%29.md): Creates a Core Bluetooth UUID object from a 16-, 32-, or 128-bit UUID data container.
- [init(cfuuid:)](init%28cfuuid_%29-3h0ry.md): Deprecated. Creates a Core Bluetooth UUID object from a Core Foundation UUID object.

# UUIDWithNSUUID: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a Core Bluetooth UUID object from a Foundation UUID object.

## Declaration

```objectivec
+ (CBUUID *) UUIDWithNSUUID:(NSUUID *) theUUID;
```

## Parameters

- `theUUID`: A UUID represented by an [NSUUID](../../foundation/nsuuid.md) object.

<a id="return-value"></a>

## Return Value

A new [CBUUID](../cbuuid.md) object for the specified UUID.

## See Also

### Creating New CBUUID Objects

- [UUIDWithString:](init%28string_%29.md): Creates a Core Bluetooth UUID object from a 16-, 32-, or 128-bit UUID string.
- [UUIDWithData:](init%28data_%29.md): Creates a Core Bluetooth UUID object from a 16-, 32-, or 128-bit UUID data container.
- [UUIDWithCFUUID:](init%28cfuuid_%29-3h0ry.md): Deprecated. Creates a Core Bluetooth UUID object from a Core Foundation UUID object.
