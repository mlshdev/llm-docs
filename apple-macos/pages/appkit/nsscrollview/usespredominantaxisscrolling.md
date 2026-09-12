> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/usespredominantaxisscrolling](https://developer.apple.com/documentation/appkit/nsscrollview/usespredominantaxisscrolling)

# usesPredominantAxisScrolling (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean that indicates whether the scroll view uses a predominant scrolling axis for content.

## Declaration

```swift
var usesPredominantAxisScrolling: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Some content is scrollable in both the horizontal and vertical axes, but is predominantly scrolled one axis at a time. Other content (such as a drawing canvas) should scroll freely in both axes.

Traditionally this is not an issue with scroll wheels since they can only scroll in one direction at a time. With scroll balls and touch surfaces, it becomes more difficult to determine the user’s intention.

This property helps a scroll view determine the user’s intention by specifying if there is a predominant scrolling axis for content.

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the scroll view uses a predominant scrolling access. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

# usesPredominantAxisScrolling (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean that indicates whether the scroll view uses a predominant scrolling axis for content.

## Declaration

```objectivec
@property BOOL usesPredominantAxisScrolling;
```

<a id="Discussion"></a>

## Discussion

Some content is scrollable in both the horizontal and vertical axes, but is predominantly scrolled one axis at a time. Other content (such as a drawing canvas) should scroll freely in both axes.

Traditionally this is not an issue with scroll wheels since they can only scroll in one direction at a time. With scroll balls and touch surfaces, it becomes more difficult to determine the user’s intention.

This property helps a scroll view determine the user’s intention by specifying if there is a predominant scrolling axis for content.

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the scroll view uses a predominant scrolling access. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).
