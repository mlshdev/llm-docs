> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview/backgroundview](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/backgroundview)

# backgroundView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The background view of the header or footer.

## Declaration

```swift
var backgroundView: UIView? { get set }
```

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

The view in this property appears behind the view in the [contentView](contentview.md) property and displays static background content behind the header or footer. For example, you might assign an image view to this property and use it to display a custom background image.

A background configuration is mutually exclusive with background views, so you must use one approach or the other. Setting a non-`nil` value for this property resets [backgroundConfiguration](backgroundconfiguration-52wng.md) to `nil`.

## See Also

### Configuring the background

- [defaultBackgroundConfiguration()](defaultbackgroundconfiguration%28%29.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](backgroundconfiguration-52wng.md): The current background configuration of the view.
- [automaticallyUpdatesBackgroundConfiguration](automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the view automatically updates its background configuration when its state changes.

# backgroundView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The background view of the header or footer.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * backgroundView;
```

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

The view in this property appears behind the view in the [contentView](contentview.md) property and displays static background content behind the header or footer. For example, you might assign an image view to this property and use it to display a custom background image.

A background configuration is mutually exclusive with background views, so you must use one approach or the other. Setting a non-`nil` value for this property resets [backgroundConfiguration](backgroundconfiguration-52wng.md) to `nil`.

## See Also

### Configuring the background

- [defaultBackgroundConfiguration](defaultbackgroundconfiguration.md): Retrieves a background configuration with system default values.
- [backgroundConfiguration](backgroundconfiguration-2o8ke.md): The current background configuration of the view.
- [automaticallyUpdatesBackgroundConfiguration](automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the view automatically updates its background configuration when its state changes.
