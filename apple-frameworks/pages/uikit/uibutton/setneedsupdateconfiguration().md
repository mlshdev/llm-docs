> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/setneedsupdateconfiguration()](https://developer.apple.com/documentation/uikit/uibutton/setneedsupdateconfiguration())

# setNeedsUpdateConfiguration() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Requests the system update the button configuration.

## Declaration

```swift
func setNeedsUpdateConfiguration()
```

<a id="Discussion"></a>

## Discussion

Call this method to make the system call [updateConfiguration()](updateconfiguration%28%29.md). The system calls this method automatically when the button’s state changes. If you call this method multiple times before the system calls [updateConfiguration()](updateconfiguration%28%29.md), the system calls [updateConfiguration()](updateconfiguration%28%29.md) once.

## See Also

### Managing the appearance with a configuration object

- [configuration](configuration-5rlyb.md): The configuration for the button’s appearance.
- [automaticallyUpdatesConfiguration](automaticallyupdatesconfiguration.md): A Boolean value that determines whether the button configuration changes when button’s state changes.
- [updateConfiguration()](updateconfiguration%28%29.md): Updates the button configuration in response to a button state change.
- [configurationUpdateHandler](configurationupdatehandler-swift.property.md): A closure that executes when the button state changes.
- [UIButton.ConfigurationUpdateHandler](configurationupdatehandler-swift.typealias.md): A closure to update the configuration of a button.

# setNeedsUpdateConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Requests the system update the button configuration.

## Declaration

```objectivec
- (void) setNeedsUpdateConfiguration;
```

<a id="Discussion"></a>

## Discussion

Call this method to make the system call [updateConfiguration](updateconfiguration%28%29.md). The system calls this method automatically when the button’s state changes. If you call this method multiple times before the system calls [updateConfiguration](updateconfiguration%28%29.md), the system calls [updateConfiguration](updateconfiguration%28%29.md) once.

## See Also

### Managing the appearance with a configuration object

- [configuration](configuration-7gz60.md): The configuration for the button’s appearance.
- [automaticallyUpdatesConfiguration](automaticallyupdatesconfiguration.md): A Boolean value that determines whether the button configuration changes when button’s state changes.
- [updateConfiguration](updateconfiguration%28%29.md): Updates the button configuration in response to a button state change.
- [configurationUpdateHandler](configurationupdatehandler-swift.property.md): A closure that executes when the button state changes.
- [UIButtonConfigurationUpdateHandler](configurationupdatehandler-swift.typealias.md): A closure to update the configuration of a button.
