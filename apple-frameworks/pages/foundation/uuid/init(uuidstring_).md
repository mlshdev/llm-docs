> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/uuid/init(uuidstring:)](https://developer.apple.com/documentation/foundation/uuid/init(uuidstring:))

# init(uuidString:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a UUID from a string representation.

## Declaration

```swift
init?(uuidString string: String)
```

## Parameters

- `string`: The string representation of a UUID, such as `E621E1F8-C36C-495A-93FC-0C247A3E6E5F`.

<a id="Discussion"></a>

## Discussion

Returns `nil` if the string isn’t a valid UUID representation.

## See Also

### Creating UUIDs

- [init()](init%28%29.md): Creates a UUID with RFC 4122 version 4 random bytes.
- [init(uuid:)](init%28uuid_%29.md): Creates a UUID from the uuid C-language structure.
