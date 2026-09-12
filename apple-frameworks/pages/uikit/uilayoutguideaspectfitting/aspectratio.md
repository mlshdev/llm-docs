> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilayoutguideaspectfitting/aspectratio](https://developer.apple.com/documentation/uikit/uilayoutguideaspectfitting/aspectratio)

# aspectRatio (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+

The content’s aspect ratio.

## Declaration

```swift
var aspectRatio: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property represents the ratio of the content’s width to its height. The value of this property must be greater than `0.0` and less than or equal to `100.0`. The default value is `1.0`.

# aspectRatio (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The content’s aspect ratio.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGFloat aspectRatio;
```

<a id="Discussion"></a>

## Discussion

This property represents the ratio of the content’s width to its height. The value of this property must be greater than `0.0` and less than or equal to `100.0`. The default value is `1.0`.
