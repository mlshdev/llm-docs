> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview/configurationstate-7xj7r](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/configurationstate-7xj7r)

# configurationState

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The current configuration state of the view.

## Declaration

```swift
@MainActor @objc(_bridgedConfigurationState) @preconcurrency dynamic var configurationState: UIViewConfigurationState { get }
```

<a id="Discussion"></a>

## Discussion

To add your own custom state, see [UIConfigurationStateCustomKey](../uiconfigurationstatecustomkey.md).

## See Also

### Managing the state

- [setNeedsUpdateConfiguration()](setneedsupdateconfiguration%28%29.md): Informs the view to update its configuration for its current state.
- [updateConfiguration(using:)](updateconfiguration%28using_%29.md): Updates the view’s configuration using the current state.
- [configurationUpdateHandler](configurationupdatehandler-49slo.md): A block for handling updates to the view’s configuration using the current state.
- [UITableViewHeaderFooterView.ConfigurationUpdateHandler](configurationupdatehandler-swift.typealias.md): The type of block for handling updates to the view’s configuration using the current state.
