> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuuid/uuid](https://developer.apple.com/documentation/foundation/nsuuid/uuid)

# UUID

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Create and returns a new UUID with RFC 4122 version 4 random bytes.

## Declaration

```objectivec
+ (instancetype) UUID;
```

<a id="return-value"></a>

## Return Value

A new UUID object.

## See Also

### Creating UUIDs

- [init](init%28%29.md): Initializes a new UUID with RFC 4122 version 4 random bytes.
- [initWithUUIDString:](init%28uuidstring_%29-8t9n3.md): Initializes a new UUID with the formatted string.
- [initWithUUIDBytes:](init%28uuidbytes_%29-2p4d5.md): Initializes a new UUID with the given bytes.
