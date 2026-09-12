> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/standardappearance](https://developer.apple.com/documentation/uikit/uinavigationitem/standardappearance)

# standardAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance settings for a standard-height navigation bar.

## Declaration

```swift
@NSCopying var standardAppearance: UINavigationBarAppearance? { get set }
```

<a id="Discussion"></a>

## Discussion

When the navigation bar displays the current navigation item, the appearance settings in this property override the settings provided by the [standardAppearance](../uinavigationbar/standardappearance.md) property of [UINavigationBar](../uinavigationbar.md).

Use this property to apply appearance settings to the navigation bar based on the navigation item stored in the [topItem](../uinavigationbar/topitem.md) property. If the top item’s [standardAppearance](standardappearance.md) property is `nil`, UIKit uses the navigation bar’s appearance.

## See Also

### Overriding the navigation bar’s appearance settings

- [compactAppearance](compactappearance.md): The appearance settings for a compact-height navigation bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for a standard-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.

# standardAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance settings for a standard-height navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UINavigationBarAppearance * standardAppearance;
```

<a id="Discussion"></a>

## Discussion

When the navigation bar displays the current navigation item, the appearance settings in this property override the settings provided by the [standardAppearance](../uinavigationbar/standardappearance.md) property of [UINavigationBar](../uinavigationbar.md).

Use this property to apply appearance settings to the navigation bar based on the navigation item stored in the [topItem](../uinavigationbar/topitem.md) property. If the top item’s [standardAppearance](standardappearance.md) property is `nil`, UIKit uses the navigation bar’s appearance.

## See Also

### Overriding the navigation bar’s appearance settings

- [compactAppearance](compactappearance.md): The appearance settings for a compact-height navigation bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for a standard-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
