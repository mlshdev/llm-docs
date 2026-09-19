> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiwindowscene/geometrypreferences/mac/systemframe

# systemFrame

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

The preferred frame of the scene, in system coordinates.

## Declaration

```swift
var systemFrame: CGRect? { get set }
```

<a id="Discussion"></a>

## Discussion

This property represents the preferred frame of the scene in the system coordinate space, where an origin of `(0, 0)` corresponds to the top-left corner of the main display. The default value is [CGRectNull](../../../../coregraphics/cgrectnull.md), which indicates no preferred frame.
