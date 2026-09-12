> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandtype/drawpatches](https://developer.apple.com/documentation/metal/mtlindirectcommandtype/drawpatches)

# drawPatches (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 14.5+ · visionOS 1.0+

A draw call command for tessellated patches.

## Declaration

```swift
static var drawPatches: MTLIndirectCommandType { get }
```

## See Also

### Specifying command types

- [draw](draw.md): A draw call command.
- [drawIndexed](drawindexed.md): An indexed draw call command.
- [drawIndexedPatches](drawindexedpatches.md): An indexed draw call command for tessellated patches.
- [concurrentDispatch](concurrentdispatch.md): A compute command using a grid aligned to threadgroup boundaries.
- [concurrentDispatchThreads](concurrentdispatchthreads.md): A compute command using an arbitrarily sized grid.

# MTLIndirectCommandTypeDrawPatches (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 14.5+ · visionOS 1.0+

A draw call command for tessellated patches.

## Declaration

```objectivec
MTLIndirectCommandTypeDrawPatches
```

## See Also

### Specifying command types

- [MTLIndirectCommandTypeDraw](draw.md): A draw call command.
- [MTLIndirectCommandTypeDrawIndexed](drawindexed.md): An indexed draw call command.
- [MTLIndirectCommandTypeDrawIndexedPatches](drawindexedpatches.md): An indexed draw call command for tessellated patches.
- [MTLIndirectCommandTypeConcurrentDispatch](concurrentdispatch.md): A compute command using a grid aligned to threadgroup boundaries.
- [MTLIndirectCommandTypeConcurrentDispatchThreads](concurrentdispatchthreads.md): A compute command using an arbitrarily sized grid.
