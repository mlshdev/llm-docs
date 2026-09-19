> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiwindowscenegeometrypreferencesios/interfaceorientations

# interfaceOrientations

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The preferred interface orientations for the scene.

## Declaration

```objectivec
@property (nonatomic, assign) UIInterfaceOrientationMask interfaceOrientations;
```

<a id="Discussion"></a>

## Discussion

If you specify this value, the system automatically chooses an orientation from the intersection of these preferred orientations and the supported orientations.
