> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitoolbar/compactappearance](https://developer.apple.com/documentation/uikit/uitoolbar/compactappearance)

# compactAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The appearance settings to use for a compact-height toolbar.

## Declaration

```swift
@NSCopying var compactAppearance: UIToolbarAppearance? { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, UIKit uses the same settings found in the [standardAppearance](standardappearance.md) property.

## See Also

### Customizing appearance

- [standardAppearance](standardappearance.md): The appearance settings to use for a standard-height toolbar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for a standard-height toolbar when the edge of scrollable content aligns with the edge of the toolbar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height toolbar when the edge of any scrollable content aligns with the edge of a compact-height toolbar.
- [isTranslucent](istranslucent.md): A Boolean value that indicates whether the toolbar is translucent.
- [Legacy customizations](../uitoolbar-legacy-customizations.md): Customize appearance information directly on the toolbar object.

# compactAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The appearance settings to use for a compact-height toolbar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIToolbarAppearance * compactAppearance;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, UIKit uses the same settings found in the [standardAppearance](standardappearance.md) property.

## See Also

### Customizing appearance

- [standardAppearance](standardappearance.md): The appearance settings to use for a standard-height toolbar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for a standard-height toolbar when the edge of scrollable content aligns with the edge of the toolbar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height toolbar when the edge of any scrollable content aligns with the edge of a compact-height toolbar.
- [translucent](istranslucent.md): A Boolean value that indicates whether the toolbar is translucent.
- [Legacy customizations](../uitoolbar-legacy-customizations.md): Customize appearance information directly on the toolbar object.
