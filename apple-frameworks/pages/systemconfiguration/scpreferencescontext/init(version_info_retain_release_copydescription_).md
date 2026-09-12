> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencescontext/init(version:info:retain:release:copydescription:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencescontext/init(version:info:retain:release:copydescription:))

# init(version:info:retain:release:copyDescription:)

**Framework:** System Configuration  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a preferences context with the specified raw values.

## Declaration

```swift
init(version: CFIndex, info: UnsafeMutableRawPointer?, retain: ((UnsafeRawPointer) -> UnsafeRawPointer)?, release: ((UnsafeRawPointer) -> Void)?, copyDescription: ((UnsafeRawPointer) -> Unmanaged<CFString>)?)
```
