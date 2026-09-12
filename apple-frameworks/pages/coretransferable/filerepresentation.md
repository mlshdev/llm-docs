> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/filerepresentation](https://developer.apple.com/documentation/coretransferable/filerepresentation)

# FileRepresentation

**Framework:** Core Transferable  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A transfer representation for types that transfer as a file URL.

## Declaration

```swift
struct FileRepresentation<Item> where Item : Transferable
```

## Mentioned In

- [Choosing a transfer representation for a model type](choosing-a-transfer-representation-for-a-model-type.md)

<a id="overview"></a>

## Overview

Use a [FileRepresentation](filerepresentation.md) for transferring types that involve a large amount of data. For example, if your app defines a `Movie` type that could represent a lengthy video, use a `FileRepresentation` instance to transfer the video data to another app or process.

```swift
struct Movie: Transferable {
    let url: URL
    static var transferRepresentation: some TransferRepresentation {
        FileRepresentation(contentType: .mpeg4Movie) { movie in
            SentTransferredFile(movie.url)
        } importing: { received in
            let copy = URL(fileURLWithPath: "<#...#>")
            try FileManager.default.copyItem(at: received.file, to: copy)
            return Self(url: copy)
        }
    }
}
```

Note that the overall recommendation is to specify the content type that describes the file content as close as possible. For example, if you are sharing a PDF file, declare a [FileRepresentation](filerepresentation.md) of a `UTType.pdf` content type, instead of `UTType.fileURL` or `UTType.content` so the data can be dragged, shared, or imported to apps that support that data type:

```swift
  struct PDFDocument: Transferable {
      var file: URL

      static var transferRepresentation: some TransferRepresentation {
          FileRepresentation(contentType: .pdf) { ...
          } importing: { ... }
      }
  }
```

It’s efficient to pass data around as a file and the receiver loads it into memory only if it’s required.

## Topics

### Creating a transfer representation

- [init(contentType:shouldAttemptToOpenInPlace:exporting:importing:)](filerepresentation/init%28contenttype_shouldattempttoopeninplace_exporting_importing_%29.md): Creates a transfer representation for importing and exporting transferable items as files.
- [init(importedContentType:shouldAttemptToOpenInPlace:importing:)](filerepresentation/init%28importedcontenttype_shouldattempttoopeninplace_importing_%29.md): Creates a transfer representation for importing transferable items as files.
- [init(exportedContentType:shouldAllowToOpenInPlace:exporting:)](filerepresentation/init%28exportedcontenttype_shouldallowtoopeninplace_exporting_%29.md): Creates a transfer representation for exporting transferable items as files.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TransferRepresentation](transferrepresentation.md)

## See Also

### File transfer

- [SentTransferredFile](senttransferredfile.md): A description of a file from the perspective of the sender.
- [ReceivedTransferredFile](receivedtransferredfile.md): A description of a file from the perspective of the receiver.
