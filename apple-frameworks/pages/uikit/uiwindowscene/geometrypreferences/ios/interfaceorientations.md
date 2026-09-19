> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiwindowscene/geometrypreferences/ios/interfaceorientations

# interfaceOrientations

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

The preferred interface orientations for the scene.

## Declaration

```swift
var interfaceOrientations: UIInterfaceOrientationMask? { get set }
```

<a id="Discussion"></a>

## Discussion

If you specify this value, the system automatically chooses an orientation from the intersection of these preferred orientations and the supported orientations.
