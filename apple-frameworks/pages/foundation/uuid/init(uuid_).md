> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/uuid/init(uuid:)](https://developer.apple.com/documentation/foundation/uuid/init(uuid:))

# init(uuid:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a UUID from the uuid C-language structure.

## Declaration

```swift
init(uuid: uuid_t)
```

## Parameters

- `uuid`: The C-language structure of a UUID.

## See Also

### Creating UUIDs

- [init()](init%28%29.md): Creates a UUID with RFC 4122 version 4 random bytes.
- [init(uuidString:)](init%28uuidstring_%29.md): Creates a UUID from a string representation.
