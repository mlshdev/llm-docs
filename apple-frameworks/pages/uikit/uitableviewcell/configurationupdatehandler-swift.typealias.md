> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/configurationupdatehandler-swift.typealias](https://developer.apple.com/documentation/uikit/uitableviewcell/configurationupdatehandler-swift.typealias)

# UITableViewCell.ConfigurationUpdateHandler

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

The type of block for handling updates to the cell’s configuration using the current state.

## Declaration

```swift
typealias ConfigurationUpdateHandler = (UITableViewCell, UICellConfigurationState) -> Void
```

## Parameters

- `cell`: The table view cell to configure.
- `state`: The new state to use for updating the cell’s configuration.

## See Also

### Managing the state

- [configurationState](configurationstate-4xwj0.md): The current configuration state of the cell.
- [setNeedsUpdateConfiguration()](setneedsupdateconfiguration%28%29.md): Informs the cell to update its configuration for its current state.
- [updateConfiguration(using:)](updateconfiguration%28using_%29.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](configurationupdatehandler-974.md): A block for handling updates to the cell’s configuration using the current state.
