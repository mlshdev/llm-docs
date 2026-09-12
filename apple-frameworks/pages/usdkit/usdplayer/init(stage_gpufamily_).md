> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdplayer/init(stage:gpufamily:)](https://developer.apple.com/documentation/usdkit/usdplayer/init(stage:gpufamily:))

# init(stage:gpuFamily:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a Metal-less player for the given USD stage.

## Declaration

```swift
convenience init(stage: USDStage, gpuFamily: MTLGPUFamily)
```

<a id="discussion"></a>

## Discussion

`gpuFamily` is required for CPU-side texture processing.

## See Also

### Creating a player

- [init(stage:)](init%28stage_%29.md): Creates a Metal-enabled player for the given USD stage.
