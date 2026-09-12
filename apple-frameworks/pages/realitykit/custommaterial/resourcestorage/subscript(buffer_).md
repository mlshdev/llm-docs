> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/resourcestorage/subscript(buffer:)](https://developer.apple.com/documentation/realitykit/custommaterial/resourcestorage/subscript(buffer:))

# subscript(buffer:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

## Declaration

```swift
subscript<BufferType>(buffer path: KeyPath<UniformsType, UnsafeMutablePointer<BufferType>?>) -> LowLevelBuffer? { get set }
```
