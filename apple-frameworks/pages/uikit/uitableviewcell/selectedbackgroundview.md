> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/selectedbackgroundview](https://developer.apple.com/documentation/uikit/uitableviewcell/selectedbackgroundview)

# selectedBackgroundView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view to use as the background for a selected cell.

## Declaration

```swift
var selectedBackgroundView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

[UITableViewCell](../uitableviewcell.md) adds the value of this property as a subview only when the cell has a selected state. It adds the selected background view as a subview directly above the background view ([backgroundView](backgroundview.md)) if it isn’t `nil`, or behind all other views. Calling [setSelected(\_:animated:)](setselected%28__animated_%29.md) causes the selected background view to animate in and out with an alpha fade.

A background configuration is mutually exclusive with background views, so you must use one approach or the other. Setting a non-`nil` value for this property resets [backgroundConfiguration](backgroundconfiguration-24e8e.md) to `nil`.

## See Also

### Configuring the background

- [defaultBackgroundConfiguration()](defaultbackgroundconfiguration%28%29.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](backgroundconfiguration-24e8e.md): The current background configuration of the cell.
- [automaticallyUpdatesBackgroundConfiguration](automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.
- [backgroundView](backgroundview.md): The view to use as the background of the cell.
- [multipleSelectionBackgroundView](multipleselectionbackgroundview.md): The background view to use for a selected cell when the table view allows multiple row selections.

# selectedBackgroundView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view to use as the background for a selected cell.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * selectedBackgroundView;
```

<a id="Discussion"></a>

## Discussion

[UITableViewCell](../uitableviewcell.md) adds the value of this property as a subview only when the cell has a selected state. It adds the selected background view as a subview directly above the background view ([backgroundView](backgroundview.md)) if it isn’t `nil`, or behind all other views. Calling [setSelected:animated:](setselected%28__animated_%29.md) causes the selected background view to animate in and out with an alpha fade.

A background configuration is mutually exclusive with background views, so you must use one approach or the other. Setting a non-`nil` value for this property resets [backgroundConfiguration](backgroundconfiguration-24e8e.md) to `nil`.

## See Also

### Configuring the background

- [defaultBackgroundConfiguration](defaultbackgroundconfiguration.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](backgroundconfiguration-93a2v.md): The current background configuration of the cell.
- [automaticallyUpdatesBackgroundConfiguration](automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.
- [backgroundView](backgroundview.md): The view to use as the background of the cell.
- [multipleSelectionBackgroundView](multipleselectionbackgroundview.md): The background view to use for a selected cell when the table view allows multiple row selections.
