> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcell/backgroundconfiguration-rgj4](https://developer.apple.com/documentation/uikit/uicollectionviewcell/backgroundconfiguration-rgj4)

# backgroundConfiguration

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The current background configuration of the cell.

## Declaration

```swift
@MainActor @preconcurrency var backgroundConfiguration: UIBackgroundConfiguration? { get set }
```

<a id="Discussion"></a>

## Discussion

Using a background configuration, you can obtain system default background styling for a variety of different cell states. Create a background configuration with one of the default system styles, customize the configuration to match your cell’s style as necessary, and assign the configuration to this property.

```swift
var backgroundConfig = UIBackgroundConfiguration.listPlainCell()

// Set a nil background color to use the view's tint color. 
backgroundConfig.backgroundColor = nil 

cell.backgroundConfiguration = backgroundConfig 
```

A background configuration is mutually exclusive with background views, so you must use one approach or the other. Setting a non-`nil` value for this property resets the following APIs to `nil`:

- [backgroundColor](../uiview/backgroundcolor.md)
- [backgroundView](backgroundview.md)
- [selectedBackgroundView](selectedbackgroundview.md)

## See Also

### Configuring the background

- [defaultBackgroundConfiguration()](defaultbackgroundconfiguration%28%29.md): Retrieves a background configuration with system default values.
- [automaticallyUpdatesBackgroundConfiguration](automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.
- [backgroundView](backgroundview.md): The view that displays behind the cell’s other content.
- [selectedBackgroundView](selectedbackgroundview.md): The view that displays just above the background view for a selected cell.
