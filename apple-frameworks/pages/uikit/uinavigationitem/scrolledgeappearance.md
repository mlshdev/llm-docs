> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/scrolledgeappearance](https://developer.apple.com/documentation/uikit/uinavigationitem/scrolledgeappearance)

# scrollEdgeAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance settings for a standard-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.

## Declaration

```swift
@NSCopying var scrollEdgeAppearance: UINavigationBarAppearance? { get set }
```

<a id="Discussion"></a>

## Discussion

When the navigation bar displays the top navigation item, the appearance settings in this property override the settings provided by the [scrollEdgeAppearance](../uinavigationbar/scrolledgeappearance.md) property of [UINavigationBar](../uinavigationbar.md).

Use this property to apply appearance settings to the navigation bar based on the navigation item stored in the [topItem](../uinavigationbar/topitem.md) property. If the top item’s [scrollEdgeAppearance](../uitabbaritem/scrolledgeappearance.md) property is `nil`, UIKit uses the navigation bar’s scroll edge appearance.

When running on apps that use iOS 14 or earlier, this property applies to navigation bars with large titles. In iOS 15, this property applies to all navigation bars.

## See Also

### Overriding the navigation bar’s appearance settings

- [standardAppearance](standardappearance.md): The appearance settings for a standard-height navigation bar.
- [compactAppearance](compactappearance.md): The appearance settings for a compact-height navigation bar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.

# scrollEdgeAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance settings for a standard-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UINavigationBarAppearance * scrollEdgeAppearance;
```

<a id="Discussion"></a>

## Discussion

When the navigation bar displays the top navigation item, the appearance settings in this property override the settings provided by the [scrollEdgeAppearance](../uinavigationbar/scrolledgeappearance.md) property of [UINavigationBar](../uinavigationbar.md).

Use this property to apply appearance settings to the navigation bar based on the navigation item stored in the [topItem](../uinavigationbar/topitem.md) property. If the top item’s [scrollEdgeAppearance](../uitabbaritem/scrolledgeappearance.md) property is `nil`, UIKit uses the navigation bar’s scroll edge appearance.

When running on apps that use iOS 14 or earlier, this property applies to navigation bars with large titles. In iOS 15, this property applies to all navigation bars.

## See Also

### Overriding the navigation bar’s appearance settings

- [standardAppearance](standardappearance.md): The appearance settings for a standard-height navigation bar.
- [compactAppearance](compactappearance.md): The appearance settings for a compact-height navigation bar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
