> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffererror-swift.struct/blacklisted](https://developer.apple.com/documentation/metal/mtlcommandbuffererror-swift.struct/blacklisted)

# blacklisted

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

A former error code that indicates the system has revoked the Metal device’s access because it’s responsible for too many timeouts or hangs.

> Use [accessRevoked](accessrevoked.md) instead.

## Declaration

```swift
static var blacklisted: MTLCommandBufferError.Code { get }
```
