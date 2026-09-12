> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/largetitledisplaymode-swift.enum](https://developer.apple.com/documentation/uikit/uinavigationitem/largetitledisplaymode-swift.enum)

# UINavigationItem.LargeTitleDisplayMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that indicate how to size the title of this item.

## Declaration

```swift
enum LargeTitleDisplayMode
```

## Topics

### Constants

- [UINavigationItem.LargeTitleDisplayMode.automatic](largetitledisplaymode-swift.enum/automatic.md): Inherit the display mode from the previous navigation item.
- [UINavigationItem.LargeTitleDisplayMode.always](largetitledisplaymode-swift.enum/always.md): Always display a large title.
- [UINavigationItem.LargeTitleDisplayMode.never](largetitledisplaymode-swift.enum/never.md): Never display a large title.

### Enumeration Cases

- [UINavigationItem.LargeTitleDisplayMode.inline](largetitledisplaymode-swift.enum/inline.md): Always use a large title when this item is topmost. If there is a back button present, this will revert to `Always`. Leading & center items will move to the overflow menu if present.

### Initializers

- [init(rawValue:)](largetitledisplaymode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the title

- [title](title.md): The navigation item’s title that displays in the navigation bar.
- [attributedTitle](attributedtitle-25fxb.md)
- [largeTitle](largetitle.md): String to be used as the large title.
- [largeTitleDisplayMode](largetitledisplaymode-swift.property.md): The mode for displaying the title of the navigation bar.

# UINavigationItemLargeTitleDisplayMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that indicate how to size the title of this item.

## Declaration

```objectivec
enum UINavigationItemLargeTitleDisplayMode : NSInteger;
```

## Topics

### Constants

- [UINavigationItemLargeTitleDisplayModeAutomatic](largetitledisplaymode-swift.enum/automatic.md): Inherit the display mode from the previous navigation item.
- [UINavigationItemLargeTitleDisplayModeAlways](largetitledisplaymode-swift.enum/always.md): Always display a large title.
- [UINavigationItemLargeTitleDisplayModeNever](largetitledisplaymode-swift.enum/never.md): Never display a large title.

### Enumeration Cases

- [UINavigationItemLargeTitleDisplayModeInline](largetitledisplaymode-swift.enum/inline.md): Always use a large title when this item is topmost. If there is a back button present, this will revert to `Always`. Leading & center items will move to the overflow menu if present.

## See Also

### Configuring the title

- [title](title.md): The navigation item’s title that displays in the navigation bar.
- [attributedTitle](attributedtitle-9l8p2.md): An attributed string that is rendered as the title in the navigation bar.
- [largeTitle](largetitle.md): String to be used as the large title.
- [largeTitleDisplayMode](largetitledisplaymode-swift.property.md): The mode for displaying the title of the navigation bar.
