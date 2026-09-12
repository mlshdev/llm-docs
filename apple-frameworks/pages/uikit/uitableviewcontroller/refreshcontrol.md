> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcontroller/refreshcontrol](https://developer.apple.com/documentation/uikit/uitableviewcontroller/refreshcontrol)

# refreshControl (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The refresh control used to update the table contents.

## Declaration

```swift
var refreshControl: UIRefreshControl? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`.

Assigning a refresh control to this property adds the control to the view controller’s associated interface. You don’t need to set the frame of the refresh control before associating it with the view controller. The view controller updates the control’s height and width and sets its position appropriately.

The table view controller doesn’t automatically update table’s contents in response to user interactions with the refresh control. When the user initiates a refresh operation, the control generates a [valueChanged](../uicontrol/event/valuechanged.md) event. You must associate a target and action method with this event and use them to refresh your table’s contents.

# refreshControl (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The refresh control used to update the table contents.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIRefreshControl * refreshControl;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`.

Assigning a refresh control to this property adds the control to the view controller’s associated interface. You don’t need to set the frame of the refresh control before associating it with the view controller. The view controller updates the control’s height and width and sets its position appropriately.

The table view controller doesn’t automatically update table’s contents in response to user interactions with the refresh control. When the user initiates a refresh operation, the control generates a [UIControlEventValueChanged](../uicontrol/event/valuechanged.md) event. You must associate a target and action method with this event and use them to refresh your table’s contents.
