> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/setbuffer(_:bufferoffset:elementcount:at:)](https://developer.apple.com/documentation/realitykit/computegraphcomponent/setbuffer(_:bufferoffset:elementcount:at:))

# setBuffer(\_:bufferOffset:elementCount:at:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Binds a Metal buffer to a parameter.

## Declaration

```swift
mutating func setBuffer(_ buffer: (any MTLBuffer)?, bufferOffset: Int = 0, elementCount: Int? = nil, at index: Int)
```

## Parameters

- `buffer`: The `MTLBuffer` to bind.
- `bufferOffset`: Byte offset into `buffer`. Defaults to `0`.
- `elementCount`: Number of elements in the buffer, for buffers with variable capacity.
- `at`: Index into the device buffers table.
