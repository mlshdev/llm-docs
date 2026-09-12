> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionrenderer/scene/needsperiodicrefresh](https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/scene/needsperiodicrefresh)

# needsPeriodicRefresh (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A Boolean value that indicates whether the scene requires redrawing while your app progresses through the content.

## Declaration

```swift
var needsPeriodicRefresh: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If your app isn’t progressing through the content, a single render at the current time is enough.

Choose a refresh rate appropriate for your app. For example, an app may choose rates that match rates of associated video frames or other timing appropriate for the client.

## See Also

### Inspecting the scene

- [timeRange](timerange.md): The time range during which the system doesn’t modify the scene.
- [hasActiveCaptions](hasactivecaptions.md): A Boolean value that indicates whether the scene contains one or more active captions.

# needsPeriodicRefresh (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A Boolean value that indicates whether the scene requires redrawing while your app progresses through the content.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL needsPeriodicRefresh;
```

<a id="Discussion"></a>

## Discussion

If your app isn’t progressing through the content, a single render at the current time is enough.

Choose a refresh rate appropriate for your app. For example, an app may choose rates that match rates of associated video frames or other timing appropriate for the client.

## See Also

### Inspecting the scene

- [timeRange](timerange.md): The time range during which the system doesn’t modify the scene.
- [hasActiveCaptions](hasactivecaptions.md): A Boolean value that indicates whether the scene contains one or more active captions.
