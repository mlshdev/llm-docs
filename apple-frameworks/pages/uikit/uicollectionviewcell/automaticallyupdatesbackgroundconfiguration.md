> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcell/automaticallyupdatesbackgroundconfiguration](https://developer.apple.com/documentation/uikit/uicollectionviewcell/automaticallyupdatesbackgroundconfiguration)

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

When this value is [true](https://developer.apple.com/documentation/swift/true), the cell automatically calls `updated(for:)` on its [backgroundConfiguration](backgroundconfiguration-39dc0.md) when the cell’s [configurationState](configurationstate-4269k.md) changes, and applies the updated configuration back to the cell. The default value is [true](https://developer.apple.com/documentation/swift/true).

If you override [updateConfiguration(using:)](updateconfiguration%28using_%29.md) to manually update and customize the background configuration, disable automatic updates by setting this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the background

- [defaultBackgroundConfiguration()](defaultbackgroundconfiguration%28%29.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](backgroundconfiguration-rgj4.md): The current background configuration of the cell.
- [backgroundView](backgroundview.md): The view that displays behind the cell’s other content.
- [selectedBackgroundView](selectedbackgroundview.md): The view that displays just above the background view for a selected cell.

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

When this value is [true](https://developer.apple.com/documentation/swift/true), the cell automatically calls `updated(for:)` on its [backgroundConfiguration](backgroundconfiguration-39dc0.md) when the cell’s [configurationState](configurationstate-4269k.md) changes, and applies the updated configuration back to the cell. The default value is [true](https://developer.apple.com/documentation/swift/true).

If you override [updateConfiguration(using:)](updateconfiguration%28using_%29.md) to manually update and customize the background configuration, disable automatic updates by setting this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the background

- [defaultBackgroundConfiguration](defaultbackgroundconfiguration.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](backgroundconfiguration-39dc0.md): The current background configuration of the cell.
- [backgroundView](backgroundview.md): The view that displays behind the cell’s other content.
- [selectedBackgroundView](selectedbackgroundview.md): The view that displays just above the background view for a selected cell.
