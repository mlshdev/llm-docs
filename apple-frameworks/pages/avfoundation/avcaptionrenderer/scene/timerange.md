> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/scene/timerange

# timeRange (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The time range during which the system doesn’t modify the scene.

## Declaration

```swift
var timeRange: CMTimeRange { get }
```

## See Also

### Inspecting the scene

- [hasActiveCaptions](hasactivecaptions.md): A Boolean value that indicates whether the scene contains one or more active captions.
- [needsPeriodicRefresh](needsperiodicrefresh.md): A Boolean value that indicates whether the scene requires redrawing while your app progresses through the content.

# timeRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The time range during which the system doesn’t modify the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTimeRange timeRange;
```

## See Also

### Inspecting the scene

- [hasActiveCaptions](hasactivecaptions.md): A Boolean value that indicates whether the scene contains one or more active captions.
- [needsPeriodicRefresh](needsperiodicrefresh.md): A Boolean value that indicates whether the scene requires redrawing while your app progresses through the content.
