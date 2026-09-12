> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uishaperesolutioncontext/contentshape](https://developer.apple.com/documentation/uikit/uishaperesolutioncontext/contentshape)

# contentShape

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The resolved shape of the content to which this shape can apply.

## Declaration

```objectivec
@property (nonatomic, readonly) UIResolvedShape * contentShape;
```

<a id="Discussion"></a>

## Discussion

For example, if this shape applies an effect to a button, the [contentShape](contentshape.md) might represent the bounding shape of that button’s background. You typically size a dynamic shape relative to the bounding rectangle of the [contentShape](contentshape.md).
