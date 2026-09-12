> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/buttonwithtype:primaryaction:](https://developer.apple.com/documentation/uikit/uibutton/buttonwithtype:primaryaction:)

# buttonWithType:primaryAction:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a new button with the specified type, registers the primary action event, and sets the title and image to the action’s title and image.

## Declaration

```objectivec
+ (instancetype) buttonWithType:(UIButtonType) buttonType primaryAction:(UIAction *) primaryAction;
```

## Parameters

- `buttonType`: The type of button.
- `primaryAction`: The action to perform when the button is selected. The button registers this action for the [UIControlEventPrimaryActionTriggered](../uicontrol/event/primaryactiontriggered.md) control event and sets the title and image properties to the action’s title and image.

## See Also

### Creating buttons of a specific type

- [buttonWithType:](init%28type_%29.md): Creates and returns a new button of the specified type.
- [UIButtonType](buttontype-swift.enum.md): Specifies the style of a button.
