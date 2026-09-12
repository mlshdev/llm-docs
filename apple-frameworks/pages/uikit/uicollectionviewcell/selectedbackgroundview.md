> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcell/selectedbackgroundview](https://developer.apple.com/documentation/uikit/uicollectionviewcell/selectedbackgroundview)

# selectedBackgroundView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view that displays just above the background view for a selected cell.

## Declaration

```swift
var selectedBackgroundView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use this view to give a selected cell a custom appearance. When the cell has a selected state, this view layers above the [backgroundView](backgroundview.md) and behind the [contentView](contentview.md).

A background configuration is mutually exclusive with background views, so you must use one approach or the other. Setting a non-`nil` value for this property resets [backgroundConfiguration](backgroundconfiguration-rgj4.md) to `nil`.

## See Also

### Configuring the background

- [defaultBackgroundConfiguration()](defaultbackgroundconfiguration%28%29.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](backgroundconfiguration-rgj4.md): The current background configuration of the cell.
- [automaticallyUpdatesBackgroundConfiguration](automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.
- [backgroundView](backgroundview.md): The view that displays behind the cell’s other content.

# selectedBackgroundView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view that displays just above the background view for a selected cell.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * selectedBackgroundView;
```

<a id="Discussion"></a>

## Discussion

You can use this view to give a selected cell a custom appearance. When the cell has a selected state, this view layers above the [backgroundView](backgroundview.md) and behind the [contentView](contentview.md).

A background configuration is mutually exclusive with background views, so you must use one approach or the other. Setting a non-`nil` value for this property resets [backgroundConfiguration](backgroundconfiguration-rgj4.md) to `nil`.

## See Also

### Configuring the background

- [defaultBackgroundConfiguration](defaultbackgroundconfiguration.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](backgroundconfiguration-39dc0.md): The current background configuration of the cell.
- [automaticallyUpdatesBackgroundConfiguration](automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.
- [backgroundView](backgroundview.md): The view that displays behind the cell’s other content.
