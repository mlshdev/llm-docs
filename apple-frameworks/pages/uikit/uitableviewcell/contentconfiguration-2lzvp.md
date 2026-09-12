> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/contentconfiguration-2lzvp](https://developer.apple.com/documentation/uikit/uitableviewcell/contentconfiguration-2lzvp)

# contentConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The current content configuration of the cell.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) id<UIContentConfiguration> contentConfiguration;
```

<a id="Discussion"></a>

## Discussion

Using a content configuration, you can set the cell’s content and styling for a variety of different cell states. You can get the default configuration using [defaultContentConfiguration](defaultcontentconfiguration.md), assign your content to the configuration, customize any other properties, and assign it to the view as the current [contentConfiguration](contentconfiguration-2lzvp.md).

Setting a content configuration replaces the existing [contentView](contentview.md) of the cell with a new content view instance from the configuration, or directly applies the configuration to the existing content view if the configuration is compatible with the existing content view type.

The default value is `nil`. After you set a content configuration to this property, setting this property back to `nil` replaces the current content view with a new, empty content view.

## See Also

### Managing the content

- [defaultContentConfiguration](defaultcontentconfiguration.md): Retrieves a default list content configuration for the cell’s style.
- [automaticallyUpdatesContentConfiguration](automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the cell automatically updates its content configuration when its state changes.
- [contentView](contentview.md): The content view of the cell object.
