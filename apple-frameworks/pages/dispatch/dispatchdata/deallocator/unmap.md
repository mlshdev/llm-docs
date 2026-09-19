> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchdata/deallocator/unmap

# DispatchData.Deallocator.unmap

**Framework:** Dispatch  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Use `munmap` to deallocate memory.

## Declaration

```swift
case unmap
```

## See Also

### Deallocators

- [DispatchData.Deallocator.free](free.md): Use `free` to deallocate memory.
- [DispatchData.Deallocator.custom(\_:\_:)](custom%28____%29.md): Use a custom deallocator.
