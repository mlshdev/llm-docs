> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cfnetwork/cfhostclientcontext/init(version:info:retain:release:copydescription:)

# init(version:info:retain:release:copyDescription:)

**Framework:** CFNetwork  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Initializes an object that contains user-defined data and callbacks for a network host using the specified values.

## Declaration

```swift
init(version: CFIndex, info: UnsafeMutableRawPointer?, retain: CFAllocatorRetainCallBack?, release: CFAllocatorReleaseCallBack?, copyDescription: CFAllocatorCopyDescriptionCallBack?)
```

## See Also

### Initializers

- [init()](init%28%29.md): Initializes an object that contains user-defined data and callbacks for a network host.
