> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/init(frame:actions:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/init(frame:actions:))

# init(frame:actions:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a segmented control with the given frame and adds segments for the actions you specify.

## Declaration

```swift
convenience init(frame: CGRect, actions: [UIAction])
```

## Parameters

- `frame`: A rectangle that specifies the segmented control’s frame in a superview’s coordinate system.
- `actions`: An array of [UIAction](../uiaction.md) objects.

<a id="Discussion"></a>

## Discussion

Segments prefer images over titles when the action contains both. Selecting a segment invokes the action’s [UIActionHandler](../uiactionhandler.md), as well as handlers for the [valueChanged](../uicontrol/event/valuechanged.md) and [primaryActionTriggered](../uicontrol/event/primaryactiontriggered.md) control events.

## See Also

### Creating a segmented control

- [init(items:)](init%28items_%29.md): Creates a segmented control with segments having the given titles or images.
- [init(frame:)](init%28frame_%29.md): Creates an empty segmented control with the frame you specify.
- [init(coder:)](init%28coder_%29.md): Creates a segmented control with data from an unarchiver.

# initWithFrame:actions: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a segmented control with the given frame and adds segments for the actions you specify.

## Declaration

```objectivec
- (instancetype) initWithFrame:(CGRect) frame actions:(NSArray<UIAction *> *) actions;
```

## Parameters

- `frame`: A rectangle that specifies the segmented control’s frame in a superview’s coordinate system.
- `actions`: An array of [UIAction](../uiaction.md) objects.

<a id="Discussion"></a>

## Discussion

Segments prefer images over titles when the action contains both. Selecting a segment invokes the action’s [UIActionHandler](../uiactionhandler.md), as well as handlers for the [UIControlEventValueChanged](../uicontrol/event/valuechanged.md) and [UIControlEventPrimaryActionTriggered](../uicontrol/event/primaryactiontriggered.md) control events.

## See Also

### Creating a segmented control

- [initWithItems:](init%28items_%29.md): Creates a segmented control with segments having the given titles or images.
- [initWithFrame:](init%28frame_%29.md): Creates an empty segmented control with the frame you specify.
- [initWithCoder:](init%28coder_%29.md): Creates a segmented control with data from an unarchiver.
