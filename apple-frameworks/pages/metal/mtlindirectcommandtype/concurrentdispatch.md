> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandtype/concurrentdispatch](https://developer.apple.com/documentation/metal/mtlindirectcommandtype/concurrentdispatch)

# concurrentDispatch (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

A compute command using a grid aligned to threadgroup boundaries.

## Declaration

```swift
static var concurrentDispatch: MTLIndirectCommandType { get }
```

## See Also

### Specifying command types

- [draw](draw.md): A draw call command.
- [drawIndexed](drawindexed.md): An indexed draw call command.
- [drawPatches](drawpatches.md): A draw call command for tessellated patches.
- [drawIndexedPatches](drawindexedpatches.md): An indexed draw call command for tessellated patches.
- [concurrentDispatchThreads](concurrentdispatchthreads.md): A compute command using an arbitrarily sized grid.

# MTLIndirectCommandTypeConcurrentDispatch (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

A compute command using a grid aligned to threadgroup boundaries.

## Declaration

```objectivec
MTLIndirectCommandTypeConcurrentDispatch
```

## See Also

### Specifying command types

- [MTLIndirectCommandTypeDraw](draw.md): A draw call command.
- [MTLIndirectCommandTypeDrawIndexed](drawindexed.md): An indexed draw call command.
- [MTLIndirectCommandTypeDrawPatches](drawpatches.md): A draw call command for tessellated patches.
- [MTLIndirectCommandTypeDrawIndexedPatches](drawindexedpatches.md): An indexed draw call command for tessellated patches.
- [MTLIndirectCommandTypeConcurrentDispatchThreads](concurrentdispatchthreads.md): A compute command using an arbitrarily sized grid.
