> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcshandle/uri](https://developer.apple.com/documentation/telephonymessagingkit/rcshandle/uri)

# RCSHandle.URI

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that represents an RCS URI handle.

## Declaration

```swift
struct URI
```

## Topics

### Creating a URI instance

- [init(stringLiteral:)](uri/init%28stringliteral_%29.md): Creates a URI instance from the given string.

### Working with raw values

- [init(rawValue:)](uri/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.
- [rawValue](uri/rawvalue.md): The raw value of the handle

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing handle values

- [RCSHandle.uri(\_:)](uri%28__%29.md): A handle that represents a single recipient or sender, as identified by a URI.
- [RCSHandle.group(\_:)](group%28__%29.md): A handle that represents a group.
- [RCSHandle.Group](group.md): A structure that represents an RCS group handle.
