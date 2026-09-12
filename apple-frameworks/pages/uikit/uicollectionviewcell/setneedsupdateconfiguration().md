> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcell/setneedsupdateconfiguration()](https://developer.apple.com/documentation/uikit/uicollectionviewcell/setneedsupdateconfiguration())

# setNeedsUpdateConfiguration() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Informs the cell to update its configuration for its current state.

## Declaration

```swift
func setNeedsUpdateConfiguration()
```

<a id="Discussion"></a>

## Discussion

You call this method when you need the cell to update its configuration according to the current configuration state. The system calls this method automatically when the cell’s [configurationState](configurationstate-4269k.md) changes, as well as in other circumstances that may require an update. The system might combine multiple requests into a single update.

If you add custom states to the cell’s configuration state, make sure to call this method every time those custom states change.

## See Also

### Managing the state

- [configurationState](configurationstate-4u37h.md): The current configuration state of the cell.
- [updateConfiguration(using:)](updateconfiguration%28using_%29.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](configurationupdatehandler-7rqbu.md): A block for handling updates to the cell’s configuration using the current state.
- [UICollectionViewCell.ConfigurationUpdateHandler](configurationupdatehandler-swift.typealias.md): The type of block for handling updates to the cell’s configuration using the current state.
- [isSelected](isselected.md): The selection state of the cell.
- [isHighlighted](ishighlighted.md): The highlight state of the cell.

# setNeedsUpdateConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Informs the cell to update its configuration for its current state.

## Declaration

```objectivec
- (void) setNeedsUpdateConfiguration;
```

<a id="Discussion"></a>

## Discussion

You call this method when you need the cell to update its configuration according to the current configuration state. The system calls this method automatically when the cell’s [configurationState](configurationstate-4269k.md) changes, as well as in other circumstances that may require an update. The system might combine multiple requests into a single update.

If you add custom states to the cell’s configuration state, make sure to call this method every time those custom states change.

## See Also

### Managing the state

- [configurationState](configurationstate-4269k.md): The current configuration state of the cell.
- [updateConfigurationUsingState:](updateconfigurationusingstate_.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](configurationupdatehandler-ajhn.md): A block for handling updates to the cell’s configuration using the current state.
- [UICollectionViewCellConfigurationUpdateHandler](../uicollectionviewcellconfigurationupdatehandler.md): The type of block for handling updates to the cell’s configuration using the current state.
- [selected](isselected.md): The selection state of the cell.
- [highlighted](ishighlighted.md): The highlight state of the cell.
