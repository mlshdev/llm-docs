> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldispatchthreadgroupsindirectarguments/threadgroupspergrid](https://developer.apple.com/documentation/metal/mtldispatchthreadgroupsindirectarguments/threadgroupspergrid)

# threadgroupsPerGrid (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The number of threadgroups for the grid, in each dimension.

## Declaration

```swift
var threadgroupsPerGrid: (UInt32, UInt32, UInt32)
```

## See Also

### Specifying the size of the threadgroup

- [init()](init%28%29.md): Returns a new data layout for dispatching threadgroups over indirect buffer calls.
- [init(threadgroupsPerGrid:)](init%28threadgroupspergrid_%29.md): Returns a new data layout for dispatching threadgroups over indirect buffer calls, with specified threadgroups per grid.

# threadgroupsPerGrid (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The number of threadgroups for the grid, in each dimension.

## Declaration

```objectivec
uint32_t threadgroupsPerGrid[3];
```
