> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcell/configurationupdatehandler-swift.typealias](https://developer.apple.com/documentation/uikit/uicollectionviewcell/configurationupdatehandler-swift.typealias)

# UICollectionViewCell.ConfigurationUpdateHandler

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

The type of block for handling updates to the cell’s configuration using the current state.

## Declaration

```swift
typealias ConfigurationUpdateHandler = (UICollectionViewCell, UICellConfigurationState) -> Void
```

## Parameters

- `cell`: The collection view cell to configure.
- `state`: The new state to use for updating the cell’s configuration.

## See Also

### Managing the state

- [configurationState](configurationstate-4u37h.md): The current configuration state of the cell.
- [setNeedsUpdateConfiguration()](setneedsupdateconfiguration%28%29.md): Informs the cell to update its configuration for its current state.
- [updateConfiguration(using:)](updateconfiguration%28using_%29.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](configurationupdatehandler-7rqbu.md): A block for handling updates to the cell’s configuration using the current state.
- [isSelected](isselected.md): The selection state of the cell.
- [isHighlighted](ishighlighted.md): The highlight state of the cell.
