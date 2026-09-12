> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcollisiongroupset/init(rawvalue:)](https://developer.apple.com/documentation/realitykit/clothcollisiongroupset/init(rawvalue:))

# init(rawValue:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a collision group set from a raw bitmask value.

## Declaration

```swift
init(rawValue: UInt32)
```

## Parameters

- `rawValue`: A 32-bit bitmask where each set bit represents a group between 1 and 32.
