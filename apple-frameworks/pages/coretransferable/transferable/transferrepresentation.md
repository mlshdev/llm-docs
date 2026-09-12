> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/transferable/transferrepresentation](https://developer.apple.com/documentation/coretransferable/transferable/transferrepresentation)

# transferRepresentation

**Framework:** Core Transferable  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The representation used to import and export the item.

## Declaration

```swift
@TransferRepresentationBuilder<Self> static var transferRepresentation: Self.Representation { get }
```

## Mentioned In

- [Choosing a transfer representation for a model type](../choosing-a-transfer-representation-for-a-model-type.md)

<a id="discussion"></a>

## Discussion

A [transferRepresentation](transferrepresentation.md) can contain multiple representations for different content types.

## See Also

### Implementing a transfer representation

- [Representation](representation.md): The type of the representation used to import and export the item.
