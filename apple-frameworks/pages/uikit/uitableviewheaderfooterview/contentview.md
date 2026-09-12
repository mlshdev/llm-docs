> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview/contentview](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/contentview)

# contentView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The content view of the header or footer.

## Declaration

```swift
var contentView: UIView { get }
```

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

To create your header or footer content, you add subviews to the view in this property. Your custom subviews represent the main content of your header or footer. Be sure to configure all subviews.

## See Also

### Managing the content

- [defaultContentConfiguration()](defaultcontentconfiguration%28%29.md): Retrieves a default list content configuration for the view’s style.
- [contentConfiguration](contentconfiguration-6b4eg.md): The current content configuration of the view.
- [automaticallyUpdatesContentConfiguration](automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the view automatically updates its content configuration when its state changes.

# contentView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The content view of the header or footer.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UIView * contentView;
```

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

To create your header or footer content, you add subviews to the view in this property. Your custom subviews represent the main content of your header or footer. Be sure to configure all subviews.

## See Also

### Managing the content

- [defaultContentConfiguration](defaultcontentconfiguration.md): Retrieves a default list content configuration for the view’s style.
- [contentConfiguration](contentconfiguration-r49e.md): The current content configuration of the view.
- [automaticallyUpdatesContentConfiguration](automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the view automatically updates its content configuration when its state changes.
