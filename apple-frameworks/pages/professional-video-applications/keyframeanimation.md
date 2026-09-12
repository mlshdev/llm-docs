> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional-video-applications/keyframeanimation](https://developer.apple.com/documentation/professional-video-applications/keyframeanimation)

# keyframeAnimation

**Interface languages:** Swift, Objective-C

**Framework:** Professional Video Applications  
**Kind:** Article

Specifies an animation path for each keyframe.

<a id="overview"></a>

## Overview

A `keyframeAnimation` element contains a series of `keyframe` elements, each of which describe a value at a time point. Use `keyframeAnimation` element to describe an animation path for an adjustment attribute or an effect parameter.

The `keyframe` element has the following attributes:

| Attribute | Description |
| --- | --- |
| `time` | The keyframe time, for example, “0s”. |
| `value` | The keyframe value, for example, “-5 10”. |
| `interp` | The animation speed over the keyframe. The default is `linear`. |
| `curve` | Specifies whether the interpolated values around the keyframe are `linear` or `smooth`. The default is `smooth`. |
