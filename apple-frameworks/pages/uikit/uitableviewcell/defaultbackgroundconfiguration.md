> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/defaultbackgroundconfiguration](https://developer.apple.com/documentation/uikit/uitableviewcell/defaultbackgroundconfiguration)

# defaultBackgroundConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Retrieves a background configuration with system default values.

## Declaration

```objectivec
- (UIBackgroundConfiguration *) defaultBackgroundConfiguration;
```

<a id="return-value"></a>

## Return Value

A default background configuration. The system determines default values for the configuration according to the section where the cell appears.

## See Also

### Configuring the background

- [backgroundConfiguration](backgroundconfiguration-93a2v.md): The current background configuration of the cell.
- [automaticallyUpdatesBackgroundConfiguration](automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.
- [backgroundView](backgroundview.md): The view to use as the background of the cell.
- [selectedBackgroundView](selectedbackgroundview.md): The view to use as the background for a selected cell.
- [multipleSelectionBackgroundView](multipleselectionbackgroundview.md): The background view to use for a selected cell when the table view allows multiple row selections.
