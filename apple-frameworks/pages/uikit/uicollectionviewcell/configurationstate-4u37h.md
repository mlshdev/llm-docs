> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcell/configurationstate-4u37h](https://developer.apple.com/documentation/uikit/uicollectionviewcell/configurationstate-4u37h)

# configurationState

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The current configuration state of the cell.

## Declaration

```swift
@MainActor @objc(_bridgedConfigurationState) @preconcurrency dynamic var configurationState: UICellConfigurationState { get }
```

<a id="Discussion"></a>

## Discussion

To add your own custom state, see [UIConfigurationStateCustomKey](../uiconfigurationstatecustomkey.md).

## See Also

### Managing the state

- [setNeedsUpdateConfiguration()](setneedsupdateconfiguration%28%29.md): Informs the cell to update its configuration for its current state.
- [updateConfiguration(using:)](updateconfiguration%28using_%29.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](configurationupdatehandler-7rqbu.md): A block for handling updates to the cell’s configuration using the current state.
- [UICollectionViewCell.ConfigurationUpdateHandler](configurationupdatehandler-swift.typealias.md): The type of block for handling updates to the cell’s configuration using the current state.
- [isSelected](isselected.md): The selection state of the cell.
- [isHighlighted](ishighlighted.md): The highlight state of the cell.
