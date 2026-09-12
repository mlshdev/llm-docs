> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransition/crossdissolvetransition](https://developer.apple.com/documentation/uikit/uiviewcontrollertransition/crossdissolvetransition)

# crossDissolveTransition

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A transition where the current view fades out while the new view fades in at the same time.

## Declaration

```objectivec
+ (instancetype) crossDissolveTransition;
```

## See Also

### Accessing transitions

- [coverVerticalTransition](coververticaltransition.md): A transition where the new view slides up from the bottom of the screen.
- [flipHorizontalTransition](fliphorizontaltransition.md): A transition where the current view flips horizontally to reveal the new view.
- [partialCurlTransition](partialcurltransition.md): A transition where one corner of the current view curls up, revealing the new view underneath.
