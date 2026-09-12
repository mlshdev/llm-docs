> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/configurationstate-5gw4n](https://developer.apple.com/documentation/uikit/uitableviewcell/configurationstate-5gw4n)

# configurationState

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The current configuration state of the cell.

## Declaration

```objectivec
@property (nonatomic, readonly) UICellConfigurationState * configurationState;
```

<a id="Discussion"></a>

## Discussion

To add your own custom state, see [UIConfigurationStateCustomKey](../uiconfigurationstatecustomkey.md).

## See Also

### Managing the state

- [setNeedsUpdateConfiguration](setneedsupdateconfiguration%28%29.md): Informs the cell to update its configuration for its current state.
- [updateConfigurationUsingState:](updateconfigurationusingstate_.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](configurationupdatehandler-746ya.md): A block for handling updates to the cell’s configuration using the current state.
- [UITableViewCellConfigurationUpdateHandler](../uitableviewcellconfigurationupdatehandler.md): The type of block for handling updates to the cell’s configuration using the current state.
