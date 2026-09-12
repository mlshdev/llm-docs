> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/codablerepresentation/init(for:contenttype:)](https://developer.apple.com/documentation/coretransferable/codablerepresentation/init(for:contenttype:))

# init(for:contentType:)

**Framework:** Core Transferable  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a transfer representation for a given type and type identifier.

## Declaration

```swift
init(for itemType: Item.Type = Item.self, contentType: UTType) where Encoder == JSONEncoder, Decoder == JSONDecoder
```

## Parameters

- `itemType`: The concrete type of the item that’s being transferred.
- `contentType`: A uniform type identifier that best describes the item.

<a id="discussion"></a>

## Discussion

This initializer uses JSON for encoding and decoding.

## See Also

### Creating a transfer representation

- [init(for:contentType:encoder:decoder:)](init%28for_contenttype_encoder_decoder_%29.md): Creates a transfer representation for a given type with the encoder and decoder you supply.
