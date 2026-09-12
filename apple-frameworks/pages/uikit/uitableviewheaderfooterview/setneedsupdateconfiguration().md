> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview/setneedsupdateconfiguration()](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/setneedsupdateconfiguration())

# setNeedsUpdateConfiguration() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Informs the view to update its configuration for its current state.

## Declaration

```swift
func setNeedsUpdateConfiguration()
```

<a id="Discussion"></a>

## Discussion

You call this method when you need the view to update its configuration according to the current configuration state. The system calls this method automatically when the view’s [configurationState](configurationstate-7xj7r.md) changes, as well as in other circumstances that may require an update. The system might combine multiple requests into a single update.

If you add custom states to the view’s configuration state, make sure to call this method every time those custom states change.

## See Also

### Managing the state

- [configurationState](configurationstate-7xj7r.md): The current configuration state of the view.
- [updateConfiguration(using:)](updateconfiguration%28using_%29.md): Updates the view’s configuration using the current state.
- [configurationUpdateHandler](configurationupdatehandler-49slo.md): A block for handling updates to the view’s configuration using the current state.
- [UITableViewHeaderFooterView.ConfigurationUpdateHandler](configurationupdatehandler-swift.typealias.md): The type of block for handling updates to the view’s configuration using the current state.

# setNeedsUpdateConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Informs the view to update its configuration for its current state.

## Declaration

```objectivec
- (void) setNeedsUpdateConfiguration;
```

<a id="Discussion"></a>

## Discussion

You call this method when you need the view to update its configuration according to the current configuration state. The system calls this method automatically when the view’s [configurationState](configurationstate-7xj7r.md) changes, as well as in other circumstances that may require an update. The system might combine multiple requests into a single update.

If you add custom states to the view’s configuration state, make sure to call this method every time those custom states change.

## See Also

### Managing the state

- [configurationState](configurationstate-9l60r.md): The current configuration state of the view.
- [updateConfigurationUsingState:](updateconfigurationusingstate_.md): Updates the view’s configuration using the current state.
- [configurationUpdateHandler](configurationupdatehandler-3oji2.md): A block for handling updates to the view’s configuration using the current state.
- [UITableViewHeaderFooterViewConfigurationUpdateHandler](../uitableviewheaderfooterviewconfigurationupdatehandler.md): The type of block for handling updates to the view’s configuration using the current state.
