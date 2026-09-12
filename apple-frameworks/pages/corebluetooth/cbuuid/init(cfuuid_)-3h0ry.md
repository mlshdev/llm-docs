> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbuuid/init(cfuuid:)-3h0ry](https://developer.apple.com/documentation/corebluetooth/cbuuid/init(cfuuid:)-3h0ry)

# init(cfuuid:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Initializer  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a Core Bluetooth UUID object from a Core Foundation UUID object.

## Declaration

```swift
init(cfuuid theUUID: CFUUID)
```

## Parameters

- `theUUID`: A UUID represented by a [CFUUID](../../corefoundation/cfuuid.md) object.

<a id="return-value"></a>

## Return Value

A new [CBUUID](../cbuuid.md) object for the specified UUID.

## See Also

### Creating New CBUUID Objects

- [init(string:)](init%28string_%29.md): Creates a Core Bluetooth UUID object from a 16-, 32-, or 128-bit UUID string.
- [init(data:)](init%28data_%29.md): Creates a Core Bluetooth UUID object from a 16-, 32-, or 128-bit UUID data container.
- [init(nsuuid:)](init%28nsuuid_%29-2amob.md): Creates a Core Bluetooth UUID object from a Foundation UUID object.

# UUIDWithCFUUID: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a Core Bluetooth UUID object from a Core Foundation UUID object.

## Declaration

```objectivec
+ (CBUUID *) UUIDWithCFUUID:(CFUUIDRef) theUUID;
```

## Parameters

- `theUUID`: A UUID represented by a [CFUUIDRef](../../corefoundation/cfuuid.md) object.

<a id="return-value"></a>

## Return Value

A new [CBUUID](../cbuuid.md) object for the specified UUID.

## See Also

### Creating New CBUUID Objects

- [UUIDWithString:](init%28string_%29.md): Creates a Core Bluetooth UUID object from a 16-, 32-, or 128-bit UUID string.
- [UUIDWithData:](init%28data_%29.md): Creates a Core Bluetooth UUID object from a 16-, 32-, or 128-bit UUID data container.
- [UUIDWithNSUUID:](init%28nsuuid_%29-2amob.md): Creates a Core Bluetooth UUID object from a Foundation UUID object.
