> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/preferslargetitles](https://developer.apple.com/documentation/uikit/uinavigationbar/preferslargetitles)

# prefersLargeTitles (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the title displays in a large format.

## Declaration

```swift
var prefersLargeTitles: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the navigation bar allows the title to be displayed out-of-line and using a larger font. The navigation item used to build the bar must specify whether it wants its title displayed in the large or small format. Use the [largeTitleDisplayMode](../uinavigationitem/largetitledisplaymode-swift.property.md) property to configure the title’s appearance.

When the property is set to [false](https://developer.apple.com/documentation/swift/false), the navigation bar displays the title inline with the other bar button items.

## See Also

### Customizing the bar’s appearance

- [standardAppearance](standardappearance.md): The appearance settings for a standard-height navigation bar.
- [compactAppearance](compactappearance.md): The appearance settings for a compact-height navigation bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [isTranslucent](istranslucent.md): A Boolean value that indicates whether the navigation bar is translucent.
- [Legacy customizations](../uinavigationbar-legacy-customizations.md): Customize appearance information directly on the navigation bar object.

# prefersLargeTitles (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the title displays in a large format.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL prefersLargeTitles;
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the navigation bar allows the title to be displayed out-of-line and using a larger font. The navigation item used to build the bar must specify whether it wants its title displayed in the large or small format. Use the [largeTitleDisplayMode](../uinavigationitem/largetitledisplaymode-swift.property.md) property to configure the title’s appearance.

When the property is set to [false](https://developer.apple.com/documentation/swift/false), the navigation bar displays the title inline with the other bar button items.

## See Also

### Customizing the bar’s appearance

- [standardAppearance](standardappearance.md): The appearance settings for a standard-height navigation bar.
- [compactAppearance](compactappearance.md): The appearance settings for a compact-height navigation bar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height navigation bar when the edge of scrollable content aligns with the edge of the navigation bar.
- [translucent](istranslucent.md): A Boolean value that indicates whether the navigation bar is translucent.
- [Legacy customizations](../uinavigationbar-legacy-customizations.md): Customize appearance information directly on the navigation bar object.
