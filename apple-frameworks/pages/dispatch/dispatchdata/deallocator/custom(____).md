> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchdata/deallocator/custom(_:_:)

# DispatchData.Deallocator.custom(\_:\_:)

**Framework:** Dispatch  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Use a custom deallocator.

## Declaration

```swift
@preconcurrency case custom(DispatchQueue?, @Sendable () -> Void)
```

## See Also

### Deallocators

- [DispatchData.Deallocator.free](free.md): Use `free` to deallocate memory.
- [DispatchData.Deallocator.unmap](unmap.md): Use `munmap` to deallocate memory.
