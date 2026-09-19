> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretransferable/transferable/representation

# Representation

**Framework:** Core Transferable  
**Kind:** Associated Type  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The type of the representation used to import and export the item.

## Declaration

```swift
associatedtype Representation : TransferRepresentation
```

<a id="discussion"></a>

## Discussion

Swift infers this type from the return value of the [transferRepresentation](transferrepresentation.md) property.

## See Also

### Implementing a transfer representation

- [transferRepresentation](transferrepresentation.md): The representation used to import and export the item.
