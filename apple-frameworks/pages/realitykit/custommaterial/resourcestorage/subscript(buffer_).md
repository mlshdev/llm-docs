> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/custommaterial/resourcestorage/subscript(buffer:)

# subscript(buffer:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

## Declaration

```swift
subscript<BufferType>(buffer path: KeyPath<UniformsType, UnsafeMutablePointer<BufferType>?>) -> LowLevelBuffer? { get set }
```
