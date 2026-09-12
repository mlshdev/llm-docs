> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/compactscrolledgeappearance](https://developer.apple.com/documentation/uikit/uinavigationitem/compactscrolledgeappearance)

# compactScrollEdgeAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The appearance settings for a compact-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.

## Declaration

```swift
@NSCopying var compactScrollEdgeAppearance: UINavigationBarAppearance? { get set }
```

<a id="Discussion"></a>

## Discussion

When a compact-height navigation bar displays the top navigation item, the appearance setting in this property overrides the settings in the [compactScrollEdgeAppearance](../uinavigationbar/compactscrolledgeappearance.md) property of [UINavigationBar](../uinavigationbar.md).

Use this property to apply appearance settings to the navigation bar based on the navigation item stored in the [topItem](../uinavigationbar/topitem.md) property. If the top item’s [compactScrollEdgeAppearance](compactscrolledgeappearance.md) property is `nil`, UIKit uses the navigation bar’s compact scroll edge appearance.

## See Also

### Overriding the navigation bar’s appearance settings

- [standardAppearance](standardappearance.md): The appearance settings for a standard-height navigation bar.
- [compactAppearance](compactappearance.md): The appearance settings for a compact-height navigation bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for a standard-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.

# compactScrollEdgeAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The appearance settings for a compact-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UINavigationBarAppearance * compactScrollEdgeAppearance;
```

<a id="Discussion"></a>

## Discussion

When a compact-height navigation bar displays the top navigation item, the appearance setting in this property overrides the settings in the [compactScrollEdgeAppearance](../uinavigationbar/compactscrolledgeappearance.md) property of [UINavigationBar](../uinavigationbar.md).

Use this property to apply appearance settings to the navigation bar based on the navigation item stored in the [topItem](../uinavigationbar/topitem.md) property. If the top item’s [compactScrollEdgeAppearance](compactscrolledgeappearance.md) property is `nil`, UIKit uses the navigation bar’s compact scroll edge appearance.

## See Also

### Overriding the navigation bar’s appearance settings

- [standardAppearance](standardappearance.md): The appearance settings for a standard-height navigation bar.
- [compactAppearance](compactappearance.md): The appearance settings for a compact-height navigation bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for a standard-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
