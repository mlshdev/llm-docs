> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/buttonwithconfiguration:primaryaction:](https://developer.apple.com/documentation/uikit/uibutton/buttonwithconfiguration:primaryaction:)

# buttonWithConfiguration:primaryAction:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a new button with the specified configuration and registers the primary action event.

## Declaration

```objectivec
+ (instancetype) buttonWithConfiguration:(UIButtonConfiguration *) configuration primaryAction:(UIAction *) primaryAction;
```

## Parameters

- `configuration`: The button configuration.
- `primaryAction`: The action to perform for the [UIControlEventPrimaryActionTriggered](../uicontrol/event/primaryactiontriggered.md) control event.

<a id="return-value"></a>

## Return Value

A new button.

<a id="Discussion"></a>

## Discussion

If the primary action contains a title or an image, this method copies them to the configuration and the button displays them.

## See Also

### Creating buttons from a configuration object

- [UIButtonConfiguration](../uibuttonconfiguration.md): A configuration that specifies the appearance and behavior of a button and its contents.
