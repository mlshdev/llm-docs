> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/settabbarhidden(_:animated:)](https://developer.apple.com/documentation/uikit/uitabbarcontroller/settabbarhidden(_:animated:))

# setTabBarHidden(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Changes the active tab bar’s visibility with an option to animate the change.

## Declaration

```swift
func setTabBarHidden(_ hidden: Bool, animated: Bool)
```

## See Also

### Customizing the tab bar appearance

- [isTabBarHidden](istabbarhidden.md): Determines if the active tab bar is currently hidden.
- [bottomAccessory](bottomaccessory.md): An optional bottom accessory of the tab bar controller.
- [setBottomAccessory(\_:animated:)](setbottomaccessory%28__animated_%29.md): Sets a bottom accessory with an option to animate the change.
- [compactTabIdentifiers](compacttabidentifiers.md): An optional filter to display only select root-level tabs when in a compact appearance.
- [customizationIdentifier](customizationidentifier.md): The customization identifier for the tab bar and sidebar for persistence.
- [prominentTabIdentifier](prominenttabidentifier.md): The identifier of the tab that should be displayed as prominent. Where supported, the specified tab receives enhanced visual emphasis in the tab bar. If this property is nil, and there is a `UISearchTab` that could become prominent (when `automaticallyActivatesSearch = true`), then the search tab will receive the prominent treatment by default.
- [setProminentTabIdentifier(\_:animated:)](setprominenttabidentifier%28__animated_%29.md): Sets the prominent tab identifier with an option to animate the change.

# setTabBarHidden:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Changes the active tab bar’s visibility with an option to animate the change.

## Declaration

```objectivec
- (void) setTabBarHidden:(BOOL) hidden animated:(BOOL) animated;
```

## See Also

### Customizing the tab bar appearance

- [tabBarHidden](istabbarhidden.md): Determines if the active tab bar is currently hidden.
- [bottomAccessory](bottomaccessory.md): An optional bottom accessory of the tab bar controller.
- [setBottomAccessory:animated:](setbottomaccessory%28__animated_%29.md): Sets a bottom accessory with an option to animate the change.
- [compactTabIdentifiers](compacttabidentifiers.md): An optional filter to display only select root-level tabs when in a compact appearance.
- [customizationIdentifier](customizationidentifier.md): The customization identifier for the tab bar and sidebar for persistence.
- [prominentTabIdentifier](prominenttabidentifier.md): The identifier of the tab that should be displayed as prominent. Where supported, the specified tab receives enhanced visual emphasis in the tab bar. If this property is nil, and there is a `UISearchTab` that could become prominent (when `automaticallyActivatesSearch = true`), then the search tab will receive the prominent treatment by default.
- [setProminentTabIdentifier:animated:](setprominenttabidentifier%28__animated_%29.md): Sets the prominent tab identifier with an option to animate the change.
