> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/standardappearance](https://developer.apple.com/documentation/uikit/uitabbar/standardappearance)

# standardAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance settings for a standard-height tab bar.

## Declaration

```swift
@NSCopying var standardAppearance: UITabBarAppearance { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an appearance object containing the system’s default appearance settings.

## See Also

### Customizing tab bar appearance

- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the tab bar when the edge of scrollable content aligns with the edge of the tab bar.
- [leadingAccessoryView](leadingaccessoryview.md): The view at the leading edge of a tab bar on tvOS.
- [trailingAccessoryView](trailingaccessoryview.md): The view at the trailing edge of a tab bar on tvOS.
- [isTranslucent](istranslucent.md): A Boolean value that indicates whether the tab bar is translucent.
- [Legacy customizations](../uitabbar-legacy-customizations.md): Customize appearance information directly on the tab bar object.

# standardAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance settings for a standard-height tab bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) UITabBarAppearance * standardAppearance;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an appearance object containing the system’s default appearance settings.

## See Also

### Customizing tab bar appearance

- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the tab bar when the edge of scrollable content aligns with the edge of the tab bar.
- [leadingAccessoryView](leadingaccessoryview.md): The view at the leading edge of a tab bar on tvOS.
- [trailingAccessoryView](trailingaccessoryview.md): The view at the trailing edge of a tab bar on tvOS.
- [translucent](istranslucent.md): A Boolean value that indicates whether the tab bar is translucent.
- [Legacy customizations](../uitabbar-legacy-customizations.md): Customize appearance information directly on the tab bar object.
