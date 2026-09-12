> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueue/setvalidationhandler(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueue/setvalidationhandler(_:))

# setValidationHandler(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets validation handler for the queue to call before enqueuing buffers.

## Declaration

```swift
func setValidationHandler(_ body: @escaping (CMBufferQueue, CMBuffer) throws -> Void)
```
