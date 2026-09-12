> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuuid/init(uuidstring:)-8t9n3](https://developer.apple.com/documentation/foundation/nsuuid/init(uuidstring:)-8t9n3)

# init(uuidString:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a new UUID with the formatted string.

## Declaration

```swift
convenience init?(uuidString string: String)
```

## Parameters

- `string`: The source string containing the UUID. The standard format for UUIDs represented in ASCII is a string punctuated by hyphens, for example `68753A44-4D6F-1226-9C60-0050E4C00067`.

<a id="return-value"></a>

## Return Value

A new UUID object. Returns `nil` for invalid strings.

## See Also

### Creating UUIDs

- [init()](init%28%29.md): Initializes a new UUID with RFC 4122 version 4 random bytes.
- [init(uuidBytes:)](init%28uuidbytes_%29-2p4d5.md): Initializes a new UUID with the given bytes.

# initWithUUIDString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a new UUID with the formatted string.

## Declaration

```objectivec
- (instancetype) initWithUUIDString:(NSString *) string;
```

## Parameters

- `string`: The source string containing the UUID. The standard format for UUIDs represented in ASCII is a string punctuated by hyphens, for example `68753A44-4D6F-1226-9C60-0050E4C00067`.

<a id="return-value"></a>

## Return Value

A new UUID object. Returns `nil` for invalid strings.

## See Also

### Related Documentation

- [UUID](uuid.md): Create and returns a new UUID with RFC 4122 version 4 random bytes.

### Creating UUIDs

- [UUID](uuid.md): Create and returns a new UUID with RFC 4122 version 4 random bytes.
- [init](init%28%29.md): Initializes a new UUID with RFC 4122 version 4 random bytes.
- [initWithUUIDBytes:](init%28uuidbytes_%29-2p4d5.md): Initializes a new UUID with the given bytes.
