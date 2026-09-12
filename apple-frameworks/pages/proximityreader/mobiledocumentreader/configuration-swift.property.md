> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentreader/configuration-swift.property](https://developer.apple.com/documentation/proximityreader/mobiledocumentreader/configuration-swift.property)

# configuration

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The configuration of the mobile document reader.

## Declaration

```swift
final var configuration: MobileDocumentReader.Configuration { get async throws }
```

<a id="discussion"></a>

## Discussion

Use the information contained in the configuration to construct as reader token on your server.

> **Throws**

> A [MobileDocumentReaderError](../mobiledocumentreadererror.md) if an error occurs.

## See Also

### Retrieving the reader configuration

- [MobileDocumentReader.Configuration](configuration-swift.struct.md): A type that represents the configuration of the mobile document reader.
