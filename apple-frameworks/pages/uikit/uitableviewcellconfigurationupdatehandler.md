> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcellconfigurationupdatehandler](https://developer.apple.com/documentation/uikit/uitableviewcellconfigurationupdatehandler)

# UITableViewCellConfigurationUpdateHandler

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The type of block for handling updates to the cell’s configuration using the current state.

## Declaration

```objectivec
typedef void (^)(__kindof UITableViewCell *, UICellConfigurationState *) UITableViewCellConfigurationUpdateHandler;
```

## Parameters

- `cell`: The table view cell to configure.
- `state`: The new state to use for updating the cell’s configuration.

## See Also

### Managing the state

- [configurationState](uitableviewcell/configurationstate-5gw4n.md): The current configuration state of the cell.
- [setNeedsUpdateConfiguration](uitableviewcell/setneedsupdateconfiguration%28%29.md): Informs the cell to update its configuration for its current state.
- [updateConfigurationUsingState:](uitableviewcell/updateconfigurationusingstate_.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](uitableviewcell/configurationupdatehandler-746ya.md): A block for handling updates to the cell’s configuration using the current state.
