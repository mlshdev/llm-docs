> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/codableattributedstringkey](https://developer.apple.com/documentation/foundation/codableattributedstringkey)

# CodableAttributedStringKey

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type alias used by attribute keys that are both encodable and decodable.

## Declaration

```swift
typealias CodableAttributedStringKey = DecodableAttributedStringKey & EncodableAttributedStringKey
```

## See Also

### Encoding and Decoding Keys

- [DecodableAttributedStringKey](decodableattributedstringkey.md): A protocol that defines how an attribute key decodes its value.
- [EncodableAttributedStringKey](encodableattributedstringkey.md): A protocol that defines how an attribute key encodes its value.
