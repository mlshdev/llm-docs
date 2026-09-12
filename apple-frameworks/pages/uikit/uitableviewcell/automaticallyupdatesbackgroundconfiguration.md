> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/automaticallyupdatesbackgroundconfiguration](https://developer.apple.com/documentation/uikit/uitableviewcell/automaticallyupdatesbackgroundconfiguration)

# automaticallyUpdatesBackgroundConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.

## Declaration

```swift
var automaticallyUpdatesBackgroundConfiguration: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this value is [true](https://developer.apple.com/documentation/swift/true), the cell automatically calls `updated(for:)` on its [backgroundConfiguration](backgroundconfiguration-24e8e.md) when the cell’s [configurationState](configurationstate-4xwj0.md) changes, and applies the updated configuration back to the cell. The default value is [true](https://developer.apple.com/documentation/swift/true).

If you override [updateConfiguration(using:)](updateconfiguration%28using_%29.md) to manually update and customize the background configuration, disable automatic updates by setting this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the background

- [defaultBackgroundConfiguration()](defaultbackgroundconfiguration%28%29.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](backgroundconfiguration-24e8e.md): The current background configuration of the cell.
- [backgroundView](backgroundview.md): The view to use as the background of the cell.
- [selectedBackgroundView](selectedbackgroundview.md): The view to use as the background for a selected cell.
- [multipleSelectionBackgroundView](multipleselectionbackgroundview.md): The background view to use for a selected cell when the table view allows multiple row selections.

# automaticallyUpdatesBackgroundConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.

## Declaration

```objectivec
@property (nonatomic) BOOL automaticallyUpdatesBackgroundConfiguration;
```

<a id="Discussion"></a>

## Discussion

When this value is [true](https://developer.apple.com/documentation/swift/true), the cell automatically calls `updated(for:)` on its [backgroundConfiguration](backgroundconfiguration-24e8e.md) when the cell’s [configurationState](configurationstate-4xwj0.md) changes, and applies the updated configuration back to the cell. The default value is [true](https://developer.apple.com/documentation/swift/true).

If you override [updateConfiguration(using:)](updateconfiguration%28using_%29.md) to manually update and customize the background configuration, disable automatic updates by setting this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the background

- [defaultBackgroundConfiguration](defaultbackgroundconfiguration.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](backgroundconfiguration-93a2v.md): The current background configuration of the cell.
- [backgroundView](backgroundview.md): The view to use as the background of the cell.
- [selectedBackgroundView](selectedbackgroundview.md): The view to use as the background for a selected cell.
- [multipleSelectionBackgroundView](multipleselectionbackgroundview.md): The background view to use for a selected cell when the table view allows multiple row selections.
