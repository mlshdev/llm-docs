> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfbinaryheapcallbacks/init(version:retain:release:copydescription:compare:)

# init(version:retain:release:copyDescription:compare:)

**Framework:** Core Foundation  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
init(version: CFIndex, retain: ((CFAllocator?, UnsafeRawPointer?) -> UnsafeRawPointer?)!, release: ((CFAllocator?, UnsafeRawPointer?) -> Void)!, copyDescription: ((UnsafeRawPointer?) -> Unmanaged<CFString>?)!, compare: ((UnsafeRawPointer?, UnsafeRawPointer?, UnsafeMutableRawPointer?) -> CFComparisonResult)!)
```
