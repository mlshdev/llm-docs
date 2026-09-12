> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uizoomtransitionoptions/alignmentrectprovider](https://developer.apple.com/documentation/uikit/uizoomtransitionoptions/alignmentrectprovider)

# alignmentRectProvider

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A block that returns the alignment rectangle for the starting and ending views.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) struct CGRect (^)(UIZoomTransitionAlignmentRectContext *) alignmentRectProvider;
```

## See Also

### Setting options

- [UIZoomTransitionAlignmentRectContext](../uiviewcontroller/transition/zoomoptions/alignmentrectcontext.md): An object that contains a zoom transition’s starting and ending views.
- [dimmingColor](../uiviewcontroller/transition/zoomoptions/dimmingcolor.md): The dimming color.
- [dimmingVisualEffect](../uiviewcontroller/transition/zoomoptions/dimmingvisualeffect.md): The dimming visual effect.
