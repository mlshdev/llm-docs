> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/init(configuration:primaryaction:)](https://developer.apple.com/documentation/uikit/uibutton/init(configuration:primaryaction:))

# init(configuration:primaryAction:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

Creates a new button with the specified configuration and registers the primary action event.

## Declaration

```swift
@MainActor @preconcurrency convenience init(configuration: UIButton.Configuration, primaryAction: UIAction? = nil)
```

## Parameters

- `configuration`: The button configuration.
- `primaryAction`: The action to perform for the [primaryActionTriggered](../uicontrol/event/primaryactiontriggered.md) control event.

<a id="Discussion"></a>

## Discussion

If the primary action contains a title or an image, this method copies them to the configuration and the button displays them.

## See Also

### Creating buttons from a configuration object

- [UIButton.Configuration](configuration-swift.struct.md): A configuration that specifies the appearance and behavior of a button and its contents.
