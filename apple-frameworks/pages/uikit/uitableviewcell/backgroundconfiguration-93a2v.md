> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/backgroundconfiguration-93a2v](https://developer.apple.com/documentation/uikit/uitableviewcell/backgroundconfiguration-93a2v)

# backgroundConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The current background configuration of the cell.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIBackgroundConfiguration * backgroundConfiguration;
```

<a id="Discussion"></a>

## Discussion

[UITableViewCell](../uitableviewcell.md) automatically sets up a default background configuration to provide its default appearance.

Using a background configuration, you can obtain system default background styling for a variety of different cell states. Create a background configuration with one of the default system styles, customize the configuration to match your cell’s style as necessary, and assign the configuration to this property.

```objc
UIBackgroundConfiguration *backgroundConfig = [UIBackgroundConfiguration listPlainCellConfiguration];

// Set a nil background color to use the view's tint color.
[backgroundConfig setBackgroundColor:nil];

[cell setBackgroundConfiguration:backgroundConfig];
```

A background configuration is mutually exclusive with background views, so you must use one approach or the other. Setting a non-`nil` value for this property resets the following APIs to `nil`:

- [backgroundColor](../uiview/backgroundcolor.md)
- [backgroundView](backgroundview.md)
- [selectedBackgroundView](selectedbackgroundview.md)
- [multipleSelectionBackgroundView](multipleselectionbackgroundview.md)

## See Also

### Configuring the background

- [defaultBackgroundConfiguration](defaultbackgroundconfiguration.md): Retrieves a background configuration with system default values.
- [automaticallyUpdatesBackgroundConfiguration](automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.
- [backgroundView](backgroundview.md): The view to use as the background of the cell.
- [selectedBackgroundView](selectedbackgroundview.md): The view to use as the background for a selected cell.
- [multipleSelectionBackgroundView](multipleselectionbackgroundview.md): The background view to use for a selected cell when the table view allows multiple row selections.
