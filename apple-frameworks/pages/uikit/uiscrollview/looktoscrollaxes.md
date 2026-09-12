> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/looktoscrollaxes](https://developer.apple.com/documentation/uikit/uiscrollview/looktoscrollaxes)

# lookToScrollAxes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

Setting lookToScrollAxes turns on Look to Scroll for the scroll view in directions of the defined axis

## Declaration

```swift
var lookToScrollAxes: UIAxis { get set }
```

<a id="discussion"></a>

## Discussion

When enabling Look to Scroll, you should consider the type of content that is in the scroll view. For best experience, this API should be on scrolling area of an app that’s considered “content”. Examples: \- The message body area in Mail, but not the list of messages that’s considered navigation. \- The note body in Notes \- In TV app, the tile design including both horizontal and vertical scrolling views.

Note: Look to Scroll is designed for large and meaningful content. For privacy reasons, exceedingly small scroll views or having an unusually high number of scroll views in a scene could cause Look to Scroll to auto disable.

Additional requirements for enabling Look to Scroll \- There can only be a max of 6 gaze scrolling scroll view per scene \- isPagingEnabled must not be enabled

# lookToScrollAxes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

Setting lookToScrollAxes turns on Look to Scroll for the scroll view in directions of the defined axis

## Declaration

```objectivec
@property (nonatomic) UIAxis lookToScrollAxes;
```

<a id="discussion"></a>

## Discussion

When enabling Look to Scroll, you should consider the type of content that is in the scroll view. For best experience, this API should be on scrolling area of an app that’s considered “content”. Examples: \- The message body area in Mail, but not the list of messages that’s considered navigation. \- The note body in Notes \- In TV app, the tile design including both horizontal and vertical scrolling views.

Note: Look to Scroll is designed for large and meaningful content. For privacy reasons, exceedingly small scroll views or having an unusually high number of scroll views in a scene could cause Look to Scroll to auto disable.

Additional requirements for enabling Look to Scroll \- There can only be a max of 6 gaze scrolling scroll view per scene \- isPagingEnabled must not be enabled
