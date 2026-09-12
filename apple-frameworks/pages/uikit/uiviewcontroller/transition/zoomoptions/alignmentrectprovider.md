> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/transition/zoomoptions/alignmentrectprovider](https://developer.apple.com/documentation/uikit/uiviewcontroller/transition/zoomoptions/alignmentrectprovider)

# alignmentRectProvider

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS · visionOS

A closure that returns the alignment rectangle for the starting and ending views.

## Declaration

```swift
var alignmentRectProvider: ((UIViewController.Transition.ZoomOptions.AlignmentRectContext) -> CGRect?)? { get set }
```

## See Also

### Setting options

- [UIViewController.Transition.ZoomOptions.AlignmentRectContext](alignmentrectcontext.md): An object that contains a zoom transition’s starting and ending views.
- [dimmingColor](dimmingcolor.md): The dimming color.
- [dimmingVisualEffect](dimmingvisualeffect.md): The dimming visual effect.
