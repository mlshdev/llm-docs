> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitoolbarappearance/prominentbuttonappearance

# prominentButtonAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

The appearance attributes for Prominent buttons.

## Declaration

```swift
@NSCopying var prominentButtonAppearance: UIBarButtonItemAppearance { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to configure the appearance of bar button items that use `UIBarButtonItemStyleProminent`. If the navigation bar doesn’t have any buttons using this style, this property has no effect.

## See Also

### Configuring bar button items

- [buttonAppearance](buttonappearance.md): The appearance attributes for plain bar button items in the toolbar.

# prominentButtonAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

The appearance attributes for Prominent buttons.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) UIBarButtonItemAppearance * prominentButtonAppearance;
```

<a id="discussion"></a>

## Discussion

Use this property to configure the appearance of bar button items that use `UIBarButtonItemStyleProminent`. If the navigation bar doesn’t have any buttons using this style, this property has no effect.

## See Also

### Configuring bar button items

- [buttonAppearance](buttonappearance.md): The appearance attributes for plain bar button items in the toolbar.
