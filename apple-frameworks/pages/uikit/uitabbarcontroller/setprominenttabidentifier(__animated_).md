> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/setprominenttabidentifier(_:animated:)](https://developer.apple.com/documentation/uikit/uitabbarcontroller/setprominenttabidentifier(_:animated:))

# setProminentTabIdentifier(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Sets the prominent tab identifier with an option to animate the change.

## Declaration

```swift
func setProminentTabIdentifier(_ identifier: String?, animated: Bool)
```

## See Also

### Customizing the tab bar appearance

- [isTabBarHidden](istabbarhidden.md): Determines if the active tab bar is currently hidden.
- [setTabBarHidden(\_:animated:)](settabbarhidden%28__animated_%29.md): Changes the active tab bar’s visibility with an option to animate the change.
- [bottomAccessory](bottomaccessory.md): An optional bottom accessory of the tab bar controller.
- [setBottomAccessory(\_:animated:)](setbottomaccessory%28__animated_%29.md): Sets a bottom accessory with an option to animate the change.
- [compactTabIdentifiers](compacttabidentifiers.md): An optional filter to display only select root-level tabs when in a compact appearance.
- [customizationIdentifier](customizationidentifier.md): The customization identifier for the tab bar and sidebar for persistence.
- [prominentTabIdentifier](prominenttabidentifier.md): The identifier of the tab that should be displayed as prominent. Where supported, the specified tab receives enhanced visual emphasis in the tab bar. If this property is nil, and there is a `UISearchTab` that could become prominent (when `automaticallyActivatesSearch = true`), then the search tab will receive the prominent treatment by default.

# setProminentTabIdentifier:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Sets the prominent tab identifier with an option to animate the change.

## Declaration

```objectivec
- (void) setProminentTabIdentifier:(NSString *) identifier animated:(BOOL) animated;
```

## See Also

### Customizing the tab bar appearance

- [tabBarHidden](istabbarhidden.md): Determines if the active tab bar is currently hidden.
- [setTabBarHidden:animated:](settabbarhidden%28__animated_%29.md): Changes the active tab bar’s visibility with an option to animate the change.
- [bottomAccessory](bottomaccessory.md): An optional bottom accessory of the tab bar controller.
- [setBottomAccessory:animated:](setbottomaccessory%28__animated_%29.md): Sets a bottom accessory with an option to animate the change.
- [compactTabIdentifiers](compacttabidentifiers.md): An optional filter to display only select root-level tabs when in a compact appearance.
- [customizationIdentifier](customizationidentifier.md): The customization identifier for the tab bar and sidebar for persistence.
- [prominentTabIdentifier](prominenttabidentifier.md): The identifier of the tab that should be displayed as prominent. Where supported, the specified tab receives enhanced visual emphasis in the tab bar. If this property is nil, and there is a `UISearchTab` that could become prominent (when `automaticallyActivatesSearch = true`), then the search tab will receive the prominent treatment by default.
