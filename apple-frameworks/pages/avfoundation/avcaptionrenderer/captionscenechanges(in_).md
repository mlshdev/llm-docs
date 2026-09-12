> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionrenderer/captionscenechanges(in:)](https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/captionscenechanges(in:))

# captionSceneChanges(in:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Determine render time ranges within an enclosing time range to account for visual changes among captions.

## Declaration

```swift
func captionSceneChanges(in consideredTimeRange: CMTimeRange) -> [AVCaptionRenderer.Scene]
```

## Parameters

- `consideredTimeRange`: The time range to consider for rendering.

<a id="return-value"></a>

## Return Value

An array of render scenes for the time range, or an empty array if there are none.

## See Also

### Determining scene changes

- [AVCaptionRenderer.Scene](scene.md): An object that holds a time range and an associated state which indicates when the renderer draws output.

# captionSceneChangesInRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Determine render time ranges within an enclosing time range to account for visual changes among captions.

## Declaration

```objectivec
- (NSArray<AVCaptionRendererScene *> *) captionSceneChangesInRange:(CMTimeRange) consideredTimeRange;
```

## Parameters

- `consideredTimeRange`: The time range to consider for rendering.

<a id="return-value"></a>

## Return Value

An array of render scenes for the time range, or an empty array if there are none.

## See Also

### Determining scene changes

- [AVCaptionRendererScene](scene.md): An object that holds a time range and an associated state which indicates when the renderer draws output.
