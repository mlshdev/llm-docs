> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaritoolbaritem/setenabled(_:withbadgetext:)](https://developer.apple.com/documentation/safariservices/sfsafaritoolbaritem/setenabled(_:withbadgetext:))

# setEnabled(\_:withBadgeText:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+ (deprecated in 10.13)

Sets the enabled state and the badge text for the toolbar item.

> use -setEnabled: and -setBadgeText:

## Declaration

```swift
func setEnabled(_ enabled: Bool, withBadgeText badgeText: String?)
```

## Parameters

- `enabled`: [true](https://developer.apple.com/documentation/swift/true) to enable the toolbar item; otherwise [false](https://developer.apple.com/documentation/swift/false).
- `badgeText`: String to display on the badge. Pass `nil` to remove the badge.

<a id="Discussion"></a>

## Discussion

The badge text is visible even when the toolbar item is disabled.

## See Also

### Controlling Toolbar Items

- [setBadgeText(\_:)](setbadgetext%28__%29.md): Sets the badge text for the toolbar item.
- [setEnabled(\_:)](setenabled%28__%29.md): Sets whether the toolbar item is enabled.
- [setImage(\_:)](setimage%28__%29.md): Sets the image displayed in the toolbar button.
- [setLabel(\_:)](setlabel%28__%29.md)

# setEnabled:withBadgeText: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+ (deprecated in 10.13)

Sets the enabled state and the badge text for the toolbar item.

> use -setEnabled: and -setBadgeText:

## Declaration

```objectivec
- (void) setEnabled:(BOOL) enabled withBadgeText:(NSString *) badgeText;
```

## Parameters

- `enabled`: [true](https://developer.apple.com/documentation/swift/true) to enable the toolbar item; otherwise [false](https://developer.apple.com/documentation/swift/false).
- `badgeText`: String to display on the badge. Pass `nil` to remove the badge.

<a id="Discussion"></a>

## Discussion

The badge text is visible even when the toolbar item is disabled.

## See Also

### Controlling Toolbar Items

- [setBadgeText:](setbadgetext%28__%29.md): Sets the badge text for the toolbar item.
- [setEnabled:](setenabled%28__%29.md): Sets whether the toolbar item is enabled.
- [setImage:](setimage%28__%29.md): Sets the image displayed in the toolbar button.
- [setLabel:](setlabel%28__%29.md)
