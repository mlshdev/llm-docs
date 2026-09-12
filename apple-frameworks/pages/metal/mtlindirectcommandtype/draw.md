> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandtype/draw](https://developer.apple.com/documentation/metal/mtlindirectcommandtype/draw)

# draw (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A draw call command.

## Declaration

```swift
static var draw: MTLIndirectCommandType { get }
```

## See Also

### Specifying command types

- [drawIndexed](drawindexed.md): An indexed draw call command.
- [drawPatches](drawpatches.md): A draw call command for tessellated patches.
- [drawIndexedPatches](drawindexedpatches.md): An indexed draw call command for tessellated patches.
- [concurrentDispatch](concurrentdispatch.md): A compute command using a grid aligned to threadgroup boundaries.
- [concurrentDispatchThreads](concurrentdispatchthreads.md): A compute command using an arbitrarily sized grid.

# MTLIndirectCommandTypeDraw (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A draw call command.

## Declaration

```objectivec
MTLIndirectCommandTypeDraw
```

## See Also

### Specifying command types

- [MTLIndirectCommandTypeDrawIndexed](drawindexed.md): An indexed draw call command.
- [MTLIndirectCommandTypeDrawPatches](drawpatches.md): A draw call command for tessellated patches.
- [MTLIndirectCommandTypeDrawIndexedPatches](drawindexedpatches.md): An indexed draw call command for tessellated patches.
- [MTLIndirectCommandTypeConcurrentDispatch](concurrentdispatch.md): A compute command using a grid aligned to threadgroup boundaries.
- [MTLIndirectCommandTypeConcurrentDispatchThreads](concurrentdispatchthreads.md): A compute command using an arbitrarily sized grid.
