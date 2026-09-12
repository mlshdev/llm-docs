> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/transferable/export(to:contenttype:)](https://developer.apple.com/documentation/coretransferable/transferable/export(to:contenttype:))

# export(to:contentType:)

**Framework:** Core Transferable  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Using the type’s `Transferable` conformance implementation, exports a value by writing it to a provided destination directory.

## Declaration

```swift
func export(to destinationDirectory: URL, contentType: UTType?) async throws -> URL
```

## Parameters

- `destinationDirectory`: A directory to write the file to.
- `contentType`: A content type of the requested file. If `nil`, the first transfer representation is be used.

<a id="return-value"></a>

## Return Value

A URL of the created file. The file is owned by the application, and it is responsible for removing it when the file is not needed anymore.

<a id="discussion"></a>

## Discussion

If the [Transferable](../transferable.md) is not backed by a file, this will write the data to specified destination. This function uses the first representation provided for a given type in `static var transferRepresentation` requirement of the `Transferable` protocol or in the `body` of a custom `TransferRepresentation`.

The default implementation of this function is available to all types that conform to `Transferable` protocol.
