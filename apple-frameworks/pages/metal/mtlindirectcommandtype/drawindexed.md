> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandtype/drawindexed](https://developer.apple.com/documentation/metal/mtlindirectcommandtype/drawindexed)

# drawIndexed (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An indexed draw call command.

## Declaration

```swift
static var drawIndexed: MTLIndirectCommandType { get }
```

## See Also

### Specifying command types

- [draw](draw.md): A draw call command.
- [drawPatches](drawpatches.md): A draw call command for tessellated patches.
- [drawIndexedPatches](drawindexedpatches.md): An indexed draw call command for tessellated patches.
- [concurrentDispatch](concurrentdispatch.md): A compute command using a grid aligned to threadgroup boundaries.
- [concurrentDispatchThreads](concurrentdispatchthreads.md): A compute command using an arbitrarily sized grid.

# MTLIndirectCommandTypeDrawIndexed (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An indexed draw call command.

## Declaration

```objectivec
MTLIndirectCommandTypeDrawIndexed
```

## See Also

### Specifying command types

- [MTLIndirectCommandTypeDraw](draw.md): A draw call command.
- [MTLIndirectCommandTypeDrawPatches](drawpatches.md): A draw call command for tessellated patches.
- [MTLIndirectCommandTypeDrawIndexedPatches](drawindexedpatches.md): An indexed draw call command for tessellated patches.
- [MTLIndirectCommandTypeConcurrentDispatch](concurrentdispatch.md): A compute command using a grid aligned to threadgroup boundaries.
- [MTLIndirectCommandTypeConcurrentDispatchThreads](concurrentdispatchthreads.md): A compute command using an arbitrarily sized grid.
