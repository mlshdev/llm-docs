> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/systembuttonwithprimaryaction:](https://developer.apple.com/documentation/uikit/uibutton/systembuttonwithprimaryaction:)

# systemButtonWithPrimaryAction:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates and returns a system type button, registers the primary action event, and sets the title and image to the action’s title and image.

## Declaration

```objectivec
+ (instancetype) systemButtonWithPrimaryAction:(UIAction *) primaryAction;
```

## Parameters

- `primaryAction`: The action to perform when the button is selected. The button registers this action for the [UIControlEventPrimaryActionTriggered](../uicontrol/event/primaryactiontriggered.md) control event and sets the title and image properties to the action’s title and image.

## See Also

### Creating system buttons

- [systemButtonWithImage:target:action:](systembutton%28with_target_action_%29.md): Creates and returns a system type button with specified image, target, and action.
