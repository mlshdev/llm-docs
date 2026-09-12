> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldispatchthreadgroupsindirectarguments/init(threadgroupspergrid:)](https://developer.apple.com/documentation/metal/mtldispatchthreadgroupsindirectarguments/init(threadgroupspergrid:))

# init(threadgroupsPerGrid:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns a new data layout for dispatching threadgroups over indirect buffer calls, with specified threadgroups per grid.

## Declaration

```swift
init(threadgroupsPerGrid: (UInt32, UInt32, UInt32))
```

## Parameters

- `threadgroupsPerGrid`: The number of threadgroups for the grid, in each dimension.

## See Also

### Specifying the size of the threadgroup

- [init()](init%28%29.md): Returns a new data layout for dispatching threadgroups over indirect buffer calls.
- [threadgroupsPerGrid](threadgroupspergrid.md): The number of threadgroups for the grid, in each dimension.
