> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/codablerepresentation](https://developer.apple.com/documentation/coretransferable/codablerepresentation)

# CodableRepresentation

**Framework:** Core Transferable  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A transfer representation for types that participate in Swift’s protocols for encoding and decoding.

## Declaration

```swift
@preconcurrency struct CodableRepresentation<Item, Encoder, Decoder> where Item : Transferable, Item : Decodable, Item : Encodable, Encoder : TopLevelEncoder, Encoder : Sendable, Decoder : TopLevelDecoder, Decoder : Sendable, Encoder.Output == Data, Decoder.Input == Data
```

## Mentioned In

- [Choosing a transfer representation for a model type](choosing-a-transfer-representation-for-a-model-type.md)

<a id="overview"></a>

## Overview

```swift
struct Todo: Codable, Transferable {
    var text: String
    var isDone = false

    static var transferRepresentation: some TransferRepresentation {
        CodableRepresentation(contentType: .todo)
    }
}

 extension UTType {
     static let todo = UTType(exportedAs: "com.example.todo")
}
```

> **Important**

> If your app declares custom uniform type identifiers, include corresponding entries in the app’s `Info.plist`. For more information, see [Defining file and data types for your app](../uniformtypeidentifiers/defining-file-and-data-types-for-your-app.md).

## Topics

### Creating a transfer representation

- [init(for:contentType:)](codablerepresentation/init%28for_contenttype_%29.md): Creates a transfer representation for a given type and type identifier.
- [init(for:contentType:encoder:decoder:)](codablerepresentation/init%28for_contenttype_encoder_decoder_%29.md): Creates a transfer representation for a given type with the encoder and decoder you supply.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TransferRepresentation](transferrepresentation.md)

## See Also

### Data transfer

- [DataRepresentation](datarepresentation.md): A transfer representation for types that provide their own binary data conversion.
