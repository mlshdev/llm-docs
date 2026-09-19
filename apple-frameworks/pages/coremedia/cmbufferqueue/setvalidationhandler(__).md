> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmbufferqueue/setvalidationhandler(_:)

# setValidationHandler(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets validation handler for the queue to call before enqueuing buffers.

## Declaration

```swift
func setValidationHandler(_ body: @escaping (CMBufferQueue, CMBuffer) throws -> Void)
```
