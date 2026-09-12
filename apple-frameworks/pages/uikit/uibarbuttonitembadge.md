> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitembadge](https://developer.apple.com/documentation/uikit/uibarbuttonitembadge)

# UIBarButtonItemBadge

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A badge to be rendered on a bar button item.

## Declaration

```objectivec
@interface UIBarButtonItemBadge : NSObject
```

## Topics

### Instance Properties

- [backgroundColor](uibarbuttonitembadge/backgroundcolor.md): The badge’s background color. A `nil` value will be treated as an indication to use the system default.
- [font](uibarbuttonitembadge/font.md): The font to use for the badge. A `nil` value will be treated as an indication to use the system default.
- [foregroundColor](uibarbuttonitembadge/foregroundcolor.md): The badge’s foreground color. A `nil` value will be treated as an indication to use the system default.
- [stringValue](uibarbuttonitembadge/stringvalue.md)

### Instance Methods

- [init](uibarbuttonitembadge/init.md)

### Type Methods

- [badgeWithCount:](uibarbuttonitembadge/badgewithcount_.md): Creates a badge with the specified `count`.
- [badgeWithString:](uibarbuttonitembadge/badgewithstring_.md): Creates a badge with the specified `string`.
- [indicatorBadge](uibarbuttonitembadge/indicatorbadge.md): Creates a badge that’s empty, and just renders the badge background with no content.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Adding a badge

- [badge](uibarbuttonitem/badge-1zzen.md): Sets a badge on the bar button item. Supported in navigation bars and toolbars.
