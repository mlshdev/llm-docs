> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionrenderer/scene/hasactivecaptions](https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/scene/hasactivecaptions)

# hasActiveCaptions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A Boolean value that indicates whether the scene contains one or more active captions.

## Declaration

```swift
var hasActiveCaptions: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Knowing when the renderer has active captions can be useful to scrub to times where captions are present, or skip scenes where no captions exist.

> **Important**

>  Don’t use this property value to restrict drawing. Instead, draw an empty fill in [render(in:for:)](../render%28in_for_%29.md) when there aren’t active captions to render.

## See Also

### Inspecting the scene

- [timeRange](timerange.md): The time range during which the system doesn’t modify the scene.
- [needsPeriodicRefresh](needsperiodicrefresh.md): A Boolean value that indicates whether the scene requires redrawing while your app progresses through the content.

# hasActiveCaptions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A Boolean value that indicates whether the scene contains one or more active captions.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasActiveCaptions;
```

<a id="Discussion"></a>

## Discussion

Knowing when the renderer has active captions can be useful to scrub to times where captions are present, or skip scenes where no captions exist.

> **Important**

>  Don’t use this property value to restrict drawing. Instead, draw an empty fill in [renderInContext:forTime:](../render%28in_for_%29.md) when there aren’t active captions to render.

## See Also

### Inspecting the scene

- [timeRange](timerange.md): The time range during which the system doesn’t modify the scene.
- [needsPeriodicRefresh](needsperiodicrefresh.md): A Boolean value that indicates whether the scene requires redrawing while your app progresses through the content.
