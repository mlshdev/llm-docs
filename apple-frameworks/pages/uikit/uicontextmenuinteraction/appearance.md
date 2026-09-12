> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuinteraction/appearance](https://developer.apple.com/documentation/uikit/uicontextmenuinteraction/appearance)

# UIContextMenuInteraction.appearance (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

Constants that describe the appearance of the menu.

## Declaration

```swift
enum appearance
```

## Topics

### Constants

- [UIContextMenuInteraction.appearance.unknown](appearance/unknown.md): No menu appearance.
- [UIContextMenuInteraction.appearance.rich](appearance/rich.md): A modal menu with an optional preview.
- [UIContextMenuInteraction.appearance.compact](appearance/compact.md): A nonmodal, compact menu with no preview.

### Initializers

- [init(rawValue:)](appearance/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the menu appearance

- [menuAppearance](menuappearance.md): The appearance of the context menu.

# UIContextMenuInteractionAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

Constants that describe the appearance of the menu.

## Declaration

```objectivec
enum UIContextMenuInteractionAppearance : NSInteger;
```

## Topics

### Constants

- [UIContextMenuInteractionAppearanceUnknown](appearance/unknown.md): No menu appearance.
- [UIContextMenuInteractionAppearanceRich](appearance/rich.md): A modal menu with an optional preview.
- [UIContextMenuInteractionAppearanceCompact](appearance/compact.md): A nonmodal, compact menu with no preview.

## See Also

### Getting the menu appearance

- [menuAppearance](menuappearance.md): The appearance of the context menu.
