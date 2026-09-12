> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/transferrepresentation/visibility(_:)](https://developer.apple.com/documentation/coretransferable/transferrepresentation/visibility(_:))

# visibility(\_:)

**Framework:** Core Transferable  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Specifies the kinds of apps and processes that can see an item in transit.

## Declaration

```swift
func visibility(_ visibility: TransferRepresentationVisibility) -> some TransferRepresentation<Self.Item>

```

## Parameters

- `visibility`: The visibility level.
