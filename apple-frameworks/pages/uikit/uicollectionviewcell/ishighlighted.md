> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcell/ishighlighted](https://developer.apple.com/documentation/uikit/uicollectionviewcell/ishighlighted)

# isHighlighted (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The highlight state of the cell.

## Declaration

```swift
var isHighlighted: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property manages the highlight state of the cell only. The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which indicates that the cell isn’t in a highlighted state.

You typically don’t set the value of this property directly. Instead, the preferred way to select the cell and highlight it’s to use the selection methods of the collection view object.

## See Also

### Managing the state

- [configurationState](configurationstate-4u37h.md): The current configuration state of the cell.
- [setNeedsUpdateConfiguration()](setneedsupdateconfiguration%28%29.md): Informs the cell to update its configuration for its current state.
- [updateConfiguration(using:)](updateconfiguration%28using_%29.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](configurationupdatehandler-7rqbu.md): A block for handling updates to the cell’s configuration using the current state.
- [UICollectionViewCell.ConfigurationUpdateHandler](configurationupdatehandler-swift.typealias.md): The type of block for handling updates to the cell’s configuration using the current state.
- [isSelected](isselected.md): The selection state of the cell.

# highlighted (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The highlight state of the cell.

## Declaration

```objectivec
@property (nonatomic, getter=isHighlighted) BOOL highlighted;
```

<a id="Discussion"></a>

## Discussion

This property manages the highlight state of the cell only. The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which indicates that the cell isn’t in a highlighted state.

You typically don’t set the value of this property directly. Instead, the preferred way to select the cell and highlight it’s to use the selection methods of the collection view object.

## See Also

### Managing the state

- [configurationState](configurationstate-4269k.md): The current configuration state of the cell.
- [setNeedsUpdateConfiguration](setneedsupdateconfiguration%28%29.md): Informs the cell to update its configuration for its current state.
- [updateConfigurationUsingState:](updateconfigurationusingstate_.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](configurationupdatehandler-ajhn.md): A block for handling updates to the cell’s configuration using the current state.
- [UICollectionViewCellConfigurationUpdateHandler](../uicollectionviewcellconfigurationupdatehandler.md): The type of block for handling updates to the cell’s configuration using the current state.
- [selected](isselected.md): The selection state of the cell.
