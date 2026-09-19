> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksharetransferrepresentation/init(exporter:)

# init(exporter:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS

Creates and initializes a transfer representation.

## Declaration

```swift
init(exporter: @escaping @Sendable (Item) throws -> CKShareTransferRepresentation<Item>.ExportedShare)
```

## Parameters

- `exporter`: A closure that provides a [CKShareTransferRepresentation.ExportedShare](exportedshare.md) representation of the specified `Item`.

<a id="return-value"></a>

## Return Value

A [CKShareTransferRepresentation.ExportedShare](exportedshare.md).
