> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/accept(_:)-5vv8p](https://developer.apple.com/documentation/cloudkit/ckcontainer/accept(_:)-5vv8p)

# accept(\_:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Accepts the specified share metadata and returns the accepted share to an awaiting caller.

## Declaration

```swift
func accept(_ metadata: CKShare.Metadata) async throws -> CKShare
```

## Parameters

- `metadata`: The metadata of the share to accept.

<a id="return-value"></a>

## Return Value

The corresponding share for the share metadata.
