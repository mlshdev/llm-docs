> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/systemconfiguration/scnetworkreachabilitycontext/init(version:info:retain:release:copydescription:)

# init(version:info:retain:release:copyDescription:)

**Framework:** System Configuration  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a network reachability context with the specified values.

## Declaration

```swift
init(version: CFIndex, info: UnsafeMutableRawPointer?, retain: ((UnsafeRawPointer) -> UnsafeRawPointer)?, release: ((UnsafeRawPointer) -> Void)?, copyDescription: ((UnsafeRawPointer) -> Unmanaged<CFString>)?)
```
