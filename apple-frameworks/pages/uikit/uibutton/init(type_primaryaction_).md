> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/init(type:primaryaction:)](https://developer.apple.com/documentation/uikit/uibutton/init(type:primaryaction:))

# init(type:primaryAction:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates a new button with the specified type, registers the primary action event, and sets the title and image to the action’s title and image.

## Declaration

```swift
@MainActor @preconcurrency convenience init(type buttonType: UIButton.ButtonType = .system, primaryAction: UIAction?)
```

## Parameters

- `buttonType`: The type of button.
- `primaryAction`: The action to perform when the button is selected. The button registers this action for the [primaryActionTriggered](../uicontrol/event/primaryactiontriggered.md) control event and sets the title and image properties to the action’s title and image.

## See Also

### Creating buttons of a specific type

- [init(type:)](init%28type_%29.md): Creates and returns a new button of the specified type.
- [UIButton.ButtonType](buttontype-swift.enum.md): Specifies the style of a button.
