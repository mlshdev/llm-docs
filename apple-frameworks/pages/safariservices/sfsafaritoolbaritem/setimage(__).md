> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaritoolbaritem/setimage(_:)](https://developer.apple.com/documentation/safariservices/sfsafaritoolbaritem/setimage(_:))

# setImage(\_:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12.4+

Sets the image displayed in the toolbar button.

## Declaration

```swift
func setImage(_ image: NSImage?)
```

## Parameters

- `image`: The image to display in the toolbar button.

## Mentioned In

- [Adjusting settings for a toolbar item](../adjusting-settings-for-a-toolbar-item.md)

<a id="Discussion"></a>

## Discussion

Pass nil to use the image specified in the `Info.plist` file.

## See Also

### Controlling Toolbar Items

- [setEnabled(\_:withBadgeText:)](setenabled%28__withbadgetext_%29.md): Deprecated. Sets the enabled state and the badge text for the toolbar item.
- [setBadgeText(\_:)](setbadgetext%28__%29.md): Sets the badge text for the toolbar item.
- [setEnabled(\_:)](setenabled%28__%29.md): Sets whether the toolbar item is enabled.
- [setLabel(\_:)](setlabel%28__%29.md)

# setImage: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12.4+

Sets the image displayed in the toolbar button.

## Declaration

```objectivec
- (void) setImage:(NSImage *) image;
```

## Parameters

- `image`: The image to display in the toolbar button.

## Mentioned In

- [Adjusting settings for a toolbar item](../adjusting-settings-for-a-toolbar-item.md)

<a id="Discussion"></a>

## Discussion

Pass nil to use the image specified in the `Info.plist` file.

## See Also

### Controlling Toolbar Items

- [setEnabled:withBadgeText:](setenabled%28__withbadgetext_%29.md): Deprecated. Sets the enabled state and the badge text for the toolbar item.
- [setBadgeText:](setbadgetext%28__%29.md): Sets the badge text for the toolbar item.
- [setEnabled:](setenabled%28__%29.md): Sets whether the toolbar item is enabled.
- [setLabel:](setlabel%28__%29.md)
