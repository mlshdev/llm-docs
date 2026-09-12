> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/standardappearance](https://developer.apple.com/documentation/uikit/uinavigationbar/standardappearance)

# standardAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance settings for a standard-height navigation bar.

## Declaration

```swift
@NSCopying var standardAppearance: UINavigationBarAppearance { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an appearance object containing the system’s default appearance settings. You can customize the navigation bar appearance for specific navigation items with the [standardAppearance](../uinavigationitem/standardappearance.md) property of [UINavigationItem](../uinavigationitem.md).

## See Also

### Customizing the bar’s appearance

- [prefersLargeTitles](preferslargetitles.md): A Boolean value that indicates whether the title displays in a large format.
- [compactAppearance](compactappearance.md): The appearance settings for a compact-height navigation bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [isTranslucent](istranslucent.md): A Boolean value that indicates whether the navigation bar is translucent.
- [Legacy customizations](../uinavigationbar-legacy-customizations.md): Customize appearance information directly on the navigation bar object.

# standardAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance settings for a standard-height navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) UINavigationBarAppearance * standardAppearance;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an appearance object containing the system’s default appearance settings. You can customize the navigation bar appearance for specific navigation items with the [standardAppearance](../uinavigationitem/standardappearance.md) property of [UINavigationItem](../uinavigationitem.md).

## See Also

### Customizing the bar’s appearance

- [prefersLargeTitles](preferslargetitles.md): A Boolean value that indicates whether the title displays in a large format.
- [compactAppearance](compactappearance.md): The appearance settings for a compact-height navigation bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [translucent](istranslucent.md): A Boolean value that indicates whether the navigation bar is translucent.
- [Legacy customizations](../uinavigationbar-legacy-customizations.md): Customize appearance information directly on the navigation bar object.
