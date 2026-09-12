> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/isuserinteractionenabled](https://developer.apple.com/documentation/uikit/uilabel/isuserinteractionenabled)

# isUserInteractionEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the system ignores and removes user events for this label from the event queue.

## Declaration

```swift
var isUserInteractionEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[UILabel](../uilabel.md) inherits this property from the [UIView](../uiview.md) parent class. This class changes the default value of this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [isUserInteractionEnabled](../uiview/isuserinteractionenabled.md): A Boolean value that determines whether user events are ignored and removed from the event queue.

### Accessing additional attributes

- [clipsToBounds](../uilabel-clipstobounds.md): A Boolean value that determines whether subviews are confined to the bounds of the view.

# userInteractionEnabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the system ignores and removes user events for this label from the event queue.

## Declaration

```objectivec
@property (nonatomic, getter=isUserInteractionEnabled) BOOL userInteractionEnabled;
```

<a id="Discussion"></a>

## Discussion

[UILabel](../uilabel.md) inherits this property from the [UIView](../uiview.md) parent class. This class changes the default value of this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [userInteractionEnabled](../uiview/isuserinteractionenabled.md): A Boolean value that determines whether user events are ignored and removed from the event queue.

### Accessing additional attributes

- [clipsToBounds](../uilabel-clipstobounds.md): A Boolean value that determines whether subviews are confined to the bounds of the view.
