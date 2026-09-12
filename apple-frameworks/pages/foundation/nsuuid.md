> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuuid](https://developer.apple.com/documentation/foundation/nsuuid)

# NSUUID (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A universally unique value that can be used to identify types, interfaces, and other items.

## Declaration

```swift
class NSUUID
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [UUID](nsuuid/uuid.md); use [NSUUID](nsuuid.md) when you need reference semantics or other Foundation-specific behavior.

UUIDs (Universally Unique Identifiers), also known as GUIDs (Globally Unique Identifiers) or IIDs (Interface Identifiers), are 128-bit values. UUIDs created by `NSUUID` conform to RFC 4122 version 4 and are created with random bytes.

The standard format for UUIDs represented in ASCII is a string punctuated by hyphens, for example `68753A44-4D6F-1226-9C60-0050E4C00067`. The hex representation looks, as you might expect, like a list of numerical values preceded by 0x. For example, `0xD7`, `0x36`, `0x95`, `0x0A`, `0x4D`, `0x6E`, `0x12`, `0x26`, `0x80`, `0x3A`, `0x00`, `0x50`, `0xE4`, `0xC0`, `0x00`, `0x67`. Because a UUID is expressed simply as an array of bytes, there are no endianness considerations for different platforms.

The `NSUUID` class is *not* toll-free bridged with CoreFoundation’s [CFUUID](../corefoundation/cfuuid.md). Use UUID strings to convert between `CFUUIDRef` and `NSUUID`, if needed. Two `NSUUID` objects are not guaranteed to be comparable by pointer value (as [CFUUID](../corefoundation/cfuuid.md) is); use [isEqual(\_:)](../objectivec/nsobjectprotocol/isequal%28__%29.md) to compare two `NSUUID` instances.

> **Important**

>  The Swift overlay to the Foundation framework provides the [UUID](nsuuid/uuid.md) structure, which bridges to the [NSUUID](nsuuid.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating UUIDs

- [init()](nsuuid/init%28%29.md): Initializes a new UUID with RFC 4122 version 4 random bytes.
- [init(uuidString:)](nsuuid/init%28uuidstring_%29-8t9n3.md): Initializes a new UUID with the formatted string.
- [init(uuidBytes:)](nsuuid/init%28uuidbytes_%29-2p4d5.md): Initializes a new UUID with the given bytes.

### Get UUID Values

- [getBytes(\_:)](nsuuid/getbytes%28__%29.md): Returns the UUID as bytes.
- [uuidString](nsuuid/uuidstring.md): The UUID as a string.

### Initializers

- [init(UUIDBytes:)](nsuuid/init%28uuidbytes_%29-4fntq.md)
- [init(UUIDString:)](nsuuid/init%28uuidstring_%29-8kcx.md)
- [init(coder:)](nsuuid/init%28coder_%29.md)

### Instance Methods

- [compare(\_:)](nsuuid/compare%28__%29.md): Compares the receiver to another NSUUID in constant time.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSUUID (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A universally unique value that can be used to identify types, interfaces, and other items.

## Declaration

```objectivec
@interface NSUUID : NSObject
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [UUID](nsuuid/uuid.md); use [NSUUID](nsuuid.md) when you need reference semantics or other Foundation-specific behavior.

UUIDs (Universally Unique Identifiers), also known as GUIDs (Globally Unique Identifiers) or IIDs (Interface Identifiers), are 128-bit values. UUIDs created by `NSUUID` conform to RFC 4122 version 4 and are created with random bytes.

The standard format for UUIDs represented in ASCII is a string punctuated by hyphens, for example `68753A44-4D6F-1226-9C60-0050E4C00067`. The hex representation looks, as you might expect, like a list of numerical values preceded by 0x. For example, `0xD7`, `0x36`, `0x95`, `0x0A`, `0x4D`, `0x6E`, `0x12`, `0x26`, `0x80`, `0x3A`, `0x00`, `0x50`, `0xE4`, `0xC0`, `0x00`, `0x67`. Because a UUID is expressed simply as an array of bytes, there are no endianness considerations for different platforms.

The `NSUUID` class is *not* toll-free bridged with CoreFoundation’s [CFUUIDRef](../corefoundation/cfuuid.md). Use UUID strings to convert between `CFUUIDRef` and `NSUUID`, if needed. Two `NSUUID` objects are not guaranteed to be comparable by pointer value (as [CFUUIDRef](../corefoundation/cfuuid.md) is); use [isEqual:](../objectivec/nsobjectprotocol/isequal%28__%29.md) to compare two `NSUUID` instances.

> **Important**

>  The Swift overlay to the Foundation framework provides the [UUID](nsuuid/uuid.md) structure, which bridges to the [NSUUID](nsuuid.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating UUIDs

- [UUID](nsuuid/uuid.md): Create and returns a new UUID with RFC 4122 version 4 random bytes.
- [init](nsuuid/init%28%29.md): Initializes a new UUID with RFC 4122 version 4 random bytes.
- [initWithUUIDString:](nsuuid/init%28uuidstring_%29-8t9n3.md): Initializes a new UUID with the formatted string.
- [initWithUUIDBytes:](nsuuid/init%28uuidbytes_%29-2p4d5.md): Initializes a new UUID with the given bytes.

### Get UUID Values

- [getUUIDBytes:](nsuuid/getbytes%28__%29.md): Returns the UUID as bytes.
- [UUIDString](nsuuid/uuidstring.md): The UUID as a string.

### Instance Methods

- [compare:](nsuuid/compare%28__%29.md): Compares the receiver to another NSUUID in constant time.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)
