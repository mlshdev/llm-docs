> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfallocatorcontext/init(version:info:retain:release:copydescription:allocate:reallocate:deallocate:preferredsize:)

# init(version:info:retain:release:copyDescription:allocate:reallocate:deallocate:preferredSize:)

**Framework:** Core Foundation  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
init(version: CFIndex, info: UnsafeMutableRawPointer!, retain: CFAllocatorRetainCallBack!, release: CFAllocatorReleaseCallBack!, copyDescription: CFAllocatorCopyDescriptionCallBack!, allocate: CFAllocatorAllocateCallBack!, reallocate: CFAllocatorReallocateCallBack!, deallocate: CFAllocatorDeallocateCallBack!, preferredSize: CFAllocatorPreferredSizeCallBack!)
```
