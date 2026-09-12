> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecontext/init(version:info:retain:release:copydescription:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecontext/init(version:info:retain:release:copydescription:))

# init(version:info:retain:release:copyDescription:)

**Framework:** System Configuration  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a dynamic store context with the specified values.

## Declaration

```swift
init(version: CFIndex, info: UnsafeMutableRawPointer?, retain: ((UnsafeRawPointer) -> UnsafeRawPointer)?, release: ((UnsafeRawPointer) -> Void)?, copyDescription: ((UnsafeRawPointer) -> Unmanaged<CFString>)?)
```
