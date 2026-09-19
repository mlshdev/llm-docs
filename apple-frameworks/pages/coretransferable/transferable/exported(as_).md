> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretransferable/transferable/exported(as:)

# exported(as:)

**Framework:** Core Transferable  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Using the type’s `Transferable` conformance implementation, exports a value as binary data.

## Declaration

```swift
func exported(as contentType: UTType?) async throws -> Data
```

## Parameters

- `contentType`: A content type of the returned data. If no content type is provided, CoreTransferable generates data using the first `TransferRepresentation` in the `Transferable` conformance that supports export.

<a id="discussion"></a>

## Discussion

If the [Transferable](../transferable.md) is backed by a file `URL`, this might cause loading the entire file contents into memory. This function uses the first representation that conforms to the given content type in `static var transferRepresentation` requirement of the `Transferable` protocol or in the `var body` property of a custom `TransferRepresentation`.

The default implementation of this function is available to all types that conform to `Transferable` protocol.
