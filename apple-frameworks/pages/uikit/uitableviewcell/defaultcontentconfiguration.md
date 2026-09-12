> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/defaultcontentconfiguration](https://developer.apple.com/documentation/uikit/uitableviewcell/defaultcontentconfiguration)

# defaultContentConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves a default list content configuration for the cell’s style.

## Declaration

```objectivec
- (UIListContentConfiguration *) defaultContentConfiguration;
```

<a id="return-value"></a>

## Return Value

A default list content configuration. The system determines default values for the configuration according to the section where the cell appears.

<a id="Discussion"></a>

## Discussion

The default content configuration has preconfigured default styling, but doesn’t contain any content. After you get the default configuration, you assign your content to it, customize any other properties, and assign it to the cell as the current [contentConfiguration](contentconfiguration-9ktox.md).

```swift
var content = cell.defaultContentConfiguration()

// Configure content.
content.image = UIImage(systemName: "star")
content.text = "Favorites"

// Customize appearance.
content.imageProperties.tintColor = .purple

cell.contentConfiguration = content
```

## See Also

### Managing the content

- [contentConfiguration](contentconfiguration-2lzvp.md): The current content configuration of the cell.
- [automaticallyUpdatesContentConfiguration](automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the cell automatically updates its content configuration when its state changes.
- [contentView](contentview.md): The content view of the cell object.
