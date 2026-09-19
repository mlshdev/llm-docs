> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretransferable/transferable/importedcontenttypes()-swift.type.method

# importedContentTypes()

**Framework:** Core Transferable  
**Kind:** Type Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Content types statically supported by the `Transferable` conformance of the type for import (like drop or paste).

## Declaration

```swift
static func importedContentTypes() -> [UTType]
```

<a id="discussion"></a>

## Discussion

For example, if you have a type that conforms to [Transferable](../transferable.md) and can be represented as [Image](https://developer.apple.com/documentation/swiftui/image) and you need to know if it can be instantiated with a JPEG file, you can check against `importedContentTypes`:

```swift
struct Icon: Transferable {
    var image: Image
    static var transferRepresentation: some TransferRepresentation {
        ProxyRepresentation(\.image)
    }
}

let isJPEGSupported = Image.importedContentTypes().contains(.jpeg)
```

The default implementation of this function is available to all types that conform to `Transferable` protocol.
