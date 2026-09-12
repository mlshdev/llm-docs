> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/setbottomaccessory(_:animated:)](https://developer.apple.com/documentation/uikit/uitabbarcontroller/setbottomaccessory(_:animated:))

# setBottomAccessory(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Sets a bottom accessory with an option to animate the change.

## Declaration

```swift
func setBottomAccessory(_ bottomAccessory: UITabAccessory?, animated: Bool)
```

## See Also

### Customizing the tab bar appearance

- [isTabBarHidden](istabbarhidden.md): Determines if the active tab bar is currently hidden.
- [setTabBarHidden(\_:animated:)](settabbarhidden%28__animated_%29.md): Changes the active tab bar’s visibility with an option to animate the change.
- [bottomAccessory](bottomaccessory.md): An optional bottom accessory of the tab bar controller.
- [compactTabIdentifiers](compacttabidentifiers.md): An optional filter to display only select root-level tabs when in a compact appearance.
- [customizationIdentifier](customizationidentifier.md): The customization identifier for the tab bar and sidebar for persistence.
- [prominentTabIdentifier](prominenttabidentifier.md): The identifier of the tab that should be displayed as prominent. Where supported, the specified tab receives enhanced visual emphasis in the tab bar. If this property is nil, and there is a `UISearchTab` that could become prominent (when `automaticallyActivatesSearch = true`), then the search tab will receive the prominent treatment by default.
- [setProminentTabIdentifier(\_:animated:)](setprominenttabidentifier%28__animated_%29.md): Sets the prominent tab identifier with an option to animate the change.

# setBottomAccessory:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Sets a bottom accessory with an option to animate the change.

## Declaration

```objectivec
- (void) setBottomAccessory:(UITabAccessory *) bottomAccessory animated:(BOOL) animated;
```

## See Also

### Customizing the tab bar appearance

- [tabBarHidden](istabbarhidden.md): Determines if the active tab bar is currently hidden.
- [setTabBarHidden:animated:](settabbarhidden%28__animated_%29.md): Changes the active tab bar’s visibility with an option to animate the change.
- [bottomAccessory](bottomaccessory.md): An optional bottom accessory of the tab bar controller.
- [compactTabIdentifiers](compacttabidentifiers.md): An optional filter to display only select root-level tabs when in a compact appearance.
- [customizationIdentifier](customizationidentifier.md): The customization identifier for the tab bar and sidebar for persistence.
- [prominentTabIdentifier](prominenttabidentifier.md): The identifier of the tab that should be displayed as prominent. Where supported, the specified tab receives enhanced visual emphasis in the tab bar. If this property is nil, and there is a `UISearchTab` that could become prominent (when `automaticallyActivatesSearch = true`), then the search tab will receive the prominent treatment by default.
- [setProminentTabIdentifier:animated:](setprominenttabidentifier%28__animated_%29.md): Sets the prominent tab identifier with an option to animate the change.
