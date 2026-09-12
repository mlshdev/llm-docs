> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaritoolbaritem/setbadgetext(_:)](https://developer.apple.com/documentation/safariservices/sfsafaritoolbaritem/setbadgetext(_:))

# setBadgeText(\_:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12.4+

Sets the badge text for the toolbar item.

## Declaration

```swift
func setBadgeText(_ badgeText: String?)
```

## Parameters

- `badgeText`: String to display on the badge. Pass `nil` to remove the badge.

## Mentioned In

- [Adjusting settings for a toolbar item](../adjusting-settings-for-a-toolbar-item.md)

## See Also

### Controlling Toolbar Items

- [setEnabled(\_:withBadgeText:)](setenabled%28__withbadgetext_%29.md): Deprecated. Sets the enabled state and the badge text for the toolbar item.
- [setEnabled(\_:)](setenabled%28__%29.md): Sets whether the toolbar item is enabled.
- [setImage(\_:)](setimage%28__%29.md): Sets the image displayed in the toolbar button.
- [setLabel(\_:)](setlabel%28__%29.md)

# setBadgeText: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12.4+

Sets the badge text for the toolbar item.

## Declaration

```objectivec
- (void) setBadgeText:(NSString *) badgeText;
```

## Parameters

- `badgeText`: String to display on the badge. Pass `nil` to remove the badge.

## Mentioned In

- [Adjusting settings for a toolbar item](../adjusting-settings-for-a-toolbar-item.md)

## See Also

### Controlling Toolbar Items

- [setEnabled:withBadgeText:](setenabled%28__withbadgetext_%29.md): Deprecated. Sets the enabled state and the badge text for the toolbar item.
- [setEnabled:](setenabled%28__%29.md): Sets whether the toolbar item is enabled.
- [setImage:](setimage%28__%29.md): Sets the image displayed in the toolbar button.
- [setLabel:](setlabel%28__%29.md)
