> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uidocumentmenuviewcontroller/addoption(withtitle:image:order:handler:)

# addOption(withTitle:image:order:handler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Adds a custom menu item to the list of document pickers.

> For more information, see [UIDocumentMenuViewController](../uidocumentmenuviewcontroller.md).

## Declaration

```swift
func addOption(withTitle title: String, image: UIImage?, order: UIDocumentMenuOrder, handler: @escaping () -> Void)
```

## Parameters

- `title`: The custom menu item’s title.
- `image`: The custom menu item’s image.
- `order`: The position of this menu item. See [UIDocumentMenuOrder](../uidocumentmenuorder.md) for possible values.
- `handler`: A block that is called when the user selects this custom menu item.

## See Also

### Configuring a document menu

- [UIDocumentMenuOrder](../uidocumentmenuorder.md): Deprecated. The insertion point for custom menu items.

# addOptionWithTitle:image:order:handler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Adds a custom menu item to the list of document pickers.

> For more information, see [UIDocumentMenuViewController](../uidocumentmenuviewcontroller.md).

## Declaration

```objectivec
- (void) addOptionWithTitle:(NSString *) title image:(UIImage *) image order:(UIDocumentMenuOrder) order handler:(void (^)()) handler;
```

## Parameters

- `title`: The custom menu item’s title.
- `image`: The custom menu item’s image.
- `order`: The position of this menu item. See [UIDocumentMenuOrder](../uidocumentmenuorder.md) for possible values.
- `handler`: A block that is called when the user selects this custom menu item.

## See Also

### Configuring a document menu

- [UIDocumentMenuOrder](../uidocumentmenuorder.md): Deprecated. The insertion point for custom menu items.
