> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/compactappearance](https://developer.apple.com/documentation/uikit/uinavigationbar/compactappearance)

# compactAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance settings for a compact-height navigation bar.

## Declaration

```swift
@NSCopying var compactAppearance: UINavigationBarAppearance? { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, UIKit uses the [standardAppearance](../uinavigationitem/standardappearance.md) of the item stored in the [topItem](topitem.md) property. You can customize the compact appearance for specific navigation items with the [compactAppearance](../uinavigationitem/compactappearance.md) property of [UINavigationItem](../uinavigationitem.md).

## See Also

### Customizing the bar’s appearance

- [prefersLargeTitles](preferslargetitles.md): A Boolean value that indicates whether the title displays in a large format.
- [standardAppearance](standardappearance.md): The appearance settings for a standard-height navigation bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [isTranslucent](istranslucent.md): A Boolean value that indicates whether the navigation bar is translucent.
- [Legacy customizations](../uinavigationbar-legacy-customizations.md): Customize appearance information directly on the navigation bar object.

# compactAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance settings for a compact-height navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UINavigationBarAppearance * compactAppearance;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, UIKit uses the [standardAppearance](../uinavigationitem/standardappearance.md) of the item stored in the [topItem](topitem.md) property. You can customize the compact appearance for specific navigation items with the [compactAppearance](../uinavigationitem/compactappearance.md) property of [UINavigationItem](../uinavigationitem.md).

## See Also

### Customizing the bar’s appearance

- [prefersLargeTitles](preferslargetitles.md): A Boolean value that indicates whether the title displays in a large format.
- [standardAppearance](standardappearance.md): The appearance settings for a standard-height navigation bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [translucent](istranslucent.md): A Boolean value that indicates whether the navigation bar is translucent.
- [Legacy customizations](../uinavigationbar-legacy-customizations.md): Customize appearance information directly on the navigation bar object.
