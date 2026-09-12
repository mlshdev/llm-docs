> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/preferredmaxlayoutwidth](https://developer.apple.com/documentation/uikit/uilabel/preferredmaxlayoutwidth)

# preferredMaxLayoutWidth (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The preferred maximum width, in points, for a multiline label.

## Declaration

```swift
var preferredMaxLayoutWidth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property affects the size of the label when the system applies layout constraints to it. During layout, if the text extends beyond the width specified by this property, the additional text flows to one or more new lines, increasing the height of the label.

# preferredMaxLayoutWidth (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The preferred maximum width, in points, for a multiline label.

## Declaration

```objectivec
@property (nonatomic) CGFloat preferredMaxLayoutWidth;
```

<a id="Discussion"></a>

## Discussion

This property affects the size of the label when the system applies layout constraints to it. During layout, if the text extends beyond the width specified by this property, the additional text flows to one or more new lines, increasing the height of the label.
