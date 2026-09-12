> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview/configurationupdatehandler-swift.typealias](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/configurationupdatehandler-swift.typealias)

# UITableViewHeaderFooterView.ConfigurationUpdateHandler

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

The type of block for handling updates to the view’s configuration using the current state.

## Declaration

```swift
typealias ConfigurationUpdateHandler = (UITableViewHeaderFooterView, UIViewConfigurationState) -> Void
```

## Parameters

- `headerFooterView`: The header footer view to configure.
- `state`: The new state to use for updating the header footer view’s configuration.

## See Also

### Managing the state

- [configurationState](configurationstate-7xj7r.md): The current configuration state of the view.
- [setNeedsUpdateConfiguration()](setneedsupdateconfiguration%28%29.md): Informs the view to update its configuration for its current state.
- [updateConfiguration(using:)](updateconfiguration%28using_%29.md): Updates the view’s configuration using the current state.
- [configurationUpdateHandler](configurationupdatehandler-49slo.md): A block for handling updates to the view’s configuration using the current state.
