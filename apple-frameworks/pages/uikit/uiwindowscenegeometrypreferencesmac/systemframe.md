> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscenegeometrypreferencesmac/systemframe](https://developer.apple.com/documentation/uikit/uiwindowscenegeometrypreferencesmac/systemframe)

# systemFrame

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 16.0+ · tvOS · visionOS

The preferred frame of the scene, in system coordinates.

## Declaration

```objectivec
@property (nonatomic, assign) CGRect systemFrame;
```

<a id="Discussion"></a>

## Discussion

This property represents the preferred frame of the scene in the system coordinate space, where an origin of `(0, 0)` corresponds to the top-left corner of the main display. The default value is [CGRectNull](../../coregraphics/cgrectnull.md), which indicates no preferred frame.
