> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/isexclusivetouch](https://developer.apple.com/documentation/uikit/uiview/isexclusivetouch)

# isExclusiveTouch (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A Boolean value that indicates whether the receiver handles touch events exclusively.

## Declaration

```swift
var isExclusiveTouch: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) causes the receiver to block the delivery of touch events to other views in the same window. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the event-related behavior

- [isUserInteractionEnabled](isuserinteractionenabled.md): A Boolean value that determines whether user events are ignored and removed from the event queue.
- [isMultipleTouchEnabled](ismultipletouchenabled.md): A Boolean value that indicates whether the view receives more than one touch at a time.

# exclusiveTouch (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS · watchOS

A Boolean value that indicates whether the receiver handles touch events exclusively.

## Declaration

```objectivec
@property (nonatomic, getter=isExclusiveTouch) BOOL exclusiveTouch;
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) causes the receiver to block the delivery of touch events to other views in the same window. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the event-related behavior

- [userInteractionEnabled](isuserinteractionenabled.md): A Boolean value that determines whether user events are ignored and removed from the event queue.
- [multipleTouchEnabled](ismultipletouchenabled.md): A Boolean value that indicates whether the view receives more than one touch at a time.
