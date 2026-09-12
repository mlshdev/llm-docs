> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuuid/init(uuidbytes:)-2p4d5](https://developer.apple.com/documentation/foundation/nsuuid/init(uuidbytes:)-2p4d5)

# init(uuidBytes:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a new UUID with the given bytes.

## Declaration

```swift
convenience init(uuidBytes bytes: UnsafePointer<UInt8>?)
```

## Parameters

- `bytes`: Raw UUID bytes to use to create the UUID.

<a id="return-value"></a>

## Return Value

A new UUID object.

## See Also

### Creating UUIDs

- [init()](init%28%29.md): Initializes a new UUID with RFC 4122 version 4 random bytes.
- [init(uuidString:)](init%28uuidstring_%29-8t9n3.md): Initializes a new UUID with the formatted string.

# initWithUUIDBytes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a new UUID with the given bytes.

## Declaration

```objectivec
- (instancetype) initWithUUIDBytes:(const uuid_t) bytes;
```

## Parameters

- `bytes`: Raw UUID bytes to use to create the UUID.

<a id="return-value"></a>

## Return Value

A new UUID object.

## See Also

### Related Documentation

- [UUID](uuid.md): Create and returns a new UUID with RFC 4122 version 4 random bytes.

### Creating UUIDs

- [UUID](uuid.md): Create and returns a new UUID with RFC 4122 version 4 random bytes.
- [init](init%28%29.md): Initializes a new UUID with RFC 4122 version 4 random bytes.
- [initWithUUIDString:](init%28uuidstring_%29-8t9n3.md): Initializes a new UUID with the formatted string.
