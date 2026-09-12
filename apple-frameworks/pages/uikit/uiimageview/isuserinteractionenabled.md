> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/isuserinteractionenabled](https://developer.apple.com/documentation/uikit/uiimageview/isuserinteractionenabled)

# isUserInteractionEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether user events are ignored and removed from the event queue.

## Declaration

```swift
var isUserInteractionEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property is inherited from the [UIView](../uiview.md) parent class. This class changes the default value of this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the image view

- [isHighlighted](ishighlighted.md): A Boolean value that determines whether the image is highlighted.
- [tintColor](tintcolor.md): A color used to tint template images in the view hierarchy.

# userInteractionEnabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether user events are ignored and removed from the event queue.

## Declaration

```objectivec
@property (nonatomic, getter=isUserInteractionEnabled) BOOL userInteractionEnabled;
```

<a id="Discussion"></a>

## Discussion

This property is inherited from the [UIView](../uiview.md) parent class. This class changes the default value of this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the image view

- [highlighted](ishighlighted.md): A Boolean value that determines whether the image is highlighted.
- [tintColor](tintcolor.md): A color used to tint template images in the view hierarchy.
