> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/multipleselectionbackgroundview](https://developer.apple.com/documentation/uikit/uitableviewcell/multipleselectionbackgroundview)

# multipleSelectionBackgroundView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The background view to use for a selected cell when the table view allows multiple row selections.

## Declaration

```swift
var multipleSelectionBackgroundView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property isn’t `nil`, this view becomes the background view for a selected cell when the table view allows multiple row selections. You enable multiple row selections through the [allowsMultipleSelection](../uitableview/allowsmultipleselection.md) and [allowsMultipleSelectionDuringEditing](../uitableview/allowsmultipleselectionduringediting.md) properties of [UITableView](../uitableview.md).

A background configuration is mutually exclusive with background views, so you must use one approach or the other. Setting a non-`nil` value for this property resets [backgroundConfiguration](backgroundconfiguration-24e8e.md) to `nil`.

## See Also

### Configuring the background

- [defaultBackgroundConfiguration()](defaultbackgroundconfiguration%28%29.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](backgroundconfiguration-24e8e.md): The current background configuration of the cell.
- [automaticallyUpdatesBackgroundConfiguration](automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.
- [backgroundView](backgroundview.md): The view to use as the background of the cell.
- [selectedBackgroundView](selectedbackgroundview.md): The view to use as the background for a selected cell.

# multipleSelectionBackgroundView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The background view to use for a selected cell when the table view allows multiple row selections.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * multipleSelectionBackgroundView;
```

<a id="Discussion"></a>

## Discussion

If this property isn’t `nil`, this view becomes the background view for a selected cell when the table view allows multiple row selections. You enable multiple row selections through the [allowsMultipleSelection](../uitableview/allowsmultipleselection.md) and [allowsMultipleSelectionDuringEditing](../uitableview/allowsmultipleselectionduringediting.md) properties of [UITableView](../uitableview.md).

A background configuration is mutually exclusive with background views, so you must use one approach or the other. Setting a non-`nil` value for this property resets [backgroundConfiguration](backgroundconfiguration-24e8e.md) to `nil`.

## See Also

### Configuring the background

- [defaultBackgroundConfiguration](defaultbackgroundconfiguration.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](backgroundconfiguration-93a2v.md): The current background configuration of the cell.
- [automaticallyUpdatesBackgroundConfiguration](automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.
- [backgroundView](backgroundview.md): The view to use as the background of the cell.
- [selectedBackgroundView](selectedbackgroundview.md): The view to use as the background for a selected cell.
