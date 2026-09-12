> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/automaticallyupdatesconfiguration](https://developer.apple.com/documentation/uikit/uibutton/automaticallyupdatesconfiguration)

# automaticallyUpdatesConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that determines whether the button configuration changes when button’s state changes.

## Declaration

```swift
var automaticallyUpdatesConfiguration: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to have the button call [updated(for:)](configuration-swift.struct/updated%28for_%29.md) (Swift) or [updatedConfigurationForButton:](../uibuttonconfiguration/updatedconfigurationforbutton_.md) (Objective-C) when the button state changes and apply the changes to the button. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the appearance with a configuration object

- [configuration](configuration-5rlyb.md): The configuration for the button’s appearance.
- [setNeedsUpdateConfiguration()](setneedsupdateconfiguration%28%29.md): Requests the system update the button configuration.
- [updateConfiguration()](updateconfiguration%28%29.md): Updates the button configuration in response to a button state change.
- [configurationUpdateHandler](configurationupdatehandler-swift.property.md): A closure that executes when the button state changes.
- [UIButton.ConfigurationUpdateHandler](configurationupdatehandler-swift.typealias.md): A closure to update the configuration of a button.

# automaticallyUpdatesConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that determines whether the button configuration changes when button’s state changes.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL automaticallyUpdatesConfiguration;
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to have the button call [updated(for:)](configuration-swift.struct/updated%28for_%29.md) (Swift) or [updatedConfigurationForButton:](../uibuttonconfiguration/updatedconfigurationforbutton_.md) (Objective-C) when the button state changes and apply the changes to the button. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the appearance with a configuration object

- [configuration](configuration-7gz60.md): The configuration for the button’s appearance.
- [setNeedsUpdateConfiguration](setneedsupdateconfiguration%28%29.md): Requests the system update the button configuration.
- [updateConfiguration](updateconfiguration%28%29.md): Updates the button configuration in response to a button state change.
- [configurationUpdateHandler](configurationupdatehandler-swift.property.md): A closure that executes when the button state changes.
- [UIButtonConfigurationUpdateHandler](configurationupdatehandler-swift.typealias.md): A closure to update the configuration of a button.
