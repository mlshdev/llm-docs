> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltilerenderpipelinedescriptor/threadgroupsizematchestilesize](https://developer.apple.com/documentation/metal/mtltilerenderpipelinedescriptor/threadgroupsizematchestilesize)

# threadgroupSizeMatchesTileSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

A Boolean value that indicates whether all threadgroups for this pipeline completely cover tiles.

## Declaration

```swift
var threadgroupSizeMatchesTileSize: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Metal can optimize code generation when the threadgroup and tile sizes match.

## See Also

### Specifying rasterization and visibility state

- [rasterSampleCount](rastersamplecount.md): The number of samples in each fragment.

# threadgroupSizeMatchesTileSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

A Boolean value that indicates whether all threadgroups for this pipeline completely cover tiles.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL threadgroupSizeMatchesTileSize;
```

<a id="discussion"></a>

## Discussion

Metal can optimize code generation when the threadgroup and tile sizes match.

## See Also

### Specifying rasterization and visibility state

- [rasterSampleCount](rastersamplecount.md): The number of samples in each fragment.
