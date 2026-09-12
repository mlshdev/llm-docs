> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochannellayout/unsafemutablepointer/count](https://developer.apple.com/documentation/coreaudiotypes/audiochannellayout/unsafemutablepointer/count)

# count

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of `AudioChannelDescription`s

## Declaration

```swift
var count: Int { get nonmutating set }
```

<a id="discussion"></a>

## Discussion

Warning: Setting a new value will not change the allocated size and may result in invalid access past the allocation.
