> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/init(frame:primaryaction:)](https://developer.apple.com/documentation/uikit/uibutton/init(frame:primaryaction:))

# init(frame:primaryAction:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a new button with the specified frame, registers the primary action event, and sets the title and image to the action’s title and image.

## Declaration

```swift
convenience init(frame: CGRect, primaryAction: UIAction?)
```

## Parameters

- `frame`: The frame rectangle for the view, measured in points.
- `primaryAction`: The action to perform when the button is selected. The button registers this action for the [primaryActionTriggered](../uicontrol/event/primaryactiontriggered.md) control event and sets the title and image properties to the action’s title and image.

## See Also

### Creating buttons

- [init(frame:)](init%28frame_%29.md): Creates a new button with the specified frame.
- [init(coder:)](init%28coder_%29.md): Creates a new button with data in an unarchiver.

# initWithFrame:primaryAction: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a new button with the specified frame, registers the primary action event, and sets the title and image to the action’s title and image.

## Declaration

```objectivec
- (instancetype) initWithFrame:(CGRect) frame primaryAction:(UIAction *) primaryAction;
```

## Parameters

- `frame`: The frame rectangle for the view, measured in points.
- `primaryAction`: The action to perform when the button is selected. The button registers this action for the [UIControlEventPrimaryActionTriggered](../uicontrol/event/primaryactiontriggered.md) control event and sets the title and image properties to the action’s title and image.

## See Also

### Creating buttons

- [initWithFrame:](init%28frame_%29.md): Creates a new button with the specified frame.
- [initWithCoder:](init%28coder_%29.md): Creates a new button with data in an unarchiver.
