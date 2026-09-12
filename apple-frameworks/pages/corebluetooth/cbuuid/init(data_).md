> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbuuid/init(data:)](https://developer.apple.com/documentation/corebluetooth/cbuuid/init(data:))

# init(data:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a Core Bluetooth UUID object from a 16-, 32-, or 128-bit UUID data container.

## Declaration

```swift
init(data theData: Data)
```

## Parameters

- `theData`: Data containing a 16-, 32-, or 128-bit UUID.

<a id="return-value"></a>

## Return Value

A new [CBUUID](../cbuuid.md) object for the specified UUID data.

<a id="Discussion"></a>

## Discussion

This method is useful when handling the UUID of a Bluetooth attribute in raw bytes.

## See Also

### Creating New CBUUID Objects

- [init(string:)](init%28string_%29.md): Creates a Core Bluetooth UUID object from a 16-, 32-, or 128-bit UUID string.
- [init(cfuuid:)](init%28cfuuid_%29-3h0ry.md): Deprecated. Creates a Core Bluetooth UUID object from a Core Foundation UUID object.
- [init(nsuuid:)](init%28nsuuid_%29-2amob.md): Creates a Core Bluetooth UUID object from a Foundation UUID object.

# UUIDWithData: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a Core Bluetooth UUID object from a 16-, 32-, or 128-bit UUID data container.

## Declaration

```objectivec
+ (CBUUID *) UUIDWithData:(NSData *) theData;
```

## Parameters

- `theData`: Data containing a 16-, 32-, or 128-bit UUID.

<a id="return-value"></a>

## Return Value

A new [CBUUID](../cbuuid.md) object for the specified UUID data.

<a id="Discussion"></a>

## Discussion

This method is useful when handling the UUID of a Bluetooth attribute in raw bytes.

## See Also

### Creating New CBUUID Objects

- [UUIDWithString:](init%28string_%29.md): Creates a Core Bluetooth UUID object from a 16-, 32-, or 128-bit UUID string.
- [UUIDWithCFUUID:](init%28cfuuid_%29-3h0ry.md): Deprecated. Creates a Core Bluetooth UUID object from a Core Foundation UUID object.
- [UUIDWithNSUUID:](init%28nsuuid_%29-2amob.md): Creates a Core Bluetooth UUID object from a Foundation UUID object.
