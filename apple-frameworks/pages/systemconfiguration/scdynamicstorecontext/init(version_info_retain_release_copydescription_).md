> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecontext/init(version:info:retain:release:copydescription:)

# init(version:info:retain:release:copyDescription:)

**Framework:** System Configuration  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a dynamic store context with the specified values.

## Declaration

```swift
init(version: CFIndex, info: UnsafeMutableRawPointer?, retain: ((UnsafeRawPointer) -> UnsafeRawPointer)?, release: ((UnsafeRawPointer) -> Void)?, copyDescription: ((UnsafeRawPointer) -> Unmanaged<CFString>)?)
```
