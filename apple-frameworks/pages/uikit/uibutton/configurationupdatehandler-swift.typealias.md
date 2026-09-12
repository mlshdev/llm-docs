> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configurationupdatehandler-swift.typealias](https://developer.apple.com/documentation/uikit/uibutton/configurationupdatehandler-swift.typealias)

# UIButton.ConfigurationUpdateHandler (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A closure to update the configuration of a button.

## Declaration

```swift
typealias ConfigurationUpdateHandler = (UIButton) -> Void
```

## Parameters

- `button`: The button to update.

## See Also

### Managing the appearance with a configuration object

- [configuration](configuration-5rlyb.md): The configuration for the button’s appearance.
- [automaticallyUpdatesConfiguration](automaticallyupdatesconfiguration.md): A Boolean value that determines whether the button configuration changes when button’s state changes.
- [setNeedsUpdateConfiguration()](setneedsupdateconfiguration%28%29.md): Requests the system update the button configuration.
- [updateConfiguration()](updateconfiguration%28%29.md): Updates the button configuration in response to a button state change.
- [configurationUpdateHandler](configurationupdatehandler-swift.property.md): A closure that executes when the button state changes.

# UIButtonConfigurationUpdateHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A closure to update the configuration of a button.

## Declaration

```objectivec
typedef void (^)(__kindof UIButton *) UIButtonConfigurationUpdateHandler;
```

## Parameters

- `button`: The button to update.

## See Also

### Managing the appearance with a configuration object

- [configuration](configuration-7gz60.md): The configuration for the button’s appearance.
- [automaticallyUpdatesConfiguration](automaticallyupdatesconfiguration.md): A Boolean value that determines whether the button configuration changes when button’s state changes.
- [setNeedsUpdateConfiguration](setneedsupdateconfiguration%28%29.md): Requests the system update the button configuration.
- [updateConfiguration](updateconfiguration%28%29.md): Updates the button configuration in response to a button state change.
- [configurationUpdateHandler](configurationupdatehandler-swift.property.md): A closure that executes when the button state changes.
